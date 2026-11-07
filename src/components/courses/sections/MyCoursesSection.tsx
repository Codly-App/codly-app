import { FiBookOpen } from "react-icons/fi";
import { EnrolledCourseCard } from "@/components/courses/components/EnrolledCourseCard";
import type { Course } from "@/components/courses/types";
import { EmptyState } from "@/components/ui/display/EmptyState";

interface MyCoursesSectionProps {
    readonly courses: Course[];
    readonly onExplore: () => void;
}

export function MyCoursesSection({
    courses,
    onExplore,
}: MyCoursesSectionProps) {
    const enrolled = courses.filter((course) => course.enrolled);

    if (enrolled.length === 0) {
        return (
            <EmptyState
                icon={<FiBookOpen />}
                title="Nenhum curso por aqui"
                description="Escolha um curso para começar a estudar."
            >
                <button
                    type="button"
                    onClick={onExplore}
                    className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition active:scale-95"
                >
                    Explorar cursos
                </button>
            </EmptyState>
        );
    }

    return (
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-2">
            {enrolled.map((course) => (
                <EnrolledCourseCard key={course.id} course={course} />
            ))}
        </ul>
    );
}
