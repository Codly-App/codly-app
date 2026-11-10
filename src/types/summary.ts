export type SummaryPlan = "free" | "pro";

export interface UserStats {
    xp: number;
    streak: number;
    level: number;
    levelXp: number;
    nextLevelXp: number;
}

export interface DailyGoal {
    earnedXp: number;
    targetXp: number;
}

export interface SummaryCourse {
    id: string;
    title: string;
    iconKey: string;
    lessonsDone: number;
    lessonsTotal: number;
}

export interface UserSummary {
    plan: SummaryPlan;
    stats: UserStats;
    dailyGoal: DailyGoal;
    courses: SummaryCourse[];
}