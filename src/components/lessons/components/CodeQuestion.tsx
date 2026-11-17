"use client";

import { useState } from "react";
import { Chip } from "@/components/lessons/components/Chip";
import { CodeBlock } from "@/components/lessons/components/CodeBlock";
import type {
    BankItem,
    CodeExercise,
    ExerciseProps,
} from "@/components/lessons/types";
import { shuffle } from "@/lib/shuffle";

export function CodeQuestion({
    exercise,
    locked,
    onChange,
}: ExerciseProps<CodeExercise>) {
    const [bank] = useState<BankItem[]>(() =>
        shuffle(
            exercise.options.map((label, position) => ({
                id: `word-${position}`,
                label,
            })),
        ),
    );
    // Cada lacuna guarda o id da palavra escolhida (ou null se está vazia)
    const [slots, setSlots] = useState<(string | null)[]>(() =>
        exercise.blanks.map(() => null),
    );

    const labelOf = (id: string | null) =>
        bank.find((item) => item.id === id)?.label ?? "";

    function update(next: (string | null)[]) {
        const ready = next.every((slot) => slot !== null);
        const correct =
            ready &&
            next.every(
                (slot, position) => labelOf(slot) === exercise.blanks[position],
            );

        setSlots(next);
        onChange({ ready, correct });
    }

    function put(id: string) {
        const free = slots.indexOf(null);

        if (locked || free === -1) return;

        update(slots.map((slot, position) => (position === free ? id : slot)));
    }

    function clear(position: number) {
        if (locked) return;

        update(
            slots.map((slot, current) => (current === position ? null : slot)),
        );
    }

    const pieces = exercise.parts.map((text, position) => ({
        id: `piece-${position}`,
        text,
        position,
    }));

    return (
        <div className="flex flex-col gap-4">
            <CodeBlock>
                {pieces.map(({ id, text, position }) => (
                    <span key={id}>
                        {text}
                        {position < exercise.blanks.length && (
                            <button
                                type="button"
                                onClick={() => clear(position)}
                                aria-label={`Lacuna ${position + 1}`}
                                className="mx-1 inline-block min-w-20 rounded-lg border-b-2 border-primary bg-background px-2 text-center font-semibold text-primary"
                            >
                                {slots[position] === null
                                    ? "____"
                                    : labelOf(slots[position])}
                            </button>
                        )}
                    </span>
                ))}
            </CodeBlock>
            <div className="flex flex-wrap gap-2">
                {bank.map(({ id, label }) => (
                    <Chip
                        key={id}
                        label={label}
                        used={slots.includes(id)}
                        disabled={locked}
                        onClick={() => put(id)}
                    />
                ))}
            </div>
        </div>
    );
}
