"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCategoryById, getUserProgress, getUserSubscription } from "@/data";
import { auth } from "@/services/auth";
import { db } from "@/services/database";
import { POINTS_TO_REFILL } from "@/utils/constants";

export const upsertUserProgress = async (categoryId: number) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (!user || !userId) {
        console.error("Unauthorized user");

        throw new Error("Unauthorized user");
    }

    const category = await getCategoryById(categoryId);

    if (!category) {
        console.error("Category not found");
        throw new Error("Category not found");
    }

    if (!category.quizzes.length || !category.quizzes[0].lessons.length) {
        console.error("Category is empty");
        throw new Error("Category is empty");
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await db.userProgress.update({
            where: { userId },
            data: {
                activeCategoryId: categoryId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });

        revalidatePath("/dashboard/categories");
        revalidatePath("/dashboard/learn");
        redirect("/dashboard/learn");
    } else {
        await db.userProgress.create({
            data: {
                userId,
                activeCategoryId: categoryId,
                userName: user?.name || "user",
                userImageSrc: user?.image || "/mascot.svg",
            },
        });

        revalidatePath("/dashboard/categories");
        revalidatePath("/dashboard/learn");
        redirect("/dashboard/learn");
    }
};

export const reduceHearts = async (challengeId: number) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress();
    const userSubscription = await getUserSubscription();

    console.log("challengeId", challengeId);

    const challenge = await db.challenges.findFirst({
        where: { id: challengeId },
    });

    console.log("challenge", challenge);

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
    revalidatePath("/dashboard/learn");
    revalidatePath("quests");
    revalidatePath("quests");
    revalidatePath("/dashboard/leaderboard");
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
    revalidatePath("/dashboard/learn");
    revalidatePath("/quests");
    revalidatePath("/dashboard/leaderboard");
};
