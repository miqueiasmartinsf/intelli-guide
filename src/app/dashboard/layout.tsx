import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { AsideMenu } from "@/components/aside-menu";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
                <div className="flex h-full px-10 pt-6 flex-wrap">
                    <div className="w-[80%]">{children}</div>
                    <AsideMenu />
                </div>
            </main>
        </>
    );
};
export default MainLayout;
