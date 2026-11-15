import type { IconType } from "react-icons";
import { FaJs } from "react-icons/fa";
import { FiBookOpen, FiDatabase } from "react-icons/fi";

const COURSE_ICONS: Record<string, IconType> = {
    sql: FiDatabase,
    javascript: FaJs,
};

interface CourseIconProps {
    readonly iconKey: string;
}

export function CourseIcon({ iconKey }: CourseIconProps) {
    const Icon = COURSE_ICONS[iconKey] ?? FiBookOpen;

    return (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl text-on-primary">
            <Icon aria-hidden />
        </span>
    );
}