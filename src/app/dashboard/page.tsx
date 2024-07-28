import { Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DashBoardCard } from "@/components/dashboard-card";
import { FeedWrapper } from "@/components/feed-wrapper";
import { RecentlyAdded } from "@/components/recently-added";
import ImgLeaderboard from "@/public/leaderboard.svg";
import { getUserProgress } from "@/data";
import { getTopTenUsers } from "@/app/dashboard/leaderboard/actions";
import { getCategories } from "@/data";

const DashboardPage = async () => {
    const userProgress = await getUserProgress();

    const categoriesPromise = getCategories();
    const leaderboardPromise = getTopTenUsers();

    const [categoriesData, leaderboardData] = await Promise.all([
        categoriesPromise,
        leaderboardPromise,
    ]);

    const recentCategories = categoriesData
        ? categoriesData
              .sort(
                  (a, b) =>
                      new Date(b.created_at).getTime() -
                      new Date(a.created_at).getTime(),
              )
              .slice(0, 3)
        : [];

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

                        <div className="lg:hidden">
                            <RecentlyAdded categories={recentCategories} />
                        </div>
                    </div>
                </FeedWrapper>
            </div>
        </div>
    );
};

export default DashboardPage;
