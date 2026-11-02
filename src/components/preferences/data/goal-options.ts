import type { SegmentedOption } from "@/components/ui/buttons/SegmentedControl";
import type { DailyGoalXp } from "@/types/settings";

export const GOAL_OPTIONS: SegmentedOption<DailyGoalXp>[] = [
    { value: 20, label: "20 XP" },
    { value: 50, label: "50 XP" },
    { value: 100, label: "100 XP" },
];
