import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <div className="item-center top-0 flex gap-5 rounded-md pb-3 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
            <Link href="categories">
                <Button
                    size="sm"
                    variant={"ghost"}
                    className="border-none shadow-none"
                >
                    <ArrowLeft className="h-5 w-5 stroke-2" />
                </Button>
            </Link>
            <h1 className="text-lg font-bold">{title}</h1>
            <div />
        </div>
    );
};
