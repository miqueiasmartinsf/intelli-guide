import { User } from 'lucide-react'

type LeaderboardCardProps = {
  position: number
  name: string
  points: number
}

export function LeaderBoardCard({
  name,
  points,
  position,
}: LeaderboardCardProps) {
  return (
    <div className="hover: flex items-center gap-10 rounded-md border-b-2 px-6 py-4 hover:bg-black/5">
      <div>
        {position < 4 ? (
          <img src="/leaderboard.svg" alt="" className="" />
        ) : (
          <span className="text-xl font-bold">{position}</span>
        )}
      </div>

      <div className="rounded-full border-2 p-2">
        <User color="#c9c9c9" size={30} />
      </div>

      <div>
        <h1 className="text-xl">{name}</h1>
      </div>

      <div>{points} pts</div>
    </div>
  )
}
