import clsx from "clsx";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

interface FeedbackPanelProps {
    readonly correct: boolean;
    readonly explanation: string;
    readonly answerText: string;
    readonly isLast: boolean;
    readonly onContinue: () => void;
}

export function FeedbackPanel({
    correct,
    explanation,
    answerText,
    isLast,
    onContinue,
}: FeedbackPanelProps) {
    return (
        <section
            aria-live="polite"
            className={clsx(
                "flex flex-col gap-3 rounded-2xl p-4",
                correct ? "bg-primary/10" : "bg-danger/10",
            )}
        >
            <h3
                className={clsx(
                    "flex items-center gap-2 font-bold",
                    correct
                        ? "text-primary-strong dark:text-title"
                        : "text-danger",
                )}
            >
                {correct ? (
                    <FiCheckCircle aria-hidden />
                ) : (
                    <FiXCircle aria-hidden />
                )}
                {correct ? "Muito bem!" : "Quase lá!"}
            </h3>
            {!correct && (
                <p className="text-sm text-foreground">
                    Resposta certa:{" "}
                    <span className="font-mono font-semibold">
                        {answerText}
                    </span>
                </p>
            )}
            <p className="text-sm text-foreground/70">{explanation}</p>
            <button
                type="button"
                onClick={onContinue}
                className="rounded-2xl bg-primary py-3 font-semibold text-on-primary transition active:scale-95"
            >
                {isLast ? "Concluir lição" : "Continuar"}
            </button>
        </section>
    );
}
