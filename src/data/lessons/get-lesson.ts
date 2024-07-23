import { cache } from 'react'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getCourseProgress } from '../courses'

export const getLesson = cache(async (id?: number) => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    if (!userId) {
      return null
    }

    const courseProgress = await getCourseProgress()

    const lessonId = id || courseProgress?.activeLessonId

    if (!lessonId) {
      return null
    }

    const data = await db.lessons.findFirst({
      where: {
        id: Number(lessonId),
      },
      include: {
        challenges: {
          orderBy: {
            order: 'asc',
          },
          include: {
            challenge_options: true,
            challenge_progress: {
              where: {
                userId,
              },
            },
          },
        },
      },
    })

    if (!data || !data.challenges) {
      return null
    }

    const normalizeChallenges = data.challenges.map((challenge) => {
      const completed =
        challenge.challenge_progress &&
        challenge.challenge_progress.length > 0 &&
        challenge.challenge_progress.every((progress) => progress.completed)
      return { ...challenge, completed }
    })

    return { ...data, challenges: normalizeChallenges }
  } catch (error) {
    console.error(error)
    return null
  }
})
