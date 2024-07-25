'use server'
import { cache } from 'react'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getUserProgress } from '../user'

export const getCourseProgress = cache(async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    const userProgress = await getUserProgress()

    if (!userId || !userProgress?.activeCategoryId) {
      return null
    }

    const unitsInactiveCategory = await db.units.findMany({
      where: {
        categoriesId: userProgress.activeCategoryId,
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
            units: true,
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

    const firstUncompletedLesson = unitsInactiveCategory
      .flatMap((unit) => unit.lessons)
      .find((lesson) => {
        return lesson.challenges.some((challenge) => {
          return (
            !challenge.challenge_progress ||
            challenge.challenge_progress.length === 0 ||
            challenge.challenge_progress.some(
              (progress) => progress.completed === false,
            )
          )
        })
      })

    return {
      activeLesson: firstUncompletedLesson,
      activeLessonId: firstUncompletedLesson?.id,
    }
  } catch (error) {
    console.error(error)
    return null
  }
})
