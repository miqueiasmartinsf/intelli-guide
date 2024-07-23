import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Separator } from '@/components/ui/separator'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/data'
import ImgLeaderboard from '@/public/leaderboard.svg'

import { getTopTenUsers } from './actions'

const LeaderboaardPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()
  const leaderboardData = getTopTenUsers()

  const [userProgress, userSubscription, leaderboad] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src={ImgLeaderboard} alt="leaderboad" height={90} width={90} />
          <h1 className="text-xenter my-6 text-2xl font-bold text-neutral-800">
            leaderboad
          </h1>

          <p className="mb-6 text-center text-lg text-muted-foreground">
            See where you stand amoung other learneres in the community
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderboad.map((userProgress, index) => (
            <div
              key={userProgress.userId}
              className="flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50"
            >
              <p className="mr-4 font-bold text-lime-700">{index + 1}</p>
              <Avatar className="ml-3 mr-6 h-12 w-12 rounded-full border bg-green-500">
                <AvatarImage
                  className="rounded-full object-cover"
                  src={userProgress.userImageSrc}
                />
              </Avatar>
              <p className="flex-1 font-bold text-neutral-800">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LeaderboaardPage
