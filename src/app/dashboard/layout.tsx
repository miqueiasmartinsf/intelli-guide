import { AsideWrapper } from "@/components/aside-wrapper";
import { LeaderboardQuickView } from "@/components/leaderboard-quick-view";
import { MobileHeader } from "@/components/mobile-header";
import { RecentlyAdded } from "@/components/recently-added";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
                <div className="flex h-full pt-6">
                    <div className="w-full px-10">{children}</div>
                </div>
            </main>
        </>
    );
};
export default MainLayout;
