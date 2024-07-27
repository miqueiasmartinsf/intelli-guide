import { AsideWrapper } from "./aside-wrapper";
import { RecentlyAdded } from "./recently-added";
import { LeaderboardQuickView } from "./leaderboard-quick-view";
import { getCategories } from "@/data";

type FeedWrapperProps = {
    children: React.ReactNode;
};

export async function FeedWrapper({ children }: FeedWrapperProps) {
    const categoriesPromise = getCategories();

    const [categoriesData] = await Promise.all([
        categoriesPromise,
    ]);

    return (
        <div className="flex w-full">
            <div className="w-[75%] max-lg:w-full">{children}</div>
            <div className="max-w-[250px] max-lg:hidden">
                <AsideWrapper>
                    {categoriesData &&
                        <RecentlyAdded categories={categoriesData} />
                    }
                    <LeaderboardQuickView />
                </AsideWrapper>
            </div>
        </div>
    );
}
