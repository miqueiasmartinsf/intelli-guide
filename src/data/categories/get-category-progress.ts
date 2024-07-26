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

    const lessons = quizzesInactiveCategory.flatMap((quiz) => quiz.lessons)
    console.log("getCategoryProgress -> lessons", lessons)

    const firstUncompletedLesson = lessons.find((lesson) => {
      console.log("getCategoryProgress firstUncompletedLesson-> lesson", lesson)
      if (!lesson.challenges) {
        console.log("Lesson WesleyR:", lesson)
        console.log("Lesson without challenges:", lesson)
        console.log("Lesson without challenges:", lesson)
        return false
      }
      return lesson.challenges.some((challenge) => {
        console.log("getCategoryProgress firstUncompletedLesson -> challenge", challenge)
        
        if (!challenge.challenge_progress) {
          console.log("Challenge WesleyR:", challenge)
          console.log("Challenge without progress:", challenge)
          return true
        }
        return (
          challenge.challenge_progress.length === 0 ||
          challenge.challenge_progress.some(
            (progress) => progress.completed === false,
          )
        )
      })
    })

    console.log("getCategoryProgress -> firstUncompletedLesson", firstUncompletedLesson)
    return {
      activeLesson: firstUncompletedLesson,
      activeLessonId: firstUncompletedLesson?.id,
    }
  } catch (error) {
    console.error(error)
    return null
  }
})