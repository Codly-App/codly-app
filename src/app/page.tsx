import AuthGuard from "@/components/auth/AuthGuard";
import { HomeMain } from "@/components/home/HomeMain";

export default function Home() {
    return (
        <AuthGuard>
            <HomeMain />
        </AuthGuard>
    );
}
