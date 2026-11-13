
"use client";

import { FiBell, FiStar } from "react-icons/fi";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import { StatPill } from "@/components/ui/display/StatPill";
import type { UserStats } from "@/types/summary";
import { StreakIcon } from "@/components/ui/display/StreakIcon";
import { useProfile } from "@/hooks/useProfile";
import { getAuthUserInfo } from "@/lib/auth-user";
import { Avatar } from "@/components/ui/display/Avatar";

interface HomeHeaderProps {
    readonly stats?: UserStats;
}

export function HomeHeader({ stats }: HomeHeaderProps) {
    const { data: profile, isLoading } = useProfile();

    const displayName = profile?.name || "Estudante";
    const firstName = displayName.trim().split(/\s+/)[0];
    const photoURL = getAuthUserInfo().picture;
    const streak = stats?.streak ?? 0;
    const xp = stats?.xp ?? 0;
    const level = stats?.level ?? 1;

    return (
        <header className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 shadow-lg shadow-primary/10 sm:size-14">
                        <Avatar name={displayName} src={photoURL} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-foreground/70 sm:text-sm">
                            Bem-vindo de volta,
                        </p>

                        <h1 className="truncate text-xl font-bold tracking-tight text-title sm:text-2xl">
                            {isLoading ? "Carregando..." : firstName}
                        </h1>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <IconButton icon={<FiBell />} label="Notificações" />
                    <ThemeToggle />
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <StatPill icon={<StreakIcon streak={streak} />}
                    value={`${streak} dias`} label="Sequência diária" />

                <StatPill icon={<FiStar className="text-primary" />}
                    value={`${xp} XP`} label="Experiência" />

                <StatPill icon={<FiStar className="text-primary" />}
                    value={`Nível ${level}`} label="Nível atual" />
            </div>
        </header>
    );
}
