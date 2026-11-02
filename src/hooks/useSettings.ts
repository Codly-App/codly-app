import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { UserSettings } from "@/types/settings";

export const SETTINGS_KEY = ["settings"];

export const DEFAULT_SETTINGS: UserSettings = {
    privacy: {
        showOnlineStatus: true,
        showCurrentCourse: true,
        showInRanking: true,
        showStreak: true,
        allowFriendRequests: true,
    },
    preferences: {
        dailyGoalXp: 50,
        soundEffects: true,
        reduceMotion: false,
    },
    notifications: {
        dailyReminder: true,
        achievements: true,
        friendActivity: true,
    },
};

export function useSettings() {
    return useQuery({
        queryKey: SETTINGS_KEY,
        queryFn: async () => (await api.get<UserSettings>("/me/settings")).data,
        initialData: DEFAULT_SETTINGS,
        initialDataUpdatedAt: 0,
    });
}
