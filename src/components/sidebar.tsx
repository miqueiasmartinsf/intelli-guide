import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

import { UserButton } from "./auth/user-button";
import { SidebarItem } from "./sidebar-item";
import {
    House,
    AlarmClockOffIcon,
    ShoppingBagIcon,
    AlertOctagon,
} from "lucide-react";

type Props = {
    className?: string;
};

const navigation = [
    { href: "/", key: "example-1", label: "Início", icon: House },
    {
        href: "/",
        label: "Início",
        icon: AlarmClockOffIcon,
    },
    {
        href: "/",
        label: "Quiz",
        icon: ShoppingBagIcon,
    },
    {
        href: "/",
        label: "Loja",
        icon: AlertOctagon,
    },
];

export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
                className,
            )}
        >
            <Link href="/learn">
                <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
                    <Image
                        src="/intelli-guide.png"
                        height={250}
                        width={250}
                        alt="Mascot"
                    />
                </div>
            </Link>
            <div className="flex flex-1 flex-col gap-y-2">
                {navigation.map((item, index) => {
                    return (
                        <SidebarItem
                            href={item.href}
                            label={item.label}
                            key={index}
                        >
                            {React.createElement(item.icon)}
                        </SidebarItem>
                    );
                })}
            </div>
            <div className="p-4">
                <UserButton />
            </div>
        </div>
    );
};
