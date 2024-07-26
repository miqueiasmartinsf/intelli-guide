import { getCategories, getUserProgress } from '@/data'

import { List } from './list'

const CategoryPage = async () => {
  const categoriesData = getCategories()
  const userProgressData = getUserProgress()

  const [categories, userProgress] = await Promise.all([
    categoriesData,
    userProgressData,
  ])

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Quizz Categories</h1>
      <List
        categories={categories || []}
        activeCategoryId={userProgress?.activeCategoryId || 0}
      />
    </div>
  )
}

export default CategoryPage
