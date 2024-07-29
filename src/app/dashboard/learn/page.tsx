import { Metadata } from "next";
import { redirect } from "next/navigation";

import { Header } from "@/app/dashboard/learn/header";
import { Quiz } from "@/app/dashboard/learn/quiz";
import { FeedWrapper } from "@/components/feed-wrapper";
import {
    getCategoryProgress,
    getLessonPercentage,
    getQuizzes,
    getUserProgress,
} from "@/data";

export const metadata: Metadata = {
    title: "Learn",
    description:
        "Descubra e participe de diversas fases de quizzes no IntelliGuide. Melhore seus conhecimentos, acompanhe seu progresso e desafie-se com quizzes emocionantes e educativos.",
};
export const dynamic = "force-dynamic";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const categoryProgressData = getCategoryProgress();
    const lessonPercentageData = getLessonPercentage();
    const quizzesData = getQuizzes();

    const [userProgress, quizzes, categoryProgress, lessonPercentage] =
        await Promise.all([
            userProgressData,
            quizzesData,
            categoryProgressData,
            lessonPercentageData,
        ]);

    if (!userProgress || !userProgress.activeCategory) {
        redirect("/dashboard/categories");
    }

    if (!categoryProgress) {
        redirect("/dashboard/categories");
    }

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
                                activeLesson={
                                    categoryProgress.activeLesson as any
                                }
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
