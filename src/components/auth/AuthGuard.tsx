"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

type AuthGuardProps = {
    children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
    const router = useRouter();
    const reduceMotion = useReducedMotion();

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
            <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-6">
                {/* Iluminação suave de fundo */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] sm:size-96" />

                {/* Conteúdo central */}
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center gap-6"
                >
                    {/* Logo com sombra suave */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute size-20 rounded-full bg-primary/20 blur-2xl" />

                        <motion.div
                            animate={
                                reduceMotion
                                    ? undefined
                                    : { scale: [1, 1.05, 1] }
                            }
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative flex size-16 items-center justify-center rounded-2xl bg-primary text-3xl font-extrabold text-on-primary shadow-lg shadow-primary/20"
                        >
                            C
                        </motion.div>
                    </div>

                    {/* Indicador minimalista */}
                    <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((index) => (
                            <motion.span
                                key={index}
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                              opacity: [0.3, 1, 0.3],
                                              y: [0, -3, 0],
                                          }
                                }
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: index * 0.15,
                                    ease: "easeInOut",
                                }}
                                className="size-1.5 rounded-full bg-primary"
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-sm font-semibold text-foreground">
                            Verificando sua sessão
                        </p>

                        <p className="mt-1 text-xs text-foreground/70">
                            Preparando sua experiência na Codly...
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return <>{children}</>;
}
