import { Suspense } from "react";
import AuthGuard from "@/components/auth/AuthGuard";
import { TrailMain } from "@/components/trail/TrailMain";

export default function TrailPage() {
    return (
        <AuthGuard>
            <Suspense>
                <TrailMain />
            </Suspense>
        </AuthGuard>
    );
}