
"use client";

import { FiBell, FiStar, FiUser } from "react-icons/fi";
import type { HomeUser } from "@/components/home/types";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import { StatPill } from "@/components/ui/display/StatPill";
import { StreakIcon } from "@/components/ui/display/StreakIcon";
import { useProfile } from "@/hooks/useProfile";

interface HomeHeaderProps {
    readonly user: HomeUser;
}

const FLAME_MIN_STREAK = 3;

export function HomeHeader({ user }: HomeHeaderProps) {
    const { data: profile, isLoading } = useProfile();

    const displayName = profile?.name || "Estudante";
    const firstName = displayName.trim().split(/\s+/)[0];
    const photoURL = profile?.photoURL;

    return (
        <header className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 shadow-lg shadow-primary/10 sm:size-14">
                        {photoURL ? (
                            <img src={photoURL} alt={`Foto de perfil de ${displayName}`}
                                referrerPolicy="no-referrer" className="size-full rounded-full object-cover" />
                        ) : (
                            <FiUser size={23} className="text-primary" />
                        )}
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
                <StatPill icon={<StreakIcon streak={user.streak} />}
                    value={`${user.streak} dias`} label="Sequência diária" />

                <StatPill icon={<FiStar className="text-primary" />}
                    value={`${user.xp} XP`} label="Experiência" />

                <StatPill icon={<FiStar className="text-primary" />}
                    value={`Nível ${user.level}`} label="Nível atual" />
            </div>
        </header>
    );
}
