import { FeedWrapper } from '@/components/feed-wrapper'
import { Header } from './header'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/data'
import { redirect } from 'next/navigation'

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  // const courseProgressData = getCourseProgress();
  // const lessonPercentageData = getLessonPercentage();
  // 
  // const unitsData = getUnits()

  const userSubscriptionData = getUserSubscription();

  const [userProgress, units, courseProgress, lessonPercentage, userSubscription,] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData, userSubscriptionData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
      </StickyWrapper>

      <FeedWrapper>
        <Header title="Learn" />
      </FeedWrapper>
    </div>
  )
}
export default LearnPage
