import type { Exercise } from "@/components/lessons/types";

/** Texto da resposta certa, mostrado quando o aluno erra. */
export function correctAnswerText(exercise: Exercise): string {
    if (exercise.kind === "choice") return exercise.options[0];
    if (exercise.kind === "code") return exercise.blanks.join(", ");

    return exercise.items.join(" ");
}
