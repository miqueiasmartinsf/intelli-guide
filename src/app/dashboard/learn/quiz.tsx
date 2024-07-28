/* eslint-disable prettier/prettier */
import type { Lessons, Quizzes } from "@prisma/client";

import { LessonButton } from "./lesson-button";
import { QuizBanner } from "./quiz-banner";

type ExtendedLesson = Lessons & {
    completed: boolean;
};

export type ExtendedLessonWithQuiz =
    | (Lessons & {
          quiz: Quizzes;
      })
    | undefined;

type Props = {
    id: number;
    order: number;
    title: string;
    description: string;
    lessons: ExtendedLesson[];
    activeLesson?: ExtendedLessonWithQuiz;
    activeLessonPercentage: number;
};

export const Quiz = ({
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage,
}: Props) => {
    return (
        <>
            <QuizBanner title={title} description={description} />
            <div className="relative flex flex-col items-center">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <LessonButton
                            key={lesson.id}
                            id={lesson.id}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />
                    );
                })}
            </div>
        </>
    );
};
