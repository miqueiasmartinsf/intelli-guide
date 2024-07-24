"use client";

import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import { Category } from "@prisma/client";

type Props = {
    categories: Category[];
    activeCourseId?: number;
};

export const List = ({ categories, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) return;
        if (id == activeCourseId) {
            return router.push("/learn");
        }

        startTransition(() => {
            upsertUserProgress(id).catch((error) => {
                if (error.message) {
                    toast.error(error.message);
                } else {
                    toast.error("something went wrong");
                }
            });
        });
    };

    return (
        <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {categories.map((categorie) => (
                <Card
                    key={categorie.id}
                    id={categorie.id}
                    title={categorie.title}
                    imageSrc={categorie.imageSrc}
                    onClick={onClick}
                    disabled={pending}
                    active={categorie.id === activeCourseId}
                />
            ))}
        </div>
    );
};
