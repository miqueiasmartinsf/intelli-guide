'use server'
import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getUserProgress } from '../user'

export const getCourseProgress = async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    if (!userId) {
      return null
    }

    const userProgress = await getUserProgress()

    console.log('getCourseProgress userProgress:', userProgress)

    if (!userProgress?.activeCourseId) {
      return null
    }

    const unitsInActiveCourse = await db.units.findMany({
      where: {
        courseId: userProgress.activeCourseId,
      },
      orderBy: {
        order: 'asc',
      },
      include: {
        lessons: {
          orderBy: {
            order: 'asc',
          },
          include: {
            unit: true,
            challenges: {
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

    console.log('getCourseProgress unitsInActiveCourse:', unitsInActiveCourse)

    const firstUncompletedLesson = unitsInActiveCourse
      .flatMap((unit) => unit.lessons)
      .find((lesson) =>
        lesson.challenges.some(
          (challenge) =>
            !challenge.challenge_progress ||
            challenge.challenge_progress.length === 0 || // ou ==
            challenge.challenge_progress.some(
              (progress) => progress.completed === false, // ou ==
            ),
        ),
      )
    console.log(
      'getCourseProgress firstUncompletedLesson:',
      firstUncompletedLesson,
    )

    return {
      activeLesson: firstUncompletedLesson,
      activeLessonId: firstUncompletedLesson?.id,
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
