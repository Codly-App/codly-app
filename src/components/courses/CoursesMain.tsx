"use client";

import { useState } from "react";
import { ExploreCoursesSection } from "@/components/courses/sections/ExploreCoursesSection";
import { MyCoursesSection } from "@/components/courses/sections/MyCoursesSection";
import type { CoursesTab } from "@/components/courses/types";
import {
    SegmentedControl,
    type SegmentedOption,
} from "@/components/ui/buttons/SegmentedControl";
import { BottomNav } from "@/components/ui/navigation/BottomNav";
import { useCourses } from "@/hooks/useCourses";

export function CoursesMain() {
    const { data: courses, isError } = useCourses();
    const [tab, setTab] = useState<CoursesTab>("mine");

    const enrolledCount = courses.filter((course) => course.enrolled).length;
    const options: SegmentedOption<CoursesTab>[] = [
        { value: "mine", label: `Meus cursos (${enrolledCount})` },
        { value: "explore", label: "Explorar" },
    ];

    return (
        <>
            <main className="mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-28">
                <h1 className="text-2xl font-bold text-title">Cursos</h1>
                <SegmentedControl
                    label="Seção de cursos"
                    options={options}
                    value={tab}
                    onChange={setTab}
                />
                {isError && (
                    <p role="alert" className="text-sm text-danger">
                        Não foi possível atualizar seus cursos.
                    </p>
                )}
                {tab === "mine" ? (
                    <MyCoursesSection
                        courses={courses}
                        onExplore={() => setTab("explore")}
                    />
                ) : (
                    <ExploreCoursesSection courses={courses} />
                )}
            </main>
            <BottomNav />
        </>
    );
}
