import {
  Award,
  Dices,
  HelpCircle,
  House,
  ShoppingBagIcon,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'
import ImgIntelliGuide from '@/public/intelli-guide.png'

import { UserButton } from './auth/user-button'
import { SidebarItem } from './sidebar-item'

type Props = {
  className?: string
}

const navigation = [
  { href: '/dashboard', key: 'example-1', label: 'Início', icon: House },
  {
    href: '/dashboard/courses',
    label: 'Quiz',
    icon: Dices,
  },
  {
    href: '/dashboard/leaderboard',
    label: 'Leaderboard',
    icon: Award,
  },
  {
    href: '/',
    label: 'Loja',
    icon: ShoppingBagIcon,
  },

  {
    href: '/',
    label: 'Suporte',
    icon: HelpCircle,
  },
  {
    href: '/dashboard/profile',
    label: 'Perfil',
    icon: User,
  },
]

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]',
        className,
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src={ImgIntelliGuide} height={250} width={250} alt="Mascot" />
        </div>
      </Link>
      <div className="mt-14 flex flex-1 flex-col gap-y-2 max-2xl:mt-6">
        {navigation.map((item, index) => {
          return (
            <SidebarItem href={item.href} label={item.label} key={index}>
              {React.createElement(item.icon)}
            </SidebarItem>
          )
        })}
      </div>
      <div className="p-4">
        <UserButton />
      </div>
    </div>
  )
}
