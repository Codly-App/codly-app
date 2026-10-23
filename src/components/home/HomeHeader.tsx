import { FiBell, FiStar, FiZap } from "react-icons/fi";
import { StreakFlame } from "@/components/home/StreakFlame";
import type { HomeUser } from "@/components/home/types";
import { IconButton } from "@/components/ui/IconButton";
import { StatPill } from "@/components/ui/StatPill";
import { ThemeToggle } from "../ui/ThemeToggle";

interface HomeHeaderProps {
    user: HomeUser;
}

const FLAME_MIN_STREAK = 3;

export function HomeHeader({ user }: HomeHeaderProps) {
    const onFire = user.streak > FLAME_MIN_STREAK;

    return (
        <header className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm text-foreground/70">Bem-vindo de volta,</p>
                    <h1 className="text-2xl font-bold text-title">{user.name}</h1>
                </div>
                <div className="flex gap-2">
                    <IconButton icon={<FiBell />} label="Notificações" />
                    <ThemeToggle/>
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                <StatPill
                    icon={onFire ? <StreakFlame /> : <FiZap className="text-primary" />}
                    value={`${user.streak} dias`}
                    label="Sequência diária"
                />
                <StatPill
                    icon={<FiStar className="text-primary" />}
                    value={`${user.xp} XP`}
                    label="Experiência"
                />
                <StatPill
                    icon={<FiStar className="text-primary" />}
                    value={`Nível ${user.level}`}
                    label="Nível atual"
                />
            </div>
        </header>
    );
}