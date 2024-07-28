import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DashBoardCard } from "@/components/dashboard-card";
import { FeedWrapper } from "@/components/feed-wrapper";
import { RecentlyAdded } from "@/components/recently-added";
import { getUserProgress } from "@/data";
import ImgLeaderboard from "@/public/leaderboard.svg";

const DashboardPage = async () => {
    const userProgress = await getUserProgress();

    return (
        <div className="px-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="w-full pt-6">
                <FeedWrapper>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <DashBoardCard
                            title="Pontos"
                            content={userProgress ? userProgress?.points : 0}
                            subtitle="Total de acertos acumulados em desafios."
                        />
                        <DashBoardCard
                            title="Vidas restantes"
                            content={userProgress ? userProgress?.hearts : 0}
                            subtitle="Total de vidas restantes nas próximas 24 horas"
                        />

                        <div className="mt-8 flex min-w-[250px] flex-col gap-4 rounded-lg border-2 p-4 lg:hidden">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <Crown />
                                    <h1 className="font-bold">LeaderBoard</h1>
                                </div>

                                <Link
                                    href={"/dashboard/leaderboard"}
                                    className="text-primary"
                                >
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
                                <h2 className="">Wallace</h2>
                                <span className="">500pts</span>
                            </div>
                            <div className="flex items-center justify-between border-b">
                                <Image
                                    src={ImgLeaderboard}
                                    width={30}
                                    height={30}
                                    alt="leaderboard"
                                />
                                <h2 className="">Daniel</h2>
                                <span className="">350pts</span>
                            </div>
                            <div className="flex items-center justify-between border-b">
                                <Image
                                    src={ImgLeaderboard}
                                    width={30}
                                    height={30}
                                    alt="leaderboard"
                                />
                                <h2 className="">Paulo</h2>
                                <span className="">200pts</span>
                            </div>
                            <div className="flex items-center justify-between border-b">
                                <Image
                                    src={ImgLeaderboard}
                                    width={30}
                                    height={30}
                                    alt="leaderboard"
                                />
                                <h2 className="">Wesley</h2>
                                <span className="">150pts</span>
                            </div>
                            <div className="flex items-center justify-between border-b">
                                <Image
                                    src={ImgLeaderboard}
                                    width={30}
                                    height={30}
                                    alt="leaderboard"
                                />
                                <h2 className="">João</h2>
                                <span className="">80pts</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <Image
                                    src={ImgLeaderboard}
                                    width={30}
                                    height={30}
                                    alt="leaderboard"
                                />
                                <h2 className="">Marcos</h2>
                                <span className="">50pts</span>
                            </div>
                        </div>

                        <div className="lg:hidden">
                            <RecentlyAdded />
                        </div>
                    </div>
                </FeedWrapper>
            </div>
        </div>
    );
};

export default DashboardPage;
