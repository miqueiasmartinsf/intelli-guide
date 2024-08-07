import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/data";

import { Quiz } from "./quiz";
export const dynamic = "force-dynamic";

const LessonPage = async () => {
    const lessonData = getLesson();
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [lesson, userProgress, userSubscription] = await Promise.all([
        lessonData,
        userProgressData,
        userSubscriptionData,
    ]);

    if (!lesson || !userProgress) {
        redirect("/dashboard/learn");
    }

    const initialPercentage =
        (lesson.challenges.filter((challenge) => challenge.completed).length /
            lesson.challenges.length) *
        100;

    return (
        <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgress.hearts}
            initialPercentage={initialPercentage}
            userSubscription={userSubscription}
        />
    );
};

export default LessonPage;
