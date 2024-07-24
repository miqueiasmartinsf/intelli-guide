"use client"

import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import { Courses } from "@prisma/client";
import { useSession } from "next-auth/react";

type Props = {
    courses: Courses[]
    activeCourseId?: number
};


export const List = ({ courses, activeCourseId }: Props) => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        console.log(`onClick called with id: ${id}, pending: ${pending}, activeCourseId: ${activeCourseId}`);

        if (loading) {
            console.log("Session is loading");
            return;
        }

        if (pending) return;
        if (id == activeCourseId) {
            console.log("Redirecting to /learn because id is the activeCourseId");
            return router.push("/learn");
        }

        startTransition(() => {
            console.log(`Attempting to upsert user progress for course id: ${id}`);
            if (session && session.user) {
                upsertUserProgress(id, session.user)
                    .catch((error) => {
                        console.error("Error in upsertUserProgress:", error);
                        toast.error("something went wrong");
                    });
            } else {
                console.error("Sessão ou usuário não encontrado");
                toast.error("User session not found");
            }
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