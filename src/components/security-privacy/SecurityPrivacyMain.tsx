import { PrivacySection } from "@/components/security-privacy/sections/PrivacySection";
import { SecuritySection } from "@/components/security-privacy/sections/SecuritySection";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";

export function SecurityPrivacyMain() {
    return (
        <SubPageLayout title="Segurança e privacidade">
            <PrivacySection />
            <SecuritySection />
        </SubPageLayout>
    );
}
