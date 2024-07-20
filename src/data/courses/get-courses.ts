import { db } from '@/services/database'

export const getCourses = async () => {
  try {
    const courses = await db.courses.findMany()

    return courses
  } catch {
    return null
  }
}
