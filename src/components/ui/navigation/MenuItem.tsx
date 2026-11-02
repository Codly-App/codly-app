import Link from "next/link";
import type { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";

interface MenuItemProps {
    href: string;
    icon: ReactNode;
    label: string;
}

export function MenuItem({ href, icon, label }: MenuItemProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-2xl bg-surface p-4 font-medium text-title transition active:scale-95"
        >
            <span aria-hidden className="text-xl text-primary">
                {icon}
            </span>
            <span className="flex-1">{label}</span>
            <FiChevronRight aria-hidden className="text-foreground/60" />
        </Link>
    );
}
