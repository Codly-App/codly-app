import { ProgressBar } from "@/components/ui/display/ProgressBar";
import type { DailyGoal } from "@/types/summary";

interface DailyGoalCardProps {
    readonly goal: DailyGoal;
}

export function DailyGoalCard({ goal }: DailyGoalCardProps) {
    const percent = Math.min(100, (goal.earnedXp / goal.targetXp) * 100);
    const remaining = Math.max(0, goal.targetXp - goal.earnedXp);

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
                {remaining === 0
                    ? "Meta de hoje batida. Parabéns!"
                    : `Faltam ${remaining} XP para bater a meta de hoje.`}
            </p>
        </section>
    );
}