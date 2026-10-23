import type { IconType } from "react-icons";

export interface HomeUser {
    name: string;
    streak: number;
    xp: number;
    level: number;
}

export interface DailyGoal {
    earnedXp: number;
    targetXp: number;
}

export interface HomeCourse {
    id: string;
    title: string;
    lessonsDone: number;
    lessonsTotal: number;
    icon: IconType;
}