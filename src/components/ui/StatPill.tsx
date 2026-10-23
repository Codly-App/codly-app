import type { ReactNode } from "react";

interface StatPillProps {
    icon: ReactNode;
    value: string;
    label: string;
}

export function StatPill({ icon, value, label }: StatPillProps) {
    return (
        <div
            className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-title"
            title={label}
        >
            <span aria-hidden className="inline-flex text-flame">
                {icon}
            </span>
            <span>{value}</span>
            <span className="sr-only">{label}</span>
        </div>
    );
}