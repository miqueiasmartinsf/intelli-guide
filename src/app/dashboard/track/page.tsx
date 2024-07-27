import { redirect } from "next/navigation";

import { Header } from "@/app/dashboard/learn/header";
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

    if (!userProgress || !userProgress.activeCategory) {
        redirect("/dashboard/categories");
    }

    if (!categoryProgress) {
        redirect("/dashboard/categories");
    }

    return (
        <div className="min-h-screen w-full px-3">
            <div className="w-full pt-6">
                <Header title={userProgress.activeCategory.title} />
                <div className="flex flex-col">
                    {quizzes.map((item) => {
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
        </div>
    );
}

export default TrackPage;
