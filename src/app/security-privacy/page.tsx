import AuthGuard from "@/components/auth/AuthGuard";
import { SecurityPrivacyMain } from "@/components/security-privacy/SecurityPrivacyMain";

export default function SecurityPrivacyPage() {
    return (
        <AuthGuard>
            <SecurityPrivacyMain />
        </AuthGuard>
    );
}
