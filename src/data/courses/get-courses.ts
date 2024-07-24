import { cache } from "react";

import { db } from "@/services/database";

export const getCategories = cache(async () => {
    try {
        const categories = await db.category.findMany();

        console.log(categories);

        return categories;
    } catch {
        return null;
    }
});
