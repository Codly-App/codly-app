import { useState } from "react";
import type { LessonPhase } from "@/components/lessons/types";

/** Controla em que passo da lição o aluno está e quantos acertos ele teve. */
export function useLessonRunner(total: number) {
    const [phase, setPhase] = useState<LessonPhase>("intro");
    const [index, setIndex] = useState(0);
    const [hits, setHits] = useState(0);
    const [checked, setChecked] = useState(false);

    let progress = 100;

    if (phase === "intro") progress = 0;
    if (phase === "exercise") {
        progress = ((index + (checked ? 1 : 0)) / total) * 100;
    }

    return {
        phase,
        index,
        hits,
        progress,
        isLast: index === total - 1,
        start: () => setPhase("exercise"),
        check: (correct: boolean) => {
            setChecked(true);

            if (correct) setHits((current) => current + 1);
        },
        next: () => {
            setChecked(false);
            setIndex((current) => current + 1);
        },
        finish: () => setPhase("result"),
    };
}
