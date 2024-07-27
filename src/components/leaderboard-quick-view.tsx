import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ImgLeaderboard from "@/public/leaderboard.svg";

type LeaderboardCardProps = {
    userId: string;
    userName: string;
    userImageSrc: string;
    points: number;
}

export function LeaderboardQuickView({ points, userId, userImageSrc, userName }: LeaderboardCardProps) {
    return (
        <div className="mt-8 flex min-w-[250px] flex-col gap-4 rounded-lg border-2 p-4">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Crown />
                    <h1 className="font-bold">LeaderBoard</h1>
                </div>

                <Link href={"/dashboard/leaderboard"} className="text-primary">
                    Ver mais
                </Link>
            </div>
            <div className="mt-4 flex items-center justify-between border-b">
                <Image
                    src={ImgLeaderboard}
                    width={30}
                    height={30}
                    alt="leaderboard"
                />
                <h2 className="">{userName}</h2>
                <span className="">{points}pts</span>
            </div>
        </div>
    );
}
