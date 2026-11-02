import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SETTINGS_KEY } from "@/hooks/useSettings";
import { api } from "@/lib/api";
import type { SettingsPatch, UserSettings } from "@/types/settings";

function applyPatch(
    settings: UserSettings,
    patch: SettingsPatch,
): UserSettings {
    return {
        privacy: { ...settings.privacy, ...patch.privacy },
        preferences: { ...settings.preferences, ...patch.preferences },
        notifications: { ...settings.notifications, ...patch.notifications },
    };
}

export function useUpdateSettings() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (patch: SettingsPatch) => {
            await api.patch("/me/settings", patch);
        },
        onMutate: async (patch) => {
            await queryClient.cancelQueries({ queryKey: SETTINGS_KEY });
            const previous =
                queryClient.getQueryData<UserSettings>(SETTINGS_KEY);
            if (previous) {
                queryClient.setQueryData(
                    SETTINGS_KEY,
                    applyPatch(previous, patch),
                );
            }
            return { previous };
        },
        onError: (_error, _patch, context) => {
            if (context?.previous) {
                queryClient.setQueryData(SETTINGS_KEY, context.previous);
            }
        },
        onSettled: () =>
            queryClient.invalidateQueries({ queryKey: SETTINGS_KEY }),
    });
}
