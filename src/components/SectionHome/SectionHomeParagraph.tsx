import { ReactNode } from 'react'

export default function SectionHomeParagraph({
  children,
}: {
  children: ReactNode
}) {
  return <p className="mt-8 w-11/12">{children}</p>
}
