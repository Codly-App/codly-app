"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useReduceMotion } from "@/hooks/useReduceMotion";

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
    const reduceMotion = useReduceMotion();

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
                initial={reduceMotion ? false : { width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    ease: "easeOut",
                }}
            />
        </div>
    );
}
