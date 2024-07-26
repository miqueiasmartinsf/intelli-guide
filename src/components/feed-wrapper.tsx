import { AsideWrapper } from "./aside-wrapper";
import { RecentlyAdded } from "./recently-added";
import { LeaderboardQuickView } from "./leaderboard-quick-view";

type FeedWrapperProps = {
    children: React.ReactNode;
};

export function FeedWrapper({ children }: FeedWrapperProps) {
    return (
        <div className="flex w-full">
            <div className="w-[75%]">{children}</div>
            <div className="max-w-[250px]">
                <AsideWrapper>
                    <RecentlyAdded />
                    <LeaderboardQuickView />
                </AsideWrapper>
            </div>
        </div>
    );
}
