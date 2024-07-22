"use client";

import { Progress } from "./ui/progress";
import { useState, useEffect } from "react";

type ProgressBarProps = {
    levels: number;
};

export function ProgressBar({ levels }: ProgressBarProps) {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center">
            <Progress value={progress} className="h-2 w-full" />
        </div>
    );
}
