import { AlarmClock } from "lucide-react";
import Link from "next/link";
import { Categories } from '@prisma/client'

type Props = {
    categories: Categories[] | null
}

export function RecentlyAdded({ categories }: Props) {
    return (
        <div className="min- flex w-full min-w-[250px] flex-col gap-4 rounded-lg border-2 p-4 py-4">
            <div className="flex gap-2">
                <AlarmClock />
                <h1 className="font-bold">Adicionados recentemente</h1>
            </div>
            {categories && categories.map((category) => (
                <div className="flex items-center justify-between rounded-md p-2" key={category.id}>
                    <h2 className="font-bold">{category.title}</h2>
                    <Link href={`/lesson/${category.id}`} className="text-sm text-primary">
                        Responder
                    </Link>
                </div>
            ))}
        </div>
    );
}
