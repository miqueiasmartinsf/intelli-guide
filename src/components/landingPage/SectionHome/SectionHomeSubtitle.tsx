import { ReactNode } from "react";

export default function SectionHomeSubtitle({
    children,
}: {
    children: ReactNode;
}) {
    return <h2 className="w-11/12 text-3xl">{children}</h2>;
}
