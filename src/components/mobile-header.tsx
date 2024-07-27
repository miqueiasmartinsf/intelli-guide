import { MobileSidebar } from "./mobile-sidebar";
export const MobileHeader = () => {
    return (
        <nav className="item-center fixed top-0 z-50 flex h-[50px] w-full border-b bg-primary px-6 lg:hidden">
            <MobileSidebar />
        </nav>
    );
};
