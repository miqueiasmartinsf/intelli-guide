import { ReactNode } from "react"

interface NavRootProps {
    children?: ReactNode
    navDirection?: 'row' | 'col'
}

export default function NavRoot({ children, navDirection = 'row' }: NavRootProps) {
    return (
        <nav className="max-lg:hidden">
            <ul className={`flex flex-${navDirection} items-center gap-4`}>
                { children }
            </ul>
        </nav>
    )
}