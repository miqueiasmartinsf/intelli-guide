"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCourseById, getUserProgress, getUserSubscription } from "@/data";
import { auth } from "@/services/auth";
import { db } from "@/services/database";
import { POINTS_TO_REFILL } from "@/utils/constants";

export const upsertUserProgress = async (courseId: number) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (!user || !userId) {
        console.error("Unauthorized user");

        throw new Error("Unauthorized user");
    }

    const course = await getCourseById(courseId);

    if (!course) {
        console.error("Course not found");
        throw new Error("Course not found");
    }

    if (!course.units.length || !course.units[0].lessons.length) {
        console.error("Course is empty");
        throw new Error("Course is empty");
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await db.userProgress.update({
            where: { userId },
            data: {
                activeCourseId: courseId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    } else {
        await db.userProgress.create({
            data: {
                userId,
                activeCourseId: courseId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }
};

export const reduceHearts = async (challengeId: number) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (userId) {
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress();
    const userSubscription = await getUserSubscription();

    const challenge = await db.challenges.findFirst({
        where: { id: challengeId },
    });

    if (!challenge) {
        throw new Error("Challenge not found");
    }

    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.challengeProgress.findFirst({
        where: {
            userId,
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
        where: { userId },
        data: {
            hearts: Math.max(currentUserProgress.hearts - 1, 0),
        },
    });

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("quests");
    revalidatePath("quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
    const currentUserProgress = await getUserProgress();

    if (!currentUserProgress) {
        throw new Error("user Progress not found");
    }

    if (currentUserProgress.hearts === 5) {
        throw new Error("Heats are already full");
    }

    if (currentUserProgress.points < POINTS_TO_REFILL) {
        throw new Error("Not enough points");
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
};
