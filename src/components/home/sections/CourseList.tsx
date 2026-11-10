import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { CourseCard } from "@/components/home/components/CourseCard";
import { EmptyState } from "@/components/ui/display/EmptyState";
import type { SummaryCourse } from "@/types/summary";

interface CourseListProps {
    readonly courses: SummaryCourse[];
}

export function CourseList({ courses }: CourseListProps) {
    if (courses.length === 0) {
        return (
            <EmptyState
                icon={<FiBookOpen />}
                title="Você ainda não tem cursos"
                description="Escolha um curso para começar a estudar."
            >
                <Link
                    href="/courses"
                    className="rounded-2xl bg-primary px-4 py-2 font-semibold text-on-primary"
                >
                    Explorar cursos
                </Link>
            </EmptyState>
        );
    }

    return (
        <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-title">Seus cursos</h2>
            <ul className="flex flex-col gap-3 md:grid md:grid-cols-2">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </ul>
        </section>
    );
}