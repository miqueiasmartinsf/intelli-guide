import { cache } from 'react'

import { db } from '@/services/database'

export const getCategoryById = cache(async (courseId: number) => {
  const data = await db.category.findFirst({
    where: {
      id: courseId,
    },
    include: {
      quizzes: {
        orderBy: {
          order: 'asc',
        },
        include: {
          questions: {
            orderBy: {
              order: 'asc',
            },
          },
        },
      },
    },
  })

  return data
})
