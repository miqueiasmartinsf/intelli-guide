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
    console.log('getLesson courseProgress:', courseProgress)

    const lessonId = id || courseProgress?.activeLessonId
    console.log('getLesson lessonId:', lessonId)

    if (!lessonId) {
      return null
    }

    const data = await db.lessons.findFirst({
      where: {
        id: lessonId,
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

    console.log('getLesson data:', data)

    if (!data || !data.challenges) {
      return null
    }

    const normalizeChallenges = data.challenges.map((challenge) => {
      console.log('getLesson normalizeChallenges challenge:', challenge)
      const completed =
        challenge.challenge_progress &&
        challenge.challenge_progress.length > 0 &&
        challenge.challenge_progress.every((progress) => progress.completed)
      console.log('getLesson normalizeChallenges completed:', completed)
      return { ...challenge, completed }
    })
    console.log('getLesson normalizeChallenges:', normalizeChallenges)

    return { ...data, challenges: normalizeChallenges }
  } catch (error) {
    console.error(error)
    return null
  }
}
