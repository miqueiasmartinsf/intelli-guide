"use client"

import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import { Courses } from "@prisma/client";

type Props = {
    courses: Courses[]
    activeCourseId?: number
};


export const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) return;
        if (id == activeCourseId) {
            return router.push("/learn");
        }

        startTransition(() => {
            upsertUserProgress(id)
                .catch((error) => {
                    if (error.message) {
                        toast.error(error.message);
                    } else {
                        toast.error("something went wrong");
                    }
                });
        });
    };

    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={onClick}
                    disabled={pending}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    );
};