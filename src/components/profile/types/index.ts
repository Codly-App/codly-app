export interface ProfileUser {
    name: string;
    email: string;
    picture: string | null;
    plan: string;
    streak: number;
    xp: number;
    level: number;
    levelXp: number;
    nextLevelXp: number;
}
