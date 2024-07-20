import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getUserProgress } from '../user'

export const getUnits = async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    const userProgress = await getUserProgress()

    if (!userId || !userProgress?.activeCourseId) {
      return []
    }

    const data = await db.unit.findMany({
      orderBy: {
        order: 'asc',
      },
      where: {
        coursesId: userProgress.activeCourseId,
      },
      include: {
        Lessons: {
          orderBy: {
            order: 'asc',
          },
          include: {
            Challenge: {
              orderBy: {
                order: 'asc',
              },
              include: {
                ChallengeProgress: {
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
      const lessonsWithCompletedStatus = unit.Lessons.map((lesson) => {
        if (lesson.Challenge.length === 0) {
          return { ...lesson, completed: false }
        }
        const allCompletedChallenges = lesson.Challenge.every((challenge) => {
          return (
            challenge.ChallengeProgress &&
            challenge.ChallengeProgress.length > 0 &&
            challenge.ChallengeProgress.every((progress) => progress.completed)
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
}
