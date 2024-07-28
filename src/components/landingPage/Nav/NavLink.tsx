import { AnchorHTMLAttributes, ReactNode } from "react";

interface NavLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    className?: string;
    children?: ReactNode;
    isDefaultStyle?: boolean;
}

export default function NavLink({
    href,
    className,
    children,
    isDefaultStyle = true,
    ...rest
}: NavLink) {
    return (
        <a
            href={href || "#"}
            className={`${isDefaultStyle && "nav-link"} ${className}`}
            {...rest}
        >
            {children}
        </a>
    );
}
