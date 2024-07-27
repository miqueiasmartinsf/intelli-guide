import { Check } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Imgfootball from "@/public/football.svg";

type Props = {
    title: string;
    id: number;
    imageSrc: string;
    description: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

export const Card = ({
    title,
    id,
    imageSrc,
    description,
    disabled,
    onClick,
    active,
}: Props) => {
    return (
        <div
            className={cn(
                "h-full min-h-[400px] min-w-[250px] rounded-xl border-2 border-b-4 active:border-b-2",
                disabled && "pointer-events-none opacity-50",
            )}
        >
            <div className="min-[24px] flex w-full items-center justify-end">
                {active && (
                    <div className="absolute z-10 flex items-center justify-center rounded-full bg-green-600 p-1.5">
                        <Check className="h-4 w-4 stroke-[4] text-white" />
                    </div>
                )}
            </div>
            <div className="relative z-0 mx-auto w-full rounded-t-xl bg-white h-[165px] overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:h-[220px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="responsive"
                    width={160}
                    height={160}
                    objectFit="cover"
                    className="object-center transition-all duration-300 hover:brightness-110 hover:contrast-125"
                />
            </div>
            <div className="mt-2 h-1/2 w-full gap-2 rounded-b-xl p-4">
                <h2 className="mt-2 font-bold text-neutral-700">{title}</h2>

                <p className="mt-2 line-clamp-3 text-slate-500">
                    {description}
                </p>

                <Button className="mt-2 w-full" onClick={() => onClick(id)}>
                    Começar
                </Button>
            </div>
        </div>
    );
};
