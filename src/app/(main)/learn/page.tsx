import { FeedWrapper } from '@/components/feed-wrapper'
import { Header } from './header'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'

const LearnPage = async () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{}}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Learn" />
      </FeedWrapper>
    </div>
  )
}
export default LearnPage