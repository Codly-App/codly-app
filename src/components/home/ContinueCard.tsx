import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import type { HomeCourse } from "@/components/home/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface ContinueCardProps {
    course: HomeCourse;
}

export function ContinueCard({ course }: ContinueCardProps) {
    const percent = Math.round((course.lessonsDone / course.lessonsTotal) * 100);

    return (
        <section className="flex flex-col gap-4 rounded-3xl bg-primary p-5 text-on-primary shadow-lg">
            <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wide opacity-80">
                    Continuar de onde parou
                </p>
                <h2 className="text-xl font-bold">{course.title}</h2>
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
                href="/lessons"
                className="flex items-center justify-center gap-2 rounded-2xl bg-on-primary py-3 font-semibold text-primary-strong transition active:scale-95"
            >
                <FiPlay aria-hidden />
                Continuar lição
            </Link>
        </section>
    );
}