import type { ReactNode } from "react";

interface ProfileStatCardProps {
    icon: ReactNode;
    value: string;
    label: string;
}

export function ProfileStatCard({ icon, value, label }: ProfileStatCardProps) {
    return (
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-surface p-3">
            <span aria-hidden className="text-xl text-primary">
                {icon}
            </span>
            <span className="text-lg font-bold text-title">{value}</span>
            <span className="text-xs text-foreground/70">{label}</span>
        </div>
    );
}
