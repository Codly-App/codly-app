import AuthGuard from "@/components/auth/AuthGuard";
import { ProfileMain } from "@/components/profile/ProfileMain";

export default function ProfilePage() {
    return (
        <AuthGuard>
            <ProfileMain />
        </AuthGuard>
    );
}
