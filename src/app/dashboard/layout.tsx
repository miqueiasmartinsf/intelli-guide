import { Metadata } from "next";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
    title: {
        default: "Dashboard",
        template: "%s | IntelliGuide",
    },
    description:
        "Bem-vindo ao Dashboard do IntelliGuide! Explore diversas categorias, desafie-se com quizzes envolventes e acompanhe seu progresso em tempo real. Melhore suas habilidades e suba no ranking!",
};

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
                    <div className="w-full px-10 max-sm:px-4">{children}</div>{" "}
                </div>
            </main>
        </>
    );
};
export default MainLayout;
