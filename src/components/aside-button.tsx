import { Home, IconNode } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface AsideButtonProps {
    Icon: LucideIcon;
    text: string;
}

export function AsideButton({ Icon, text }: AsideButtonProps) {
    return (
        <div className="flex w-full max-w-96 items-center gap-4 px-6 py-2 hover:bg-primary">
            <Icon color="#828282" size={24} />
            <h1 className="text-neutral-600">{text}</h1>
        </div>
    );
}
