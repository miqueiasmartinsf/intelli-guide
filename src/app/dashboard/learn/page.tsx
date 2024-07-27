import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
    getCategoryProgress,
    getLessonPercentage,
    getQuizzes,
    getUserProgress,
    getUserSubscription,
} from "@/data";

import { Header } from "./header";
import { Quiz } from "./quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learn",
    description:
        "Descubra e participe de diversas fases de quizzes no IntelliGuide. Melhore seus conhecimentos, acompanhe seu progresso e desafie-se com quizzes emocionantes e educativos.",
};

const LearnPage = async () => {
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

    const isPro = !!userSubscription?.isActive;

    return (
        <div className="h-full w-full px-3">
            <Header title={userProgress.activeCategory.title} />
            <div className="w-full pt-6">
                <FeedWrapper>
                    {quizzes.map((quiz) => (
                        <div key={quiz.id} className="mb-10">
                            <Quiz
                                id={quiz.id}
                                order={quiz.order}
                                title={quiz.title}
                                description={quiz.description}
                                lessons={quiz.lessons}
                                activeLesson={categoryProgress.activeLesson}
                                activeLessonPercentage={lessonPercentage}
                            />
                        </div>
                    ))}{" "}
                </FeedWrapper>
            </div>
        </div>
    );
};
export default LearnPage;
