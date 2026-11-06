import type { ProgressUnit } from "@/components/trail/types";
import { ProgressBar } from "@/components/ui/display/ProgressBar";

interface TrailSummaryProps {
    units: ProgressUnit[];
}

export function TrailSummary({ units }: TrailSummaryProps) {
    const lessons = units.flatMap((unit) => unit.lessons);
    const done = lessons.filter((lesson) => lesson.status === "done");
    const next = lessons.find((lesson) => lesson.status === "current");
    const earnedXp = done.reduce((sum, lesson) => sum + lesson.xp, 0);

    return (
        <section className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-title">Seu progresso</h2>
                <span className="text-sm font-medium text-primary-strong dark:text-title">
                    {done.length}/{lessons.length} lições
                </span>
            </div>
            <ProgressBar
                value={(done.length / lessons.length) * 100}
                label="Progresso na trilha"
            />
            <p className="text-sm text-foreground/70">
                {next
                    ? `Próxima: ${next.title}`
                    : "Trilha concluída. Parabéns!"}{" "}
                · {earnedXp} XP ganhos
            </p>
        </section>
    );
}
