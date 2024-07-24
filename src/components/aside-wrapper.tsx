import React from "react";

type AsideWrapperProps = {
    children: React.ReactNode;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
    return (
        <div className="h-screen w-[25%] max-w-[700px] gap-5 px-6 py-4 pt-[87px]">
            {children}
        </div>
    );
}
