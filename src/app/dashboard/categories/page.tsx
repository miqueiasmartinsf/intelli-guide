import { getCategories, getUserProgress } from "@/data";

import { List } from "./list";
import { FeedWrapper } from "@/components/feed-wrapper";
import { LeaderboardQuickView } from "@/components/leaderboard-quick-view";

const CategoryPage = async () => {
    const categoriesData = getCategories();
    const userProgressData = getUserProgress();

    const [categories, userProgress] = await Promise.all([
        categoriesData,
        userProgressData,
    ]);

    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold">Quizz Categories</h1>
            <div className="w-full pt-6">
                <FeedWrapper>
                    <List
                        categories={categories || []}
                        activeCategoryId={userProgress?.activeCategoryId || 0}
                    />
                </FeedWrapper>
            </div>
        </div>
    );
};

export default CategoryPage;
