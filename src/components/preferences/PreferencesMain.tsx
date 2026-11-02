import { AppearanceSection } from "@/components/preferences/sections/AppearanceSection";
import { DailyGoalSection } from "@/components/preferences/sections/DailyGoalSection";
import { ExperienceSection } from "@/components/preferences/sections/ExperienceSection";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";

export function PreferencesMain() {
    return (
        <SubPageLayout title="Preferências">
            <AppearanceSection />
            <DailyGoalSection />
            <ExperienceSection />
        </SubPageLayout>
    );
}
