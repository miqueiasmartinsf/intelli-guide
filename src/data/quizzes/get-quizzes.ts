import { cache } from 'react'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getUserProgress } from '../user'

export const getQuizzes = cache(async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    const userProgress = await getUserProgress()

    if (!userId || !userProgress?.activeCategoryId) {
      return []
    }

    const data = await db.quizzes.findMany({
      orderBy: {
        order: 'asc',
      },
      where: {
        categoryId: userProgress.activeCategoryId,
      },
      include: {
        lessons: {
          orderBy: {
            order: 'asc',
          },
          include: {
            challenges: {
              orderBy: {
                order: 'asc',
              },
              include: {
                challenge_progress: {
                  where: {
                    userId,
                  },
                },
              },
            },
          },
        },
      },
    })

    const normalizedData = data.map((unit) => {
      const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
        if (lesson.challenges.length === 0) {
          return { ...lesson, completed: false }
        }
        const allCompletedChallenges = lesson.challenges.every((challenge) => {
          return (
            challenge.challenge_progress &&
            challenge.challenge_progress.length > 0 &&
            challenge.challenge_progress.every((progress) => progress.completed)
          )
        })

        return { ...lesson, completed: allCompletedChallenges }
      })
      return { ...unit, lessons: lessonsWithCompletedStatus }
    })

    return normalizedData
  } catch (error) {
    console.error(error)
    return []
  }
})
