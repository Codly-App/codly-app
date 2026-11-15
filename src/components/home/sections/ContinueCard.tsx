import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import { ProgressBar } from "@/components/ui/display/ProgressBar";
import type { SummaryCourse } from "@/types/summary";
import { getNextLesson } from "@/components/trail/data/trail-progress";

interface ContinueCardProps {
    readonly course: SummaryCourse;
}

export function ContinueCard({ course }: ContinueCardProps) {
    const percent = course.lessonsTotal
        ? Math.round((course.lessonsDone / course.lessonsTotal) * 100)
        : 0;
    const next = getNextLesson(course.id, course.lessonsDone);
    const finished = course.lessonsTotal > 0 && course.lessonsDone >= course.lessonsTotal;
    const href = next
        ? `/lessons?course=${course.id}&lesson=${next.id}`
        : `/trail?course=${course.id}`;

    return (
        <section className="flex flex-col gap-4 rounded-3xl bg-primary p-5 text-on-primary shadow-lg">
            <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wide opacity-80">
                    Continuar de onde parou
                </p>
                <h2 className="text-xl font-bold">{course.title}</h2>
                <p className="text-sm opacity-90">
                    {next
                        ? `Próxima: ${next.title}`
                        : finished
                          ? "Curso concluído. Revise a trilha quando quiser."
                          : "Abra a trilha do curso."}
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <ProgressBar
                    variant="onPrimary"
                    value={percent}
                    label={`Progresso em ${course.title}`}
                />
                <div className="flex justify-between text-xs font-medium opacity-90">
                    <span>
                        {course.lessonsDone} de {course.lessonsTotal} lições
                    </span>
                    <span>{percent}%</span>
                </div>
            </div>

            <Link
                href={href}
                className="flex items-center justify-center gap-2 rounded-2xl bg-on-primary py-3 font-semibold text-primary-strong transition active:scale-95"
            >
                <FiPlay aria-hidden />
                {next ? "Continuar lição" : "Ver trilha"}
            </Link>
        </section>
    );
}