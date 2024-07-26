import Image from 'next/image'
import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/data'
import ImgShop from '@/public/shop.svg'

import { Items } from './items'

const shopPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ])

  if (!userProgress || !userProgress.activeCategoryId) {
    redirect('/dashboard/categories')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCategory={userProgress.activeCategoryId}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src={ImgShop} alt="Shop" height={90} width={90} />
          <h1 className="text-xenter my-6 text-2xl font-bold text-neutral-800">
            Shop
          </h1>

          <p className="mb-6 text-center text-lg text-muted-foreground">
            Spend your points on cool stuff.
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  )
}

export default shopPage
