import Link from "next/link";
import { CourseIcon } from "@/components/courses/components/CourseIcon";
import { RemoveCourseButton } from "@/components/courses/components/RemoveCourseButton";
import type { Course } from "@/components/courses/types";
import { ProgressBar } from "@/components/ui/display/ProgressBar";

interface EnrolledCourseCardProps {
    readonly course: Course;
}

function getActionLabel({ lessonsDone, lessonsTotal }: Course) {
    if (lessonsDone >= lessonsTotal) return "Revisar";
    if (lessonsDone === 0) return "Começar";
    return "Continuar";
}

export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
    const percent = (course.lessonsDone / course.lessonsTotal) * 100;

    return (
        <li className="flex flex-col gap-4 rounded-2xl bg-surface p-4">
            <div className="flex items-center gap-3">
                <CourseIcon iconKey={course.iconKey} />
                <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="truncate font-semibold text-title">
                        {course.title}
                    </h3>
                    <span className="text-xs text-foreground/70">
                        {course.lessonsDone} de {course.lessonsTotal} lições
                    </span>
                </div>
            </div>
            <ProgressBar
                value={percent}
                label={`Progresso em ${course.title}`}
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
                <RemoveCourseButton courseId={course.id} />
                <Link
                    href={`/lessons?course=${course.id}`}
                    className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition active:scale-95"
                >
                    {getActionLabel(course)}
                </Link>
            </div>
        </li>
    );
}
