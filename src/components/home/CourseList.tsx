import { CourseCard } from "@/components/home/CourseCard";
import type { HomeCourse } from "@/components/home/types";

interface CourseListProps {
    courses: HomeCourse[];
}

export function CourseList({ courses }: CourseListProps) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-title">Seus cursos</h2>
            <ul className="flex flex-col gap-3">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </ul>
        </section>
    );
}