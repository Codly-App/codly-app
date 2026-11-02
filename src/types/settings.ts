export type DailyGoalXp = 20 | 50 | 100;

export interface PrivacySettings {
    showOnlineStatus: boolean;
    showCurrentCourse: boolean;
    showInRanking: boolean;
    showStreak: boolean;
    allowFriendRequests: boolean;
}

export interface PreferenceSettings {
    dailyGoalXp: DailyGoalXp;
    soundEffects: boolean;
    reduceMotion: boolean;
}

export interface NotificationSettings {
    dailyReminder: boolean;
    achievements: boolean;
    friendActivity: boolean;
}

export interface UserSettings {
    privacy: PrivacySettings;
    preferences: PreferenceSettings;
    notifications: NotificationSettings;
}

export type SettingsPatch = {
    [K in keyof UserSettings]?: Partial<UserSettings[K]>;
};

export type BooleanKeys<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

export interface ToggleOption<K extends string> {
    key: K;
    label: string;
    description: string;
}
