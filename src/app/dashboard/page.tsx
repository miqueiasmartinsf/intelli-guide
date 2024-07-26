import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeedWrapper } from "@/components/feed-wrapper";
import { DashBoardCard } from "@/components/dashboard-card";
import { getUserProgress } from "@/data";

const DashboardPage = async () => {
    const userProgress = await getUserProgress();

    return (
        <div className="px-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="w-full pt-6">
                <FeedWrapper>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <DashBoardCard
                            title="Pontos"
                            content={userProgress ? userProgress?.points : 0}
                            subtitle="Total de acertos acumulados em desafios."
                        />
                        <DashBoardCard
                            title="Vidas restantes"
                            content={userProgress ? userProgress?.hearts : 0}
                            subtitle="Total de vidas restantes nas próximas 24 horas"
                        />
                    </div>
                </FeedWrapper>
            </div>
        </div>
    );
};

export default DashboardPage;
