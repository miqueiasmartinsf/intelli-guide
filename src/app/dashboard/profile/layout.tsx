import { Metadata } from 'next';
import { useCurrentUser } from "@/hooks/use-current-user";
import { auth } from '@/services/auth';

async function getUser() {
    const session = await auth();
    const user = session?.user;
    return user;
}

export async function generateMetadata(): Promise<Metadata> {
    const user = await getUser();
    const name = user?.name || "Usuário";
    return {
        title: `Perfil ${name}`,
        description: 'Visualize e edite seu perfil no IntelliGuide. Acompanhe seu progresso, personalize suas preferências e veja seu histórico de quizzes e conquistas.',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}