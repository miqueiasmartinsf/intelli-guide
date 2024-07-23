import Image from 'next/image'

import ImgLeaderboard from '@/public/leaderboard.svg'

import { Button } from './ui/button'

export function AsideMenu() {
  return (
    <div className="flex h-screen max-w-[450px] flex-col gap-5 border-l-2 px-6 py-4">
      <div className="flex flex-col gap-4 border-b-2 py-4">
        <h1 className="font-bold">Melhores Questionários</h1>
        <div className="flex items-center justify-between rounded-md border px-2 py-2">
          <h2 className="font-bold">Futebol</h2>
          <Button size={'sm'} variant={'ghost'} className="text-primary">
            Responder
          </Button>
        </div>
        <div className="flex items-center justify-between rounded-md border px-2 py-2">
          <h2 className="font-bold">Filmes</h2>
          <Button size={'sm'} variant={'ghost'} className="text-primary">
            Responder
          </Button>
        </div>
        <div className="flex items-center justify-between rounded-md border px-2 py-2">
          <h2 className="font-bold">Países</h2>
          <Button size={'sm'} variant={'ghost'} className="text-primary">
            Responder
          </Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <h1 className="font-bold">LeaderBoard</h1>
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
    </div>
  )
}
