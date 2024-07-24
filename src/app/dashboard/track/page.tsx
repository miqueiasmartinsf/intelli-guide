import { Header } from "@/app/dashboard/learn/header";
import { redirect } from "next/navigation";
import { LearnTrackCard } from "@/components/learn-track-card";

import {
    getCourseProgress,
    getLessonPercentage,
    getUnits,
    getUserProgress,
    getUserSubscription,
} from "@/data";

async function TrackPage() {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData,
    ]);

    return (
        <div className="min-h-screen w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Lean Track</h1>

            <Header title="Futebol" />

            <div className="flex flex-col p-12">
                {units.map((item, index) => {
                    return (
                        <LearnTrackCard
                            id={item.id}
                            courseId={item.courseId}
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
