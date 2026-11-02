"use client";

import { PRIVACY_OPTIONS } from "@/components/security-privacy/data/privacy-options";
import { SettingToggle } from "@/components/ui/buttons/SettingToggle";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";
import { useSettings } from "@/hooks/useSettings";
import { useUpdateSettings } from "@/hooks/useUpdateSettings";

export function PrivacySection() {
    const { data } = useSettings();
    const { mutate } = useUpdateSettings();

    return (
        <SettingsGroup title="Privacidade">
            {PRIVACY_OPTIONS.map(({ key, label, description }) => (
                <SettingToggle
                    key={key}
                    label={label}
                    description={description}
                    checked={data.privacy[key]}
                    onChange={(value) => mutate({ privacy: { [key]: value } })}
                />
            ))}
        </SettingsGroup>
    );
}
