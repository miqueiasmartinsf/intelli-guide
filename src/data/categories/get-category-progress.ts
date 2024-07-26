'use server'
import { cache } from 'react'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

import { getUserProgress } from '../user'

export const getCategoryProgress = cache(async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    const userProgress = await getUserProgress()
    console.log("getCategoryProgress -> userProgress", userProgress)

    if (!userId || !userProgress?.activeCategoryId) {
      return null
    }

    const quizzesInactiveCategory = await db.quizzes.findMany({
      where: {
        categoryId: userProgress.activeCategoryId,
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
            quizzes: true,
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

    console.log("getCategoryProgress -> quizzesInactiveCategory", quizzesInactiveCategory)

    console.log("firstUncompletedLesson -> quizzesInactiveCategory flatMap", quizzesInactiveCategory.flatMap((quiz) => quiz.lessons))
    console.log("firstUncompletedLesson -> quizzesInactiveCategory flatMap find", quizzesInactiveCategory.flatMap((quiz) => quiz.lessons).find((lesson) => {
     lesson
    }))
    console.log("firstUncompletedLesson -> quizzesInactiveCategory flatMap find challenges", quizzesInactiveCategory.flatMap((quiz) => quiz.lessons)
    .find((lesson) => {
      lesson.challenges
    }
    ))
    console.log("firstUncompletedLesson -> quizzesInactiveCategory flatMap find challenges some", quizzesInactiveCategory.flatMap((quiz) => quiz.lessons)
    .find((lesson) => {
      lesson.challenges.some((challenge) => {
        challenge
      })
    }
    ))

    const firstUncompletedLesson = quizzesInactiveCategory
    .flatMap((quiz) => quiz.lessons)
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