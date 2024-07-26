"use client";

import { Play } from "lucide-react";

import { Button } from "./ui/button";

type LearnTrackCardProps = {
    categoryId: number;
    description: string;
    id: number;
    lessons: any;
    order: any;
    title: string;
};

export function LearnTrackCard({
    title,
    categoryId,
    description,
    id,
    lessons,
    order,
}: LearnTrackCardProps) {
    return (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-9 px-2">
            {order % 2 !== 0 ? (
                <>
                    <div className="col-span-4 h-full w-full">
                        <div className="h-full w-full rounded-2xl border-2 shadow-lg">
                            <div className="mx-auto flex max-w-lg overflow-hidden rounded-lg bg-primary shadow-lg">
                                <div className="w-2/3 p-4">
                                    <h2 className="mb-2 text-xl font-bold text-white">
                                        Nível {order}
                                    </h2>
                                    <p className="text-white">{description}</p>
                                </div>
                                <div className="flex w-1/3 items-center justify-center bg-white p-4">
                                    <Button className="">Começar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-1 flex h-full w-full items-center justify-center">
                        <div className="h-full w-1 bg-primary"></div>
                        <div className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-6 text-center text-2xl font-bold text-white">
                            {order}
                        </div>
                    </div>
                    <div className="col-span-4 h-full w-full"></div>
                </>
            ) : (
                <>
                    <div className="col-span-4 h-full w-full"></div>
                    <div className="relative col-span-1 flex h-full w-full items-center justify-center">
                        <div className="h-full w-1 bg-primary"></div>
                        <div className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-6 text-center text-2xl font-bold text-white">
                            {order}
                        </div>
                    </div>
                    <div className="col-span-4 h-full w-full">
                        <div className="h-full w-full rounded-2xl border-2 shadow-lg">
                            <div className="mx-auto flex max-w-lg overflow-hidden rounded-lg bg-primary shadow-lg">
                                <div className="w-2/3 p-4">
                                    <h2 className="mb-2 text-xl font-bold text-white">
                                        Nível {order}
                                    </h2>
                                    <p className="text-white">{description}</p>
                                </div>
                                <div className="flex w-1/3 items-center justify-center bg-white p-4">
                                    <Button className="">Começar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
