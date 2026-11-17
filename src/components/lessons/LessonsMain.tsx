"use client";

import { useSearchParams } from "next/navigation";
import { LessonUnavailable } from "@/components/lessons/components/LessonUnavailable";
import { LESSONS } from "@/components/lessons/data/lessons";
import { LessonPlayer } from "@/components/lessons/sections/LessonPlayer";
import { withProgress } from "@/components/trail/data/trail-progress";
import { TRAILS } from "@/components/trail/data/trails";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";
import { useCourses } from "@/hooks/useCourses";

export function LessonsMain() {
    const params = useSearchParams();
    const courseId = params.get("course") ?? "";
    const lessonId = params.get("lesson") ?? "";
    const { data: courses } = useCourses();

    const course = courses.find((item) => item.id === courseId);
    const trail = TRAILS[courseId];
    const content = LESSONS[courseId]?.[lessonId];
    const trailHref = `/trail?course=${courseId}`;

    const lesson =
        course && trail
            ? withProgress(trail.units, course.lessonsDone)
                  .flatMap((unit) => unit.lessons)
                  .find((item) => item.id === lessonId)
            : undefined;

    if (!course || !lesson || !content) {
        return (
            <LessonUnavailable
                title="Lição não encontrada"
                description="Esta lição ainda não está disponível."
                href="/courses"
                linkLabel="Ver meus cursos"
            />
        );
    }

    if (!course.enrolled) {
        return (
            <LessonUnavailable
                title="Adicione o curso primeiro"
                description="Para fazer as lições, adicione este curso à sua lista."
                href="/courses"
                linkLabel="Ir para os cursos"
            />
        );
    }

    if (lesson.status === "locked") {
        return (
            <LessonUnavailable
                title="Lição bloqueada"
                description="Conclua a lição anterior para liberar esta."
                href={trailHref}
                linkLabel="Voltar à trilha"
            />
        );
    }

    return (
        <SubPageLayout title={lesson.title} backHref={trailHref}>
            <LessonPlayer
                key={lesson.id}
                courseId={courseId}
                lesson={lesson}
                content={content}
                backHref={trailHref}
            />
        </SubPageLayout>
    );
}
