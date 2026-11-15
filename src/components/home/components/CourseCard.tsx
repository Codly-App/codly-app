import { CourseIcon } from "@/components/ui/display/CourseIcon";
import { ProgressBar } from "@/components/ui/display/ProgressBar";
import type { SummaryCourse } from "@/types/summary";

interface CourseCardProps {
    readonly course: SummaryCourse;
}

export function CourseCard({ course }: CourseCardProps) {
    const percent = course.lessonsTotal
        ? (course.lessonsDone / course.lessonsTotal) * 100
        : 0;

    return (
        <li className="flex items-center gap-3 rounded-2xl bg-surface p-4">
            <CourseIcon iconKey={course.iconKey} />
            <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                    <h3 className="truncate font-semibold text-title">
                        {course.title}
                    </h3>
                    <span className="shrink-0 text-xs text-foreground/70">
                        {course.lessonsDone}/{course.lessonsTotal}
                    </span>
                </div>
                <ProgressBar
                    value={percent}
                    label={`Progresso em ${course.title}`}
                />
            </div>
        </li>
    );
}