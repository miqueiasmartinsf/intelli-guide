import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import {
  getCategoryProgress,
  getLessonPercentage,
  getQuizzes,
  getUserProgress,
  getUserSubscription,
} from '@/data'

import { Header } from './header'
import { Quiz } from './quiz'

const LearnPage = async () => {
  const userProgressData = getUserProgress()
  const categoryProgressData = getCategoryProgress()
  const lessonPercentageData = getLessonPercentage()
  const quizzesData = getQuizzes()
  const userSubscriptionData = getUserSubscription()

  const [
    userProgress,
    quizzes,
    categoryProgress,
    lessonPercentage,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    quizzesData,
    categoryProgressData,
    lessonPercentageData,
    userSubscriptionData,
  ])

  if (!userProgress || !userProgress.activeCategory) {
    redirect('/dashboard/categories')
  }

  if (!categoryProgress) {
    redirect('/dashboard/categories')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCategory={userProgress.activeCategory}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <Header title={userProgress.activeCategory.title} />
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="mb-10">
            <Quiz
              id={quiz.id}
              order={quiz.order}
              title={quiz.title}
              description={quiz.description}
              lessons={quiz.lessons}
              activeLesson={categoryProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
