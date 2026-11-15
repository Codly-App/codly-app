import AuthGuard from "@/components/auth/AuthGuard";
import { RankMain } from "@/components/rank/RankMain";

export default function RankingPage() {
    return (
        <AuthGuard>
            <RankMain />
        </AuthGuard>
    );
}