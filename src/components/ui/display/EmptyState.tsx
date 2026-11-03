import type { ReactNode } from "react";

interface EmptyStateProps {
    readonly icon: ReactNode;
    readonly title: string;
    readonly description: string;
    readonly children?: ReactNode;
}

export function EmptyState({
    icon,
    title,
    description,
    children,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-8 text-center">
            <span aria-hidden className="text-4xl text-primary">
                {icon}
            </span>
            <h2 className="font-semibold text-title">{title}</h2>
            <p className="text-sm text-foreground/70">{description}</p>
            {children}
        </div>
    );
}
