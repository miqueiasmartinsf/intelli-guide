"use client";

import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import { Categories } from "@prisma/client";

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
