/* eslint-disable prettier/prettier */
import type { Lessons, Units } from '@prisma/client'

import { LessonButton } from './lesson-button'
import { UnitBanner } from './unit-banner'

type ExtendedLesson = Lessons & {
    completed: boolean
}

export type ExtendedLessonWithUnit = (Lessons & {
    unit: Units;
}) | undefined;

type Props = {
    id: number
    order: number
    title: string
    description: string
    lessons: ExtendedLesson[]
    activeLesson: ExtendedLessonWithUnit
    activeLessonPercentage: number
}

export const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage,
}: Props) => {
    console.log("Unit.tsx lessons:", lessons)
    console.log("Unit.tsx activeLesson:", activeLesson)

    // Determina se a primeira lição deve ser tratada como a lição atual
    // const isFirstLessonActive = !activeLesson || !lessons.some(lesson => lesson.id === activeLesson.id);
    // const firstLessonId = lessons[0]?.id;
    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="relative flex flex-col items-center">
                {lessons.map((lesson, index) => {
                    console.log("Map lesson:", lesson)
                    console.log("Map activeLesson:", activeLesson)
                    // const isCurrent = isFirstLessonActive ? index === 0 : lesson.id === activeLesson?.id;
                    // const isLocked = index !== 0 && !lesson.completed && !isCurrent;
                    const isCurrent = lesson.id === activeLesson?.id // Tem que vim true
                    const isLocked = !lesson.completed && !isCurrent // Tem que vim false

                    console.log("Map isCurrent:", isCurrent)
                    console.log("Map isLocked:", isLocked)
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
                    )
                })}
            </div>
        </>
    )
}
