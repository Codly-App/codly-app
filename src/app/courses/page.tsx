import AuthGuard from "@/components/auth/AuthGuard";
import { CoursesMain } from "@/components/courses/CoursesMain";

export default function CoursesPage() {
    return (
        <AuthGuard>
            <CoursesMain />
        </AuthGuard>
    );
}
