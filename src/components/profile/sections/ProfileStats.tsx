import { FiAward, FiStar } from "react-icons/fi";
import { ProfileStatCard } from "@/components/profile/components/ProfileStatCard";
import type { ProfileUser } from "@/components/profile/types";
import { StreakIcon } from "@/components/ui/display/StreakIcon";

interface ProfileStatsProps {
    readonly user: ProfileUser;
}

export function ProfileStats({ user }: ProfileStatsProps) {
    return (
        <section aria-label="Estatísticas" className="grid grid-cols-3 gap-3">
            <ProfileStatCard
                icon={<StreakIcon streak={user.streak} />}
                value={`${user.streak}`}
                label="Dias seguidos"
            />
            <ProfileStatCard
                icon={<FiStar />}
                value={`${user.xp}`}
                label="XP total"
            />
            <ProfileStatCard
                icon={<FiAward />}
                value={`${user.level}`}
                label="Nível"
            />
        </section>
    );
}