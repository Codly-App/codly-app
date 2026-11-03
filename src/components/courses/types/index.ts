export type CoursePlan = "free" | "pro";

export type LockReason = "plan" | "limit";

export type CoursesTab = "mine" | "explore";

export interface Course {
    id: string;
    title: string;
    description: string;
    iconKey: string;
    lessonsTotal: number;
    lessonsDone: number;
    enrolled: boolean;
    requiredPlan: CoursePlan;
    lockReason: LockReason | null;
}