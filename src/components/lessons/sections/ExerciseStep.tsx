"use client";

import { useState } from "react";
import { ExerciseRenderer } from "@/components/lessons/components/ExerciseRenderer";
import { FeedbackPanel } from "@/components/lessons/components/FeedbackPanel";
import { correctAnswerText } from "@/components/lessons/data/correct-answer";
import type { Exercise, ExerciseResult } from "@/components/lessons/types";
import { useSoundEffects } from "@/hooks/useSoundEffects";

interface ExerciseStepProps {
    readonly exercise: Exercise;
    readonly isLast: boolean;
    readonly onChecked: (correct: boolean) => void;
    readonly onContinue: () => void;
}

export function ExerciseStep({
    exercise,
    isLast,
    onChecked,
    onContinue,
}: ExerciseStepProps) {
    const [result, setResult] = useState<ExerciseResult>({
        ready: false,
        correct: false,
    });
    const [checked, setChecked] = useState(false);
    const { play } = useSoundEffects();

    function check() {
        setChecked(true);
        onChecked(result.correct);
        play(result.correct ? "success" : "error");
    }

    return (
        <section className="flex flex-col gap-5">
            <h2 className="text-lg font-bold text-title">{exercise.prompt}</h2>
            <ExerciseRenderer
                exercise={exercise}
                locked={checked}
                onChange={setResult}
            />
            {checked ? (
                <FeedbackPanel
                    correct={result.correct}
                    explanation={exercise.explanation}
                    answerText={correctAnswerText(exercise)}
                    isLast={isLast}
                    onContinue={onContinue}
                />
            ) : (
                <button
                    type="button"
                    disabled={!result.ready}
                    onClick={check}
                    className="rounded-2xl bg-primary py-3 font-semibold text-on-primary transition active:scale-95 disabled:opacity-40"
                >
                    Verificar
                </button>
            )}
        </section>
    );
}
