import React from "react";

type HeaderProps = {
    title: string;
    subtitle?: string;
};

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                {title}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                {subtitle}
            </p>
        </>
    );
};
