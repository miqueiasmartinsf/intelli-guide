import { useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '../ui/button'
import MenuIcon from './MenuIcon'

export default function MenuHome() {
    const [menuAppearance, SetMenuAppearance] = useState<boolean>(false)
    console.log(menuAppearance)

    return (
        <div className="hidden max-lg:flex">
            <DropdownMenu onOpenChange={() => SetMenuAppearance(!menuAppearance)}>
                <DropdownMenuTrigger>
                    <MenuIcon menuAppearance={menuAppearance} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="hidden max-lg:flex max-lg:flex-col">
                    <DropdownMenuItem className="bg-primary text-white">
                        <a href="/auth/register">Cadastrar</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <a href="#">Início</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <a href="#">Contato</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <a href="#">Sobre</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <a href="/auth/login">Entrar</a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
