import { ReactNode } from "react";

export default function SectionHomeTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="w-11/12 text-5xl">
            { children }
        </h2>
    )
}