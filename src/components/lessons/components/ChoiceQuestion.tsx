"use client";

import clsx from "clsx";
import { useState } from "react";
import { CodeBlock } from "@/components/lessons/components/CodeBlock";
import type {
    BankItem,
    ChoiceExercise,
    ExerciseProps,
} from "@/components/lessons/types";
import { shuffle } from "@/lib/shuffle";

// A resposta certa é sempre a primeira opção do conteúdo
const CORRECT_ID = "option-0";

export function ChoiceQuestion({
    exercise,
    locked,
    onChange,
}: ExerciseProps<ChoiceExercise>) {
    const [options] = useState<BankItem[]>(() =>
        shuffle(
            exercise.options.map((label, position) => ({
                id: `option-${position}`,
                label,
            })),
        ),
    );
    const [selected, setSelected] = useState<string | null>(null);

    function pick(id: string) {
        if (locked) return;

        setSelected(id);
        onChange({ ready: true, correct: id === CORRECT_ID });
    }

    function stateClass(id: string) {
        if (locked && id === CORRECT_ID) return "border-primary bg-primary/10";
        if (locked && id === selected) return "border-danger bg-danger/10";

        return id === selected
            ? "border-primary bg-selection"
            : "border-transparent bg-surface";
    }

    return (
        <div className="flex flex-col gap-3">
            {exercise.code && <CodeBlock>{exercise.code}</CodeBlock>}
            {options.map(({ id, label }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => pick(id)}
                    aria-pressed={id === selected}
                    className={clsx(
                        "w-full rounded-2xl border-2 p-4 text-left text-base font-medium text-title transition active:scale-[0.99]",
                        stateClass(id),
                    )}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
