import Link from "next/link";

export function RecentlyAdded() {
    return (
        <div className="flex w-full flex-col gap-4 py-4">
            <h1 className="font-bold">Adicionados recentemente</h1>
            <div className="rounded-md border-2 p-4">
                <div className="flex items-center justify-between rounded-md p-2">
                    <h2 className="font-bold">Futebol</h2>
                    <Link href={""} className="text-sm text-primary">
                        Responder
                    </Link>
                </div>
                <div className="flex items-center justify-between rounded-md p-2">
                    <h2 className="font-bold">Filmes</h2>
                    <Link href={""} className="text-sm text-primary">
                        Responder
                    </Link>
                </div>
                <div className="flex items-center justify-between rounded-md p-2">
                    <h2 className="font-bold">Países</h2>
                    <Link href={""} className="text-sm text-primary">
                        Responder
                    </Link>
                </div>
            </div>
        </div>
    );
}
