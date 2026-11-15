"use client";

import { NOTIFICATION_OPTIONS } from "@/components/settings/data/notification-options";
import { SettingToggle } from "@/components/ui/buttons/SettingToggle";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";
import { useSettings } from "@/hooks/useSettings";
import { askStudyReminderPermission } from "@/lib/study-reminder";
import { useUpdateSettings } from "@/hooks/useUpdateSettings";

export function NotificationsSection() {
    const { data } = useSettings();
    const { mutate } = useUpdateSettings();

    return (
        <SettingsGroup title="Notificações">
            {NOTIFICATION_OPTIONS.map(({ key, label, description }) => (
                <SettingToggle
                    key={key}
                    label={label}
                    description={description}
                    checked={data.notifications[key]}
                    onChange={(value) => {
                        if (key === "dailyReminder" && value) {
                            askStudyReminderPermission().catch(() => undefined);
                        }
                        mutate({ notifications: { [key]: value } });
                    }}
                />
            ))}
        </SettingsGroup>
    );
}
