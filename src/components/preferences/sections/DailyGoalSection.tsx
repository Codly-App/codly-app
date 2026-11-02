"use client";

import { GOAL_OPTIONS } from "@/components/preferences/data/goal-options";
import { SegmentedControl } from "@/components/ui/buttons/SegmentedControl";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";
import { useSettings } from "@/hooks/useSettings";
import { useUpdateSettings } from "@/hooks/useUpdateSettings";

export function DailyGoalSection() {
    const { data } = useSettings();
    const { mutate } = useUpdateSettings();

    return (
        <SettingsGroup title="Meta diária">
            <div className="flex flex-col gap-3 p-4">
                <p className="text-sm text-foreground/70">
                    Quantos XP você quer ganhar por dia? É a meta da barra da
                    tela inicial.
                </p>
                <SegmentedControl
                    label="Meta diária de XP"
                    options={GOAL_OPTIONS}
                    value={data.preferences.dailyGoalXp}
                    onChange={(dailyGoalXp) =>
                        mutate({ preferences: { dailyGoalXp } })
                    }
                />
            </div>
        </SettingsGroup>
    );
}
