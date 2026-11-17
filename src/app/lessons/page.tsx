import { Suspense } from "react";
import AuthGuard from "@/components/auth/AuthGuard";
import { LessonsMain } from "@/components/lessons/LessonsMain";

export default function LessonsPage() {
    return (
        <AuthGuard>
            <Suspense>
                <LessonsMain />
            </Suspense>
        </AuthGuard>
    );
}
