import { FiCheckCircle } from "react-icons/fi";
import { CatalogCourseCard } from "@/components/courses/components/CatalogCourseCard";
import type { Course } from "@/components/courses/types";
import { EmptyState } from "@/components/ui/display/EmptyState";

interface ExploreCoursesSectionProps {
    readonly courses: Course[];
}

export function ExploreCoursesSection({ courses }: ExploreCoursesSectionProps) {
    const available = courses.filter((course) => !course.enrolled);

    if (available.length === 0) {
        return (
            <EmptyState
                icon={<FiCheckCircle />}
                title="Você está em todos os cursos"
                description="Novos cursos aparecem aqui assim que forem lançados."
            />
        );
    }

    return (
        <ul className="flex flex-col gap-3">
            {available.map((course) => (
                <CatalogCourseCard key={course.id} course={course} />
            ))}
        </ul>
    );
}
