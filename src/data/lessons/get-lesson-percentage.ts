import { cache } from 'react'

import { getCategoryProgress } from '../categories'
import { getLesson } from './get-lesson'

export const getLessonPercentage = cache(async () => {
  const categoryProgress = await getCategoryProgress()

  if (!categoryProgress?.activeLessonId) {
    return 0
  }

  const lesson = await getLesson(categoryProgress.activeLessonId)

  if (!lesson) {
    return 0
  }

  const completedChallenges = lesson.challenges.filter(
    (challenge) => challenge.completed,
  )

  const percentage = Math.round(
    (completedChallenges.length / lesson.challenges.length) * 100,
  )

  return percentage
})
