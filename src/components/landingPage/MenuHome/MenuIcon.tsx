import { Dispatch, SetStateAction } from 'react'

interface MenuIconProps {
    menuAppearance: boolean
}

export default function MenuIcon({ menuAppearance }: MenuIconProps) {
    return (
        <div className="z-10 mb-6 hidden flex-col items-end gap-2 max-lg:flex">
            <div
                className={
                    menuAppearance
                        ? 'h-1 w-10 translate-y-3 rotate-[-225deg] rounded-sm bg-black transition-all duration-300 ease-in-out'
                        : 'h-1 w-10 rounded-sm bg-black transition-all duration-300 ease-in-out'
                }
            ></div>
            <div
                className={
                    menuAppearance
                        ? 'hidden transition-all duration-300 ease-in-out'
                        : 'h-1 w-9 rounded-sm bg-black transition-all duration-300 ease-in-out'
                }
            ></div>
            <div
                className={
                    menuAppearance
                        ? 'h-1 w-10 rotate-[225deg] rounded-sm bg-black transition-all duration-300 ease-in-out'
                        : 'h-1 w-7 rounded-sm bg-black transition-all duration-300 ease-in-out'
                }
            ></div>
        </div>
    )
}
