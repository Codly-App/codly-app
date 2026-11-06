import clsx from "clsx";
import type { ProgressUnit } from "@/components/trail/types";

interface UnitBannerProps {
    unit: ProgressUnit;
    number: number;
}

export function UnitBanner({ unit, number }: UnitBannerProps) {
    const started = unit.lessons.some((lesson) => lesson.status !== "locked");

    return (
        <header
            className={clsx(
                "flex items-center justify-between gap-3 rounded-2xl p-4",
                started
                    ? "bg-primary text-on-primary"
                    : "bg-surface text-title",
            )}
        >
            <div className="flex min-w-0 flex-col">
                <p
                    className={clsx(
                        "text-xs font-semibold tracking-wide uppercase",
                        started ? "text-on-primary/80" : "text-foreground/70",
                    )}
                >
                    Unidade {number}
                </p>
                <h2 className="truncate text-lg font-bold">{unit.title}</h2>
                <p
                    className={clsx(
                        "text-sm",
                        started ? "text-on-primary/80" : "text-foreground/70",
                    )}
                >
                    {unit.description}
                </p>
            </div>
            <span
                className={clsx(
                    "shrink-0 rounded-full px-3 py-1 text-sm font-semibold",
                    started
                        ? "bg-primary-strong text-on-primary"
                        : "bg-background text-title",
                )}
            >
                {unit.doneCount}/{unit.lessons.length}
            </span>
        </header>
    );
}
