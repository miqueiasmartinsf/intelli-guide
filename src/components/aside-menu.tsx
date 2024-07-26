import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function AsideMenu() {
  return (
    <div className="flex h-screen w-[20%] max-w-[600px] flex-col gap-5 px-6 py-4">
      <div className="flex w-full flex-col gap-4 py-4">
        <h1 className="font-bold">Adicionados recentemente</h1>
        <div className="rounded-md border-2 p-4">
          <div className="flex items-center justify-between rounded-md p-2">
            <h2 className="font-bold">Futebol</h2>
            <Link href={''} className="text-sm text-primary">
              Responder
            </Link>
          </div>
          <div className="flex items-center justify-between rounded-md p-2">
            <h2 className="font-bold">Filmes</h2>
            <Link href={''} className="text-sm text-primary">
              Responder
            </Link>
          </div>
          <div className="flex items-center justify-between rounded-md p-2">
            <h2 className="font-bold">Países</h2>
            <Link href={''} className="text-sm text-primary">
              Responder
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link href={'/dashboard/leaderboard'}>
          <h1 className="font-bold">LeaderBoard</h1>
        </Link>
        <Link href={'/dashboard/leaderboard'}>
          <div className="mt-4 flex flex-col gap-4 rounded-md border-2 p-4">
            <div className="flex items-center justify-between">
              <Image
                src={'/leaderboard.svg'}
                width={30}
                height={30}
                alt="leaderboard"
              />
              <h2 className="">Wallace</h2>
              <span className="">500pts</span>
            </div>
            <div className="flex items-center justify-between">
              <Image
                src={'/leaderboard.svg'}
                width={30}
                height={30}
                alt="leaderboard"
              />
              <h2 className="">Daniel</h2>
              <span className="">350pts</span>
            </div>
            <div className="flex items-center justify-between">
              <Image
                src={'/leaderboard.svg'}
                width={30}
                height={30}
                alt="leaderboard"
              />
              <h2 className="">Paulo</h2>
              <span className="">200pts</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
