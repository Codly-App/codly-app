import {
    COURSE_ICONS,
    DEFAULT_COURSE_ICON,
} from "@/components/courses/data/course-icons";

interface CourseIconProps {
    iconKey: string;
}

export function CourseIcon({ iconKey }: CourseIconProps) {
    const Icon = COURSE_ICONS[iconKey] ?? DEFAULT_COURSE_ICON;

    return (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl text-on-primary">
            <Icon aria-hidden />
        </span>
    );
}
