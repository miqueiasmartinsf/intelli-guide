import Image from 'next/image'

import ImgFormular from '@/public/formula.jpg'

import { ProgressBar } from './progress-bar'

type QuizProps = {
  levels: number
}

const ANSWERS_MOCK = [
  { answer: 'Ayrton Senna', alternative: 'A' },
  { answer: 'Lewis Hamilton', alternative: 'B' },
  { answer: 'Michael Schumacher', alternative: 'C' },
  { answer: 'Sebastian Vettel', alternative: 'D' },
  { answer: 'Fernando Alonso', alternative: 'E' },
]

export function Quiz({ levels }: QuizProps) {
  return (
    <div className="h-full w-full rounded-md border-2">
      <ProgressBar levels={levels} />

      <div className="px-4 py-8">
        <div className="">
          <div className="relative max-w-[700px]">
            <Image
              src={ImgFormular}
              alt="Carro de formula 1"
              width={1280}
              height={773}
            />
          </div>
          <p className="mt-4 text-xl text-black">
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
            maxime hic aliquam repellat?
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-5">
          {ANSWERS_MOCK.map((item) => {
            return (
              <div className="flex w-[350px] cursor-pointer items-center gap-5 rounded-md border-2 p-2 hover:bg-black/5">
                <span className="rounded-full bg-primary p-2 px-3.5 font-bold text-white">
                  {item.alternative}
                </span>{' '}
                <h3>{item.answer}</h3>
              </div>
            )
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-5">
          {ANSWERS_MOCK.map((item) => {
            return (
              <div className="flex w-[350px] cursor-pointer items-center gap-5 rounded-md border-2 p-2 hover:bg-black/5">
                <span className="rounded-full bg-primary p-2 px-3.5 font-bold text-white">
                  {item.alternative}
                </span>{' '}
                <h3>{item.answer}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
