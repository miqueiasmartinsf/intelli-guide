import { List } from "./list";
import { getUserProgress, getCategories } from "@/data";

const CategoryPage = async () => {
    const coursesData = getCategories();
    const userProgressData = getUserProgress();

    const [courses, userProgress] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    return (
        <div className="mx-auto h-full max-w-[912px] px-3">
            <h1 className="text-2xl font-bold text-neutral-700">
                Quizz Categories
            </h1>
            <List courses={courses || []} />
        </div>
    );
};

export default CategoryPage;
