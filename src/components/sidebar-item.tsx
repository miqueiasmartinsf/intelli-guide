"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import React from "react";

type Props = {
    label: string;
    children: React.ReactNode;
    href: string;
};

export const SidebarItem = ({ label, children, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="h-[52px] justify-start"
            asChild
        >
            <Link href={href} className="flex gap-5">
                {children}
                {label}
            </Link>
        </Button>
    );
};
