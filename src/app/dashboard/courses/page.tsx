import { List } from "./list";
import { getUserProgress, getCourses } from "@/data";

const CoursePage = async () => {
    const coursesData = getCourses();
    const userProgressData = getUserProgress();

    const [courses, userProgress] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    return (
        <div className="mx-auto h-full max-w-[912px] px-3">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <List
                courses={courses || []}
                activeCourseId={userProgress?.activeCourseId || 0}
            />
        </div>
    );
};

export default CoursePage;
