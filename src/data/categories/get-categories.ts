import { cache } from "react";

import { db } from "@/services/database";

export const getCategories = cache(async () => {
    try {
        console.log(123);

        const categories = await db.categories.findMany();

        console.log(categories);

        return categories;
    } catch (error) {
        console.log(error);
        return null;
    }
});
