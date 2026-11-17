"use client";

import { useState } from "react";
import { useLessonRunner } from "@/hooks/useLessonRunner";
import { ExerciseStep } from "@/components/lessons/sections/ExerciseStep";
import { LessonIntro } from "@/components/lessons/sections/LessonIntro";
import { LessonResult } from "@/components/lessons/sections/LessonResult";
import type { LessonContent } from "@/components/lessons/types";
import type { ProgressLesson } from "@/components/trail/types";
import { ProgressBar } from "@/components/ui/display/ProgressBar";
import { useCompleteLesson } from "@/hooks/useCompleteLesson";
import { useSoundEffects } from "@/hooks/useSoundEffects";

interface LessonPlayerProps {
    readonly courseId: string;
    readonly lesson: ProgressLesson;
    readonly content: LessonContent;
    readonly backHref: string;
}

export function LessonPlayer({
    courseId,
    lesson,
    content,
    backHref,
}: LessonPlayerProps) {
    const total = content.exercises.length;
    const runner = useLessonRunner(total);
    const complete = useCompleteLesson();
    const { play } = useSoundEffects();
    // Lição já feita antes: o aluno só pratica e não chama a API nem ganha XP
    const [practice] = useState(lesson.status === "done");

    function save() {
        complete.mutate({ courseId, lessonId: lesson.id });
    }

    function finish() {
        if (!practice) save();

        play("complete");
        runner.finish();
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <ProgressBar
                    value={runner.progress}
                    label="Progresso da lição"
                />
                {runner.phase === "exercise" && (
                    <p className="text-xs font-medium text-foreground/70">
                        Exercício {runner.index + 1} de {total}
                    </p>
                )}
            </div>

            {runner.phase === "intro" && (
                <LessonIntro
                    intro={content.intro}
                    total={total}
                    xp={lesson.xp}
                    onStart={runner.start}
                />
            )}

            {runner.phase === "exercise" && (
                <ExerciseStep
                    key={runner.index}
                    exercise={content.exercises[runner.index]}
                    isLast={runner.isLast}
                    onChecked={runner.check}
                    onContinue={runner.isLast ? finish : runner.next}
                />
            )}

            {runner.phase === "result" && (
                <LessonResult
                    total={total}
                    hits={runner.hits}
                    practice={practice}
                    isPending={complete.isPending}
                    isError={complete.isError}
                    result={complete.data}
                    backHref={backHref}
                    onRetry={save}
                />
            )}
        </div>
    );
}
