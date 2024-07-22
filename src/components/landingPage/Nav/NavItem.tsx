import { ReactNode } from 'react'

export default function NavItem({ children }: { children?: ReactNode }) {
    return <li>{children}</li>
}
