import { Home, IconNode, LucideIcon } from 'lucide-react'

interface AsideButtonProps {
  Icon: LucideIcon
  text: string
}

export function AsideButton({ Icon, text }: AsideButtonProps) {
  return (
    <div className="group flex w-full max-w-96 items-center gap-4 px-12 py-2 hover:bg-primary">
      <Icon size={24} />
      <h1 className="">{text}</h1>
    </div>
  )
}
