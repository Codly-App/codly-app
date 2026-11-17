import Link from "next/link";
import { FiAward } from "react-icons/fi";
import type { CompleteLessonResult } from "@/hooks/useCompleteLesson";

interface LessonResultProps {
    readonly total: number;
    readonly hits: number;
    readonly practice: boolean;
    readonly isPending: boolean;
    readonly isError: boolean;
    readonly result?: CompleteLessonResult;
    readonly backHref: string;
    readonly onRetry: () => void;
}

export function LessonResult({
    total,
    hits,
    practice,
    isPending,
    isError,
    result,
    backHref,
    onRetry,
}: LessonResultProps) {
    const repeated = practice || result?.alreadyDone;

    return (
        <section className="flex flex-col items-center gap-5 rounded-3xl bg-surface p-6 text-center">
            <span aria-hidden className="text-5xl text-primary">
                <FiAward />
            </span>
            <h2 className="text-2xl font-extrabold text-title">
                {practice ? "Prática concluída!" : "Lição concluída!"}
            </h2>
            <p className="text-foreground/70">
                Você acertou {hits} de {total} exercícios.
            </p>

            {repeated && (
                <p className="text-sm text-foreground/70">
                    Você já tinha concluído esta lição, então não ganha XP de
                    novo.
                </p>
            )}
            {!practice && isPending && (
                <output className="block text-sm text-foreground/70">
                    Salvando seu progresso...
                </output>
            )}
            {!repeated && result && (
                <p className="text-3xl font-extrabold text-primary-strong dark:text-title">
                    +{result.xpEarned} XP
                </p>
            )}
            {isError && (
                <div className="flex flex-col items-center gap-2">
                    <p role="alert" className="text-sm text-danger">
                        Não foi possível salvar seu progresso.
                    </p>
                    <button
                        type="button"
                        onClick={onRetry}
                        className="rounded-xl bg-background px-4 py-2 text-sm font-semibold text-title"
                    >
                        Tentar de novo
                    </button>
                </div>
            )}

            <Link
                href={backHref}
                className="w-full rounded-2xl bg-primary py-3 font-semibold text-on-primary transition active:scale-95"
            >
                Voltar à trilha
            </Link>
        </section>
    );
}
