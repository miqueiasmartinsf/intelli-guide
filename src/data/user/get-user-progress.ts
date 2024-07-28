import { cache } from "react";

import { auth } from "@/services/auth";
import { db } from "@/services/database";

export const getUserProgress = cache(async () => {
    try {
        const session = await auth();
        const user = session?.user;
        const userId = user?.id;

        if (!userId) {
            return null;
        }

        const data = await db.userProgress.findFirst({
            where: { userId },
            include: {
                activeCategory: true,
            },
        });

        return data;
    } catch {
        return null;
    }
});
