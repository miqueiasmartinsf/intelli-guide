"use client";
import { Categories } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";

import { upsertUserProgress } from "@/actions/user-progress";

import { Card } from "./card";

type Props = {
    categories: Categories[];
    activeCategoryId?: number;
};

export const List = ({ categories, activeCategoryId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) return;
        if (id == activeCategoryId) {
            return router.push("/dashboard/learn");
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
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {categories.map((category) => (
                <Card
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    imageSrc={category.imageSrc}
                    onClick={onClick}
                    disabled={pending}
                    active={category.id === activeCategoryId}
                />
            ))}
        </div>
    );
};
