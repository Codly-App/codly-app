"use client";

import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FiBell, FiStar, FiUser, FiZap } from "react-icons/fi";
import { StreakFlame } from "@/components/home/components/StreakFlame";
import type { HomeUser } from "@/components/home/types";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";
import { StatPill } from "@/components/ui/display/StatPill";
import { auth, db } from "@/lib/firebase";

interface HomeHeaderProps {
    user: HomeUser;
}

type Profile = {
    name: string;
    photoURL: string | null;
};

const FLAME_MIN_STREAK = 3;

export function HomeHeader({ user }: HomeHeaderProps) {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribeProfile: (() => void) | undefined;

        const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
            unsubscribeProfile?.();
            unsubscribeProfile = undefined;

            if (!firebaseUser) {
                setProfile(null);
                setLoading(false);
                return;
            }

            const fallbackName =
                firebaseUser.displayName ||
                firebaseUser.email?.split("@")[0] ||
                "Estudante";

            setProfile({ name: fallbackName, photoURL: firebaseUser.photoURL });

            setLoading(false);

            const userRef = doc(db, "users", firebaseUser.uid);

            unsubscribeProfile = onSnapshot(
                userRef,
                (snapshot) => {
                    if (!snapshot.exists()) return;

                    const data = snapshot.data();

                    setProfile({
                        name:
                            typeof data.name === "string" && data.name.trim()
                                ? data.name
                                : fallbackName,
                        photoURL:
                            typeof data.photoURL === "string" && data.photoURL
                                ? data.photoURL
                                : firebaseUser.photoURL,
                    });
                },
                (error) => {
                    console.error("Erro ao carregar perfil:", error);
                },
            );
        });

        return () => {
            unsubscribeAuth();
            unsubscribeProfile?.();
        };
    }, []);

    const displayName = profile?.name || "Estudante";
    const firstName = displayName.trim().split(/\s+/)[0];
    const photoURL = profile?.photoURL;

    const onFire = user.streak > FLAME_MIN_STREAK;

    return (
        <header className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 shadow-[0_4px_18px_rgba(124,58,237,0.10)] sm:size-14">
                        {photoURL ? (
                            <img
                                src={photoURL}
                                alt={`Foto de perfil de ${displayName}`}
                                referrerPolicy="no-referrer"
                                className="size-full rounded-full object-cover"
                            />
                        ) : (
                            <FiUser size={23} className="text-primary" />
                        )}
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-foreground/65 sm:text-sm">
                            Bem-vindo de volta,
                        </p>

                        <h1 className="truncate text-xl font-bold tracking-tight text-title sm:text-2xl">
                            {loading ? "Carregando..." : firstName}
                        </h1>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <IconButton icon={<FiBell />} label="Notificações" />
                    <ThemeToggle />
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <StatPill
                    icon={
                        onFire ? (
                            <StreakFlame />
                        ) : (
                            <FiZap className="text-primary" />
                        )
                    }
                    value={`${user.streak} dias`}
                    label="Sequência diária"
                />

                <StatPill
                    icon={<FiStar className="text-primary" />}
                    value={`${user.xp} XP`}
                    label="Experiência"
                />

                <StatPill
                    icon={<FiStar className="text-primary" />}
                    value={`Nível ${user.level}`}
                    label="Nível atual"
                />
            </div>
        </header>
    );
}
