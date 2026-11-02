"use client";

import { useTheme } from "next-themes";
import { SegmentedControl } from "@/components/ui/buttons/SegmentedControl";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";

const THEME_OPTIONS = [
    { value: "light", label: "Claro" },
    { value: "dark", label: "Escuro" },
    { value: "system", label: "Sistema" },
];

export function AppearanceSection() {
    const { theme, setTheme } = useTheme();

    return (
        <SettingsGroup title="Aparência">
            <div className="p-4">
                <SegmentedControl
                    label="Tema"
                    options={THEME_OPTIONS}
                    value={theme ?? "system"}
                    onChange={setTheme}
                />
            </div>
        </SettingsGroup>
    );
}
