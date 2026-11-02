"use client";

import { EXPERIENCE_OPTIONS } from "@/components/preferences/data/experience-options";
import { SettingToggle } from "@/components/ui/buttons/SettingToggle";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";
import { useSettings } from "@/hooks/useSettings";
import { useUpdateSettings } from "@/hooks/useUpdateSettings";

export function ExperienceSection() {
    const { data } = useSettings();
    const { mutate } = useUpdateSettings();

    return (
        <SettingsGroup title="Experiência">
            {EXPERIENCE_OPTIONS.map(({ key, label, description }) => (
                <SettingToggle
                    key={key}
                    label={label}
                    description={description}
                    checked={data.preferences[key]}
                    onChange={(value) =>
                        mutate({ preferences: { [key]: value } })
                    }
                />
            ))}
        </SettingsGroup>
    );
}
