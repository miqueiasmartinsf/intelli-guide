import { AsideButton } from "@/components/aside-button";
import { Home, AArrowDown, WorkflowIcon, Activity } from "lucide-react";

function DashboardPage() {
    return (
        <div>
            <div className="h-screen w-2/12 border-r-2 py-4">
                <div className="w-full">
                    <h1 className="text-center">IntelliGuide</h1>
                </div>
                <div className="mt-14">
                    <AsideButton Icon={Home} text="Home" />
                    <AsideButton Icon={AArrowDown} text="AArrowDown" />
                    <AsideButton Icon={WorkflowIcon} text="AArrowDown" />
                    <AsideButton Icon={Activity} text="AArrowDown" />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
