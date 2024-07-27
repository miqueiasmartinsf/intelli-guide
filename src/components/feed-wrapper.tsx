import { AsideWrapper } from "./aside-wrapper";
import { RecentlyAdded } from "./recently-added";
import { LeaderboardQuickView } from "./leaderboard-quick-view";
import { getCategories } from "@/data";
import { getTopTenUsers } from "@/app/dashboard/leaderboard/actions";

type FeedWrapperProps = {
    children: React.ReactNode;
};

export async function FeedWrapper({ children }: FeedWrapperProps) {
    const categoriesPromise = getCategories();
    const leaderboardPromise = getTopTenUsers();

    const [categoriesData, leaderboardData] = await Promise.all([
        categoriesPromise,
        leaderboardPromise
    ]);

    const recentCategories = categoriesData
        ? categoriesData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 3)
        : [];


    return (
        <div className="flex w-full">
            <div className="w-[75%] max-lg:w-full">{children}</div>
            <div className="max-w-[250px] max-lg:hidden">
                <AsideWrapper>
                    {recentCategories.length > 0 &&
                        <RecentlyAdded categories={recentCategories} />
                    }
                    {
                        leaderboardData.length > 0 &&
                        leaderboardData.map((user, index) => {
                            return (
                                <LeaderboardQuickView
                                    points={user.points}
                                    userId={user.userId}
                                    userImageSrc={user.userImageSrc}
                                    userName={user.userName}
                                    key={index}
                                />
                            );
                        })
                    }
                </AsideWrapper>
            </div>
        </div>
    );
}
