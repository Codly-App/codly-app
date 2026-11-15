"use client";

import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { useReduceMotion } from "@/hooks/useReduceMotion";

export function StreakFlame() {
    const reduceMotion = useReduceMotion();

    return (
        <motion.span
            aria-hidden
            className="inline-flex origin-bottom text-flame"
            animate={
                reduceMotion
                    ? undefined
                    : {
                          scale: [1, 1.2, 0.95, 1.15, 1],
                          rotate: [0, -6, 5, -4, 0],
                      }
            }
            transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }}
        >
            <FaFire />
        </motion.span>
    );
}