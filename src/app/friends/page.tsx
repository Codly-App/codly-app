import AuthGuard from "@/components/auth/AuthGuard";
import { FriendsMain } from "@/components/friends/FriendsMain";

export default function FriendsPage() {
    return (
        <AuthGuard>
            <FriendsMain />
        </AuthGuard>
    );
}