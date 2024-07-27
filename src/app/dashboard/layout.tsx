import { FeedWrapper } from "@/components/feed-wrapper";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: 'Dashboard',
        template: '%s | IntelliGuide',
    },
    description: 'Bem-vindo ao Dashboard do IntelliGuide! Explore diversas categorias, desafie-se com quizzes envolventes e acompanhe seu progresso em tempo real. Melhore suas habilidades e suba no ranking!',
}

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
                    <FeedWrapper>
                        <div className="w-full px-10">{children}</div>
                    </FeedWrapper>
                </div>
            </main>
        </>
    );
};
export default MainLayout;
