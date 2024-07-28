import Image from "next/image";
import { ReactNode } from "react";

interface SectionHomeRoot {
    imageUrl?: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
    children: ReactNode;
}

export default function SectionHomeRoot({
    imageUrl,
    imageAlt = "",
    imagePosition = "right",
    children,
}: SectionHomeRoot) {
    return (
        <div className="flex h-full items-center py-36">
            <div
                className={`flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full ${imagePosition === "left" ? "order-last" : "order-first"}`}
            >
                {children}
            </div>
            {imageUrl ? (
                // 'flex h-full w-5/12 flex-col items-start justify-center'
                <div
                    className={`max-lg flex h-full w-5/12 flex-col justify-center max-lg:hidden ${imagePosition === "left" ? "order-first items-start" : "order-last items-end"}`}
                >
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={320}
                        height={320}
                    />
                </div>
            ) : null}
        </div>
    );
}
