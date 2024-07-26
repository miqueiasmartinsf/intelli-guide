import { LeaderBoardCard } from '@/components/leaderboard-card'
import { getUserProgress, getUserSubscription } from '@/data'

import { getTopTenUsers } from './actions'
const LEADER_BOARD_MOCK = [
  { name: 'Wallace Medeiros', points: 500 },
  { name: 'Daniel Prado', points: 350 },
  { name: 'Vitor Albuquerque', points: 250 },
  { name: 'Gabriel Andrade', points: 50 },
  { name: 'Sofia Silva', points: 20 },
]

async function LeaderboardPage() {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()
  const leaderboardData = getTopTenUsers()

  const [userProgress, userSubscription, leaderboad] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
  ])

  return (
    <div className="h-full w-full px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Leaderboard</h1>

      <div className="0 mt-8 flex flex-col justify-center">
        {leaderboad.map((user, index) => {
          return (
            <LeaderBoardCard
              name={user.userName}
              points={user.points}
              position={index + 1}
              key={index}
              profileImg={user.userImageSrc}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LeaderboardPage
