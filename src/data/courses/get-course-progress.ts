import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const getCourseProgress = async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    if (!userId) {
      return null
    }

    const userProgress = await db.userProgress.findUnique({
      where: { userId },
      include: {
        activeCourse: true,
      },
    })

    if (!userProgress?.activeCourseId) {
      return null
    }

    const unitsInActiveCourse = await db.unit.findMany({
      where: {
        coursesId: userProgress.activeCourseId,
      },
      orderBy: {
        order: 'asc',
      },
      include: {
        Lessons: {
          orderBy: {
            order: 'asc',
          },
          include: {
            Unit: true,
            Challenge: {
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

    const firstUncompletedLesson = unitsInActiveCourse
      .flatMap((unit) => unit.Lessons)
      .find((lesson) =>
        lesson.Challenge.some(
          (challenge) =>
            !challenge.ChallengeProgress ||
            challenge.ChallengeProgress.length === 0 || // ou ==
            challenge.ChallengeProgress.some(
              (progress) => progress.completed === false, // ou ==
            ),
        ),
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
