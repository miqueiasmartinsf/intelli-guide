import React from "react";

type AsideWrapperProps = {
    children: React.ReactNode;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
    return (
        <div className="fixed right-0 flex flex-col h-screen w-[20%] max-w-[600px] gap-5 px-6">
            {children}
        </div>
    );
}
