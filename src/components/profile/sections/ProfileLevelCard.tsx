import type { ProfileUser } from "@/components/profile/types";
import { ProgressBar } from "@/components/ui/display/ProgressBar";

interface ProfileLevelCardProps {
    readonly user: ProfileUser;
}

export function ProfileLevelCard({ user }: ProfileLevelCardProps) {
    const percent = (user.levelXp / user.nextLevelXp) * 100;

    return (
        <section className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-title">Nível {user.level}</h2>
                <span className="text-sm font-medium text-primary-strong dark:text-title">
                    {user.levelXp}/{user.nextLevelXp} XP
                </span>
            </div>
            <ProgressBar
                value={percent}
                label="Progresso para o próximo nível"
            />
            <p className="text-sm text-foreground/70">
                Faltam {user.nextLevelXp - user.levelXp} XP para o nível{" "}
                {user.level + 1}.
            </p>
        </section>
    );
}
