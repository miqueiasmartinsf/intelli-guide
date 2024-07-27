import { LeaderBoardCard } from "@/components/leaderboard-card";
import { getUserProgress, getUserSubscription } from "@/data";

import { getTopTenUsers } from "./actions";

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
            </div>
        </div>
    );
}

export default LeaderboardPage;
