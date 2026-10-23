import type { DailyGoal } from "@/components/home/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface DailyGoalCardProps {
    goal: DailyGoal;
}

export function DailyGoalCard({ goal }: DailyGoalCardProps) {
    const percent = (goal.earnedXp / goal.targetXp) * 100;

    return (
        <section className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-title">Meta diária</h2>
                <span className="text-sm font-medium text-primary-strong dark:text-title">
                    {goal.earnedXp}/{goal.targetXp} XP
                </span>
            </div>
            <ProgressBar value={percent} label="Progresso da meta diária" />
            <p className="text-sm text-foreground/70">
                Faltam {goal.targetXp - goal.earnedXp} XP para bater a meta de hoje.
            </p>
        </section>
    );
}