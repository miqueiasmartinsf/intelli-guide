import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className="item-center sticky top-0 mb-5 flex justify-between rounded-md border-b-2 bg-primary pb-3 text-white lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Link href="categories">
        <Button size="sm" className="border-none shadow-none">
          <ArrowLeft className="h-5 w-5 stroke-2 text-white" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </div>
  )
}
