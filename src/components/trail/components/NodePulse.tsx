"use client";

import { motion } from "framer-motion";
import { useReduceMotion } from "@/hooks/useReduceMotion";

export function NodePulse() {
    const reduceMotion = useReduceMotion();

    if (reduceMotion) return null;

    return (
        <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-primary/40"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{
                duration: 1.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
            }}
        />
    );
}