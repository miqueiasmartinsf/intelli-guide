import { AsideButton } from "@/components/aside-button";
import { Home, AArrowDown, WorkflowIcon, Activity } from "lucide-react";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="h-screen w-3/12 border-r-2 py-6">
                <div className="w-full px-12">
                    <h1 className="text-2xl font-bold text-primary">
                        IntelliGuide
                    </h1>
                </div>
                <div className="mt-10">
                    <AsideButton Icon={Home} text="Home" />
                    <AsideButton Icon={AArrowDown} text="AArrowDown" />
                    <AsideButton Icon={WorkflowIcon} text="AArrowDown" />
                    <AsideButton Icon={Activity} text="AArrowDown" />
                </div>
            </div>{" "}
            <div className="w-9/12">{children}</div>
        </div>
    );
}

export default DashboardLayout;
