import Image from 'next/image'

import { Button } from '@/components/ui/button'

function DashboardPage() {
  return (
    <div className="h-full w-full px-3">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3">
        <div className="flex h-full min-h-[200px] min-w-[200px] cursor-pointer flex-col gap-4 rounded-xl border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2">
          <div>
            <h3 className="text-xl font-bold">Sua pontuação</h3>
            <p className="text-base">
              Toda a sua pontuação acumulada em desafios.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary">1420.3</h2>
          </div>
        </div>
        <div className="flex h-full min-h-[200px] min-w-[200px] cursor-pointer flex-col gap-4 rounded-xl border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2">
          <div>
            <h3 className="text-xl font-bold">Acertos</h3>
            <p className="text-base">
              Total de acertos acumulados em desafios.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary">34</h2>
          </div>
        </div>
        <div className="flex h-full min-h-[200px] min-w-[200px] cursor-pointer flex-col gap-4 rounded-xl border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2">
          <div>
            <h3 className="text-xl font-bold">Acertos</h3>
            <p className="text-base">
              Total de acertos acumulados em desafios.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-primary">34</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
