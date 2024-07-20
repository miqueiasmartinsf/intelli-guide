import { db } from '@/services/database'

export const getCourseById = async (courseId: number) => {
  const data = await db.courses.findFirst({
    where: {
      id: courseId,
    },
    include: {
      Unit: {
        orderBy: {
          order: 'asc',
        },
        include: {
          Lessons: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      },
    },
  })

  return data
}
