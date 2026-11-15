"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { useReduceMotion } from "@/hooks/useReduceMotion";
import { useStudyReminder } from "@/hooks/useStudyReminder";

interface PreferencesProviderProps {
    readonly children: ReactNode;
}

export function PreferencesProvider({ children }: PreferencesProviderProps) {
    const reduceMotion = useReduceMotion();

    useStudyReminder();

    useEffect(() => {
        document.documentElement.classList.toggle(
            "reduce-motion",
            reduceMotion,
        );

        return () => document.documentElement.classList.remove("reduce-motion");
    }, [reduceMotion]);

    return (
        <MotionConfig reducedMotion={reduceMotion ? "always" : "user"}>
            {children}
        </MotionConfig>
    );
}
