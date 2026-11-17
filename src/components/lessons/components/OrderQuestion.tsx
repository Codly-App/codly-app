"use client";

import { useState } from "react";
import { Chip } from "@/components/lessons/components/Chip";
import type {
    BankItem,
    ExerciseProps,
    OrderExercise,
} from "@/components/lessons/types";
import { shuffleUntil } from "@/lib/shuffle";

export function OrderQuestion({
    exercise,
    locked,
    onChange,
}: ExerciseProps<OrderExercise>) {
    // Embaralha de novo se, por azar, já saiu na ordem certa
    const [bank] = useState<BankItem[]>(() =>
        shuffleUntil(
            exercise.items.map((label, position) => ({
                id: `item-${position}`,
                label,
            })),
            (list) =>
                list.every(
                    (item, position) => item.label === exercise.items[position],
                ),
        ),
    );
    const [picked, setPicked] = useState<string[]>([]);

    const labelOf = (id: string) =>
        bank.find((item) => item.id === id)?.label ?? "";

    function update(next: string[]) {
        const ready = next.length === exercise.items.length;
        const correct =
            ready &&
            next.every(
                (id, position) => labelOf(id) === exercise.items[position],
            );

        setPicked(next);
        onChange({ ready, correct });
    }

    function add(id: string) {
        if (locked || picked.includes(id)) return;

        update([...picked, id]);
    }

    function remove(id: string) {
        if (locked) return;

        update(picked.filter((item) => item !== id));
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary/30 p-3">
                {picked.length === 0 && (
                    <span className="text-sm text-foreground/70">
                        Toque nos itens abaixo, na ordem certa.
                    </span>
                )}
                {picked.map((id) => (
                    <Chip
                        key={id}
                        label={labelOf(id)}
                        disabled={locked}
                        onClick={() => remove(id)}
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                {bank.map(({ id, label }) => (
                    <Chip
                        key={id}
                        label={label}
                        used={picked.includes(id)}
                        disabled={locked}
                        onClick={() => add(id)}
                    />
                ))}
            </div>
        </div>
    );
}
