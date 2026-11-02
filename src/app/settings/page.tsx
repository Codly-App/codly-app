import AuthGuard from "@/components/auth/AuthGuard";
import { SettingsMain } from "@/components/settings/SettingsMain";

export default function SettingsPage() {
    return (
        <AuthGuard>
            <SettingsMain />
        </AuthGuard>
    );
}
