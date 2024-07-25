import { Header } from "@/app/dashboard/learn/header";
import { redirect } from "next/navigation";
import { LearnTrackCard } from "@/components/learn-track-card";

import {
    getCategoryProgress,
    getLessonPercentage,
    getQuizzes,
    getUserProgress,
    getUserSubscription,
} from "@/data";

async function TrackPage() {
    const userProgressData = getUserProgress();
    const categoryProgressData = getCategoryProgress();
    const lessonPercentageData = getLessonPercentage();
    const quizzesData = getQuizzes();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        quizzes,
        categoryProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        quizzesData,
        categoryProgressData,
        lessonPercentageData,
        userSubscriptionData,
    ]);

    return (
        <div className="min-h-screen w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Lean Track</h1>

            <Header title="Futebol" />

            <div className="flex flex-col p-12">
                {quizzes.map((item, index) => {
                    return (
                        <LearnTrackCard
                            id={item.id}
                            categoryId={item.categoryId}
                            description={item.description}
                            order={item.order}
                            title={item.title}
                            key={item.id}
                            lessons={item.lessons}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TrackPage;
