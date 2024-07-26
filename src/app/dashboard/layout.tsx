import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { AsideWrapper } from "@/components/aside-wrapper";
import { RecentlyAdded } from "@/components/recently-added";
import { LeaderboardQuickView } from "@/components/leaderboard-quick-view";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
                <div className="flex h-full flex-wrap pt-6">
                    <div className="w-[80%] px-10">{children}</div>
                    <AsideWrapper>
                        <RecentlyAdded />
                        <LeaderboardQuickView />
                    </AsideWrapper>
                </div>
            </main>
        </>
    );
};
export default MainLayout;
