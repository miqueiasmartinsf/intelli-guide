import { AsideMenu } from "@/components/aside-menu";
import { MobileHeader } from "@/components/mobile-header";
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
                <div className="flex h-full px-10 pt-6">
                    <div className="w-[85%]">{children}</div>
                    <AsideMenu />
                </div>
            </main>
        </>
    );
};
export default MainLayout;
