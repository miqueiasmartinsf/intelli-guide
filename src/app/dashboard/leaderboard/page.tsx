import { Metadata } from "next";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LeaderBoardCard } from "@/components/leaderboard-card";
import { getUserProgress, getUserSubscription } from "@/data";

import { getTopTenUsers } from "./actions";

export const metadata: Metadata = {
    title: "Leaderboard",
    description:
        "Confira o ranking dos melhores participantes no IntelliGuide! Veja quem está no topo, acompanhe seu progresso e desafie-se a alcançar as primeiras posições.",
};

async function LeaderboardPage() {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const leaderboardData = getTopTenUsers();

    const [userProgress, userSubscription, leaderboard] = await Promise.all([
        userProgressData,
        userSubscriptionData,
        leaderboardData,
    ]);

    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Leaderboard</h1>

            <div className="w-full pt-6">
                <FeedWrapper>
                    <div className="flex flex-col justify-center rounded-lg border-x-2 border-t-2">
                        {leaderboard.map((user, index) => {
                            return (
                                <LeaderBoardCard
                                    name={user.userName}
                                    points={user.points}
                                    position={index + 1}
                                    key={index}
                                    profileImg={user.userImageSrc}
                                />
                            );
                        })}
                    </div>
                </FeedWrapper>
            </div>
        </div>
    );
}

export default LeaderboardPage;
