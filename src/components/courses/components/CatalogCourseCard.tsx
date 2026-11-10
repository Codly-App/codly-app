import { FiLock } from "react-icons/fi";
import { AddCourseButton } from "@/components/courses/components/AddCourseButton";
import { CourseIcon } from "@/components/ui/display/CourseIcon";
import { LOCK_MESSAGES } from "@/components/courses/data/lock-messages";
import type { Course } from "@/components/courses/types";

interface CatalogCourseCardProps {
    readonly course: Course;
}

export function CatalogCourseCard({ course }: CatalogCourseCardProps) {
    return (
        <li className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
            <div className="flex items-center gap-3">
                <CourseIcon iconKey={course.iconKey} />
                <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="truncate font-semibold text-title">
                        {course.title}
                    </h3>
                    <span className="text-xs text-foreground/70">
                        {course.lessonsTotal} lições
                    </span>
                </div>
            </div>
            <p className="text-sm text-foreground/70">{course.description}</p>
            {course.lockReason ? (
                <p className="flex items-start gap-2 text-sm font-medium text-foreground/70">
                    <FiLock aria-hidden className="mt-0.5 shrink-0" />
                    {LOCK_MESSAGES[course.lockReason]}
                </p>
            ) : (
                <div className="flex justify-end">
                    <AddCourseButton courseId={course.id} />
                </div>
            )}
        </li>
    );
}
