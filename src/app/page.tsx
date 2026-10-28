import { HomeMain } from "@/components/home/HomeMain";
import AuthGuard from "@/components/auth/AuthGuard";

export default function Home() {
    return (
        <AuthGuard>
            <HomeMain />
        </AuthGuard>
    );
}
