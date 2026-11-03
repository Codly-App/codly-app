import { FiZap } from "react-icons/fi";
import { StreakFlame } from "@/components/ui/display/StreakFlame";

const FLAME_MIN_STREAK = 3;

interface StreakIconProps {
    streak: number;
}

export function StreakIcon({ streak }: StreakIconProps) {
    return streak > FLAME_MIN_STREAK ? (
        <StreakFlame />
    ) : (
        <FiZap className="text-primary" />
    );
}