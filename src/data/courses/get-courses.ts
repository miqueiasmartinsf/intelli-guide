import { cache } from 'react'

import { db } from '@/services/database'

export const getCourses = cache(async () => {
  try {
    const courses = await db.courses.findMany()

    return courses
  } catch {
    return null
  }
})
