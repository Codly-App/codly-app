import AuthGuard from "@/components/auth/AuthGuard";
import { PreferencesMain } from "@/components/preferences/PreferencesMain";

export default function PreferencesPage() {
    return (
        <AuthGuard>
            <PreferencesMain />
        </AuthGuard>
    );
}
