"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface ProgressBarProps {
    value: number;
    label?: string;
    variant?: "default" | "onPrimary";
}

export function ProgressBar({
    value,
    label,
    variant = "default",
}: ProgressBarProps) {
    const percent = Math.min(100, Math.max(0, value));
    const onPrimary = variant === "onPrimary";

    return (
        <div
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            className={clsx(
                "h-3 w-full overflow-hidden rounded-full",
                onPrimary ? "bg-primary-strong" : "bg-background",
            )}
        >
            <motion.div
                className={clsx(
                    "h-full rounded-full",
                    onPrimary ? "bg-on-primary" : "bg-primary",
                )}
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </div>
    );
}