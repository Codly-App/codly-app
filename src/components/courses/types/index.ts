export type CoursePlan = "demo" | "basico" | "pro";

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
    locked: boolean;
}
