import { cache } from "react";

import { db } from "@/services/database";

export const getCategories = cache(async () => {
    try {
        const categories = await db.categories.findMany();

        return categories;
    } catch {
        return null;
    }
});
