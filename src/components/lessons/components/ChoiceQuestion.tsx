"use client";

import clsx from "clsx";
import { useId, useState } from "react";
import { CodeBlock } from "@/components/lessons/components/CodeBlock";
import type {
    BankItem,
    ChoiceExercise,
    ExerciseProps,
} from "@/components/lessons/types";
import { shuffle } from "@/lib/shuffle";

// A resposta certa é sempre a primeira opção do conteúdo
const CORRECT_ID = "option-0";
const LETTERS = "ABCDE";

export function ChoiceQuestion({
    exercise,
    locked,
    onChange,
}: ExerciseProps<ChoiceExercise>) {
    const group = useId();
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
        if (locked && id === CORRECT_ID) return "border-success bg-success/10";
        if (locked && id === selected) return "border-danger bg-danger/10";

        return id === selected
            ? "border-primary bg-selection"
            : "border-transparent bg-surface";
    }

    function badgeClass(id: string) {
        if (locked && id === CORRECT_ID) {
            return "border-success bg-success text-background";
        }
        if (locked && id === selected) {
            return "border-danger bg-danger text-on-primary";
        }

        return id === selected
            ? "border-primary bg-primary text-on-primary"
            : "border-primary/40 text-primary";
    }

    return (
        <div className="flex flex-col gap-3">
            {exercise.code && <CodeBlock>{exercise.code}</CodeBlock>}
            {options.map(({ id, label }, position) => (
                <label
                    key={id}
                    className={clsx(
                        "flex items-center gap-3 rounded-2xl border-2 p-4 text-base font-medium text-title transition active:scale-[0.99] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary",
                        locked ? "cursor-default" : "cursor-pointer",
                        stateClass(id),
                    )}
                >
                    <input
                        type="radio"
                        name={group}
                        checked={id === selected}
                        disabled={locked}
                        onChange={() => pick(id)}
                        className="sr-only"
                    />
                    <span
                        aria-hidden
                        className={clsx(
                            "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                            badgeClass(id),
                        )}
                    >
                        {LETTERS[position]}
                    </span>
                    <span>{label}</span>
                </label>
            ))}
        </div>
    );
}