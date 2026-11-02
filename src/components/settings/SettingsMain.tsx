import { AccountSection } from "@/components/settings/sections/AccountSection";
import { NotificationsSection } from "@/components/settings/sections/NotificationsSection";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";

export function SettingsMain() {
    return (
        <SubPageLayout title="Configurações">
            <NotificationsSection />
            <AccountSection />
        </SubPageLayout>
    );
}
