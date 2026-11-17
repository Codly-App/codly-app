import { ChoiceQuestion } from "@/components/lessons/components/ChoiceQuestion";
import { CodeQuestion } from "@/components/lessons/components/CodeQuestion";
import { OrderQuestion } from "@/components/lessons/components/OrderQuestion";
import type { Exercise, ExerciseProps } from "@/components/lessons/types";

export function ExerciseRenderer({
    exercise,
    locked,
    onChange,
}: ExerciseProps<Exercise>) {
    if (exercise.kind === "choice") {
        return (
            <ChoiceQuestion
                exercise={exercise}
                locked={locked}
                onChange={onChange}
            />
        );
    }

    if (exercise.kind === "code") {
        return (
            <CodeQuestion
                exercise={exercise}
                locked={locked}
                onChange={onChange}
            />
        );
    }

    return (
        <OrderQuestion
            exercise={exercise}
            locked={locked}
            onChange={onChange}
        />
    );
}
