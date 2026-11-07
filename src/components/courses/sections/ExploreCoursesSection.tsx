"use client";

import { useState } from "react";
import { FiCheckCircle, FiSearch } from "react-icons/fi";
import { CatalogCourseCard } from "@/components/courses/components/CatalogCourseCard";
import type { Course } from "@/components/courses/types";
import { SearchInput } from "@/components/ui/buttons/SearchInput";
import { EmptyState } from "@/components/ui/display/EmptyState";
import { normalizeText } from "@/lib/normalize-text";

interface ExploreCoursesSectionProps {
    courses: Course[];
}

function matchesQuery(course: Course, query: string) {
    const text = normalizeText(`${course.title} ${course.description}`);

    return text.includes(normalizeText(query.trim()));
}

export function ExploreCoursesSection({ courses }: ExploreCoursesSectionProps) {
    const [query, setQuery] = useState("");
    const available = courses.filter((course) => !course.enrolled);
    const results = available.filter((course) => matchesQuery(course, query));

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
        <div className="flex flex-col gap-4">
            <SearchInput
                label="Buscar cursos"
                placeholder="Buscar cursos (ex.: SQL, JavaScript)"
                value={query}
                onChange={setQuery}
            />
            {results.length === 0 ? (
                <EmptyState
                    icon={<FiSearch />}
                    title="Nenhum curso encontrado"
                    description="Tente outra palavra, como SQL ou JavaScript."
                />
            ) : (
                <ul className="flex flex-col gap-3 md:grid md:grid-cols-2">
                    {results.map((course) => (
                        <CatalogCourseCard key={course.id} course={course} />
                    ))}
                </ul>
            )}
        </div>
    );
}
