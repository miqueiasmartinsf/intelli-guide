import Link from "next/link";
import { AlarmClock } from "lucide-react";

export function RecentlyAdded() {
    return (
        <div className="flex w-full flex-col gap-4 rounded-lg border-2 p-4 py-4">
            <div className="flex gap-2">
                <AlarmClock />
                <h1 className="font-bold">Adicionados recentemente</h1>
            </div>
            <div className="flex items-center justify-between rounded-md border-b-2 p-2">
                <h2 className="">Futebol</h2>
                <Link href={""} className="text-sm text-primary">
                    Responder
                </Link>
            </div>
            <div className="flex items-center justify-between rounded-md border-b-2 p-2">
                <h2 className="">Filmes</h2>
                <Link href={""} className="text-sm text-primary">
                    Responder
                </Link>
            </div>
            <div className="flex items-center justify-between rounded-md border-b-2 p-2">
                <h2 className="">Países</h2>
                <Link href={""} className="text-sm text-primary">
                    Responder
                </Link>
            </div>
            <div className="flex items-center justify-between rounded-md p-2">
                <h2 className="">Seríes</h2>
                <Link href={""} className="text-sm text-primary">
                    Responder
                </Link>
            </div>
        </div>
    );
}
