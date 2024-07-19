"use server";

import { redirect } from "next/navigation";

import {db} from "@/services/database";
import { revalidatePath } from "next/cache";
import { POINTS_TO_REFILL } from '@/utils/constants';
import { useCurrentUser } from "@/hooks/use-current-user";
import { getCourseById, getUserProgress, getUserSubscription } from "@/data";

export const upsertUserProgress = async (courseId: number, user: any) => {
    if (!user || !user?.id) {
        console.error("Unauthorized user");

        throw new Error("Unauthorized user");
    }

    console.log("Fetching course by id...");

    console.log(`courseId: ${courseId}`);
    const course = await getCourseById(courseId);
    
    // Usando JSON.stringify para visualizar a estrutura completa do objeto 'course'
    console.log(`course JSON: ${JSON.stringify(course, null, 2)}`);

    console.log(`course: ${course}`);

    if (!course) {
        console.error("Course not found");
        throw new Error("Course not found");
    }

     if (!course.units.length || !course.units[0].lessons.length) {
        console.log(`course.units: ${course.units}`);
        console.log(`course.units.length: ${course.units.length}`);
        console.log(`course.units[0].lessons${course.units[0].lessons}`);

         console.error("Course is empty");
         throw new Error("Course is empty");
     }

    const existingUserProgress = await getUserProgress()
    console.log(`existingUserProgress: ${existingUserProgress}`);

    if (existingUserProgress) {
        console.log("Updating existing user progress...");
        await db.userProgress.update({
            where: { userId: user.id },
            data: {
                activeCourseId: courseId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });
    } else {
        console.log("Creating new user progress...");
        await db.userProgress.create({
            data: {
                userId: user.id,
                activeCourseId: courseId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });
    }

    console.log("Redirecting to /learn...");
    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn");
};


export const reduceHearts = async (challengeId: number) => {
    const user = useCurrentUser();

    if (!user || !user?.id) {
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress()
    const userSubscription = await getUserSubscription()

    const challenge = await db.challenge.findFirst({
        where: { id: challengeId },
    });

    if (!challenge) {
        throw new Error("Challenge not found");
    }

    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.challengeProgress.findFirst({
        where: {
            userId: user.id,
            challengeId,
        },
    });

    const isPractice = !!existingChallengeProgress;

    if (isPractice) {
        return { error: "practice" };
    }

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }

    if (userSubscription?.isActive) {
        return { error: "subscription" };
    }

    if (currentUserProgress.hearts === 0) {
        return { error: "hearts" };
    }

    await db.userProgress.update({
        where: { userId: user.id },
        data: {
            hearts: Math.max(currentUserProgress.hearts - 1, 0),
        },
    });

    revalidatePath("/shop");
    revalidatePath("/learn")
    revalidatePath("quests")
    revalidatePath("quests")
    revalidatePath("/leaderboard")
    revalidatePath(`/lesson/${lessonId}`)
}; 

export const refillHearts = async ()=> {

    const currentUserProgress = await getUserProgress();

    if(!currentUserProgress){
        throw new Error("user Progress not found")
    }

    if(currentUserProgress.hearts === 5){
        throw new Error("Heats are already full")
    }

    if(currentUserProgress.points < POINTS_TO_REFILL){
        throw new Error("Not enough points")
    }


    await db.userProgress.update({
        where: { userId: currentUserProgress.userId },
        data: {
            hearts: 5,
            points: currentUserProgress.points - POINTS_TO_REFILL,
        },
    });



    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("leaderboard");

}
