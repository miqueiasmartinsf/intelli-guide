import React from "react";

type AsideWrapperProps = {
    children: React.ReactNode;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
    return (
        <div className="h-screen max-w-[250px] gap-5 justify-self-end px-6">
            {children}
        </div>
    );
}
