import type {
    LessonStatus,
    ProgressUnit,
    TrailUnit,
} from "@/components/trail/types";

function statusOf(index: number, lessonsDone: number): LessonStatus {
    if (index < lessonsDone) return "done";
    if (index === lessonsDone) return "current";

    return "locked";
}

export function withProgress(
    units: TrailUnit[],
    lessonsDone: number,
): ProgressUnit[] {
    let index = 0;

    return units.map((unit) => {
        const lessons = unit.lessons.map((lesson) => {
            const current = index++;

            return {
                ...lesson,
                number: current + 1,
                status: statusOf(current, lessonsDone),
            };
        });

        return {
            ...unit,
            lessons,
            doneCount: lessons.filter((lesson) => lesson.status === "done")
                .length,
        };
    });
}
