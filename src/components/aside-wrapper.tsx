import React from "react";

type AsideWrapperProps = {
    children: React.ReactNode;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
    return (
        <div className="h-screen w-[20%] max-w-[600px] gap-5 px-6 py-4">
            {children}
        </div>
    );
}
