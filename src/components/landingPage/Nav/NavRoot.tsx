import { CSSProperties, ReactNode } from 'react'

interface NavRootProps {
  children?: ReactNode
  style?: CSSProperties
  navDirection?: 'row' | 'col'
}

export default function NavRoot({
  children,
  style,
  navDirection = 'row',
}: NavRootProps) {
  return (
    <nav className={`max-lg:hidden`} style={style}>
      <ul className={`flex flex-${navDirection} items-center gap-4`}>
        {children}
      </ul>
    </nav>
  )
}
