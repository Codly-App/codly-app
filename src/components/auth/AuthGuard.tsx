"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

type AuthGuardProps = {
    children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
    const router = useRouter();

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (!currentUser) {
                router.replace("/login");
            }
        });

        return () => unsubscribe();
    }, [router]);

    if (loading || !user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="flex flex-col items-center gap-4">
                    <div className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
                    <p className="text-sm font-medium text-muted">
                        Verificando sua sessão...
                    </p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
