'use client'

import { Courses } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { upsertUserProgress } from '@/actions/user-progress'

import { Card } from './card'

type Props = {
  courses: Courses[]
  activeCourseId?: number
}

export const List = ({ courses, activeCourseId }: Props) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const onClick = (id: number) => {
    if (loading) {
      return
    }

    if (pending) return
    if (id == activeCourseId) {
      return router.push('/learn')
    }

    startTransition(() => {
      if (session && session.user) {
        upsertUserProgress(id, session.user).catch((error) => {
          console.error('Error in upsertUserProgress:', error)
          toast.error('something went wrong')
        })
      } else {
        console.error('Sessão ou usuário não encontrado')
        toast.error('User session not found')
      }
    })
  }

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}
