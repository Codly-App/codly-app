import type { HomeCourse } from "@/components/home/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface CourseCardProps {
    course: HomeCourse;
}

export function CourseCard({ course }: CourseCardProps) {
    const { icon: Icon } = course;
    const percent = (course.lessonsDone / course.lessonsTotal) * 100;

    return (
        <li className="flex items-center gap-3 rounded-2xl bg-surface p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl text-on-primary">
                <Icon aria-hidden />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                    <h3 className="truncate font-semibold text-title">{course.title}</h3>
                    <span className="shrink-0 text-xs text-foreground/70">
                        {course.lessonsDone}/{course.lessonsTotal}
                    </span>
                </div>
                <ProgressBar value={percent} label={`Progresso em ${course.title}`} />
            </div>
        </li>
    );
}