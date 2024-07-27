"use server";
import { cache } from "react";

import { auth } from "@/services/auth";
import { db } from "@/services/database";

export const getTopTenUsers = cache(async () => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (!userId) {
        return [];
    }

    const data = await db.userProgress.findMany({
        orderBy: {
            points: "desc",
        },
        take: 10,
        select: {
            userId: true,
            userName: true,
            userImageSrc: true,
            points: true,
        },
    });
    return data;
});
