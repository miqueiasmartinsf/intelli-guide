import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ImgLeaderboard from "@/public/leaderboard.svg";

type LeaderboardCardProps = {
    leaderboardData: {
        points: number;
        userId: string;
        userImageSrc: string;
        userName: string;
    }[];
};

export function LeaderboardQuickView({
    leaderboardData,
}: LeaderboardCardProps) {
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
            <div className="mt-4 flex flex-col py-2">
                {leaderboardData.map((user) => {
                    return (
                        <div
                            className="flex w-full justify-between border-t py-2"
                            key={user.userId}
                        >
                            <Image
                                src={ImgLeaderboard}
                                width={30}
                                height={30}
                                alt="leaderboard"
                            />
                            <h2>{user.userName}</h2>

                            <div className="">{user.points} pts</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
