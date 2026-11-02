import type { ReactNode } from "react";

interface SettingsGroupProps {
    title: string;
    children: ReactNode;
}

export function SettingsGroup({ title, children }: SettingsGroupProps) {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="px-1 text-sm font-semibold text-foreground/70">
                {title}
            </h2>
            <div className="flex flex-col divide-y divide-background overflow-hidden rounded-2xl bg-surface">
                {children}
            </div>
        </section>
    );
}
