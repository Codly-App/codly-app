"use client";

import { motion, useReducedMotion } from "framer-motion";

export function StartBubble() {
    const reduceMotion = useReducedMotion();

    return (
        <motion.span
            aria-hidden
            className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-xl border-2 border-primary bg-background px-3 py-1 text-sm font-bold whitespace-nowrap text-primary-strong dark:text-title"
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={{
                duration: 1.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
        >
            Começar
            <span className="absolute -bottom-1.5 left-1/2 size-2.5 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-primary bg-background" />
        </motion.span>
    );
}
