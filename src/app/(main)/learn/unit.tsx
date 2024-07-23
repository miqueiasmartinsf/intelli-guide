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
    return (
        <>
            <UnitBanner title={title} description={description} />
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
                    )
                })}
            </div>
        </>
    )
}
