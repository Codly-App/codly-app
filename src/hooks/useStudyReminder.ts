import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import { syncStudyReminder } from "@/lib/study-reminder";

export function useStudyReminder() {
    const { data, dataUpdatedAt } = useSettings();
    const enabled = data.notifications.dailyReminder;
    const loaded = dataUpdatedAt > 0;

    useEffect(() => {
        if (!loaded) return;

        syncStudyReminder(enabled).catch(() => undefined);
    }, [enabled, loaded]);
}