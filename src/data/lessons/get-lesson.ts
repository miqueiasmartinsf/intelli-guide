import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getCourseProgress } from '../courses'

export const getLesson = async (id?: number) => {
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
        id: lessonId,
      },
      include: {
        Challenge: {
          orderBy: {
            order: 'asc',
          },
          include: {
            ChallengeOption: true,
            ChallengeProgress: {
              where: {
                userId,
              },
            },
          },
        },
      },
    })

    if (!data || !data.Challenge) {
      return null
    }

    const normalizeChallenges = data.Challenge.map((challenge) => {
      const completed =
        challenge.ChallengeProgress &&
        challenge.ChallengeProgress.length > 0 &&
        challenge.ChallengeProgress.every((progress) => progress.completed)

      return { ...challenge, completed }
    })

    return { ...data, challenges: normalizeChallenges }
  } catch (error) {
    console.error(error)
    return null
  }
}
