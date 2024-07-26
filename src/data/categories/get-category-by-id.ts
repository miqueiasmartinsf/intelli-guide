import { cache } from 'react'

import { db } from '@/services/database'

export const getCategoryById = cache(async (categoryId: number) => {
  const data = await db.categories.findFirst({
    where: {
      id: categoryId,
    },
    include: {
      quizzes: {
        orderBy: {
          order: 'asc',
        },
        include: {
          lessons: {
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
