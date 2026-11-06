export type LessonKind = "lesson" | "challenge";

export type LessonStatus = "done" | "current" | "locked";

export interface TrailLesson {
    id: string;
    title: string;
    kind: LessonKind;
    xp: number;
}

export interface TrailUnit {
    id: string;
    title: string;
    description: string;
    lessons: TrailLesson[];
}

export interface Trail {
    courseId: string;
    units: TrailUnit[];
}

export interface ProgressLesson extends TrailLesson {
    number: number;
    status: LessonStatus;
}

export interface ProgressUnit extends Omit<TrailUnit, "lessons"> {
    lessons: ProgressLesson[];
    doneCount: number;
}
