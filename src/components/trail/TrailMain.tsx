"use client";

import { useSearchParams } from "next/navigation";
import { FiMap } from "react-icons/fi";
import { withProgress } from "@/components/trail/data/trail-progress";
import { TRAILS } from "@/components/trail/data/trails";
import { TrailSummary } from "@/components/trail/sections/TrailSummary";
import { TrailUnitSection } from "@/components/trail/sections/TrailUnitSection";
import { EmptyState } from "@/components/ui/display/EmptyState";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";
import { useCourses } from "@/hooks/useCourses";

export function TrailMain() {
    const courseId = useSearchParams().get("course") ?? "";
    const { data: courses } = useCourses();
    const course = courses.find((item) => item.id === courseId);
    const trail = TRAILS[courseId];

    if (!course || !trail) {
        return (
            <SubPageLayout title="Trilha" backHref="/courses">
                <EmptyState
                    icon={<FiMap />}
                    title="Trilha em construção"
                    description="Esta trilha ainda não está disponível. Volte em breve!"
                />
            </SubPageLayout>
        );
    }

    const units = withProgress(trail.units, course.lessonsDone);

    return (
        <SubPageLayout title={course.title} backHref="/courses">
            <TrailSummary units={units} />
            {units.map((unit, index) => (
                <TrailUnitSection
                    key={unit.id}
                    unit={unit}
                    number={index + 1}
                    courseId={courseId}
                />
            ))}
        </SubPageLayout>
    );
}
