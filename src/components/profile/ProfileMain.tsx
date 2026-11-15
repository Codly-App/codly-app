"use client";

import { PLAN_LABELS } from "@/components/profile/data/plan-labels";
import { ProfileHeader } from "@/components/profile/sections/ProfileHeader";
import { ProfileLevelCard } from "@/components/profile/sections/ProfileLevelCard";
import { ProfileMenu } from "@/components/profile/sections/ProfileMenu";
import { ProfileStats } from "@/components/profile/sections/ProfileStats";
import type { ProfileUser } from "@/components/profile/types";
import { LogoutButton } from "@/components/ui/buttons/LogoutButton";
import { AppShell } from "@/components/ui/navigation/AppShell";
import { useSummary } from "@/hooks/useSummary";
import { getAuthUserInfo } from "@/lib/auth-user";

export function ProfileMain() {
    const { data, isError } = useSummary();
    const identity = getAuthUserInfo();
    const plan = data ? PLAN_LABELS[data.plan] : undefined;

    const user: ProfileUser | null = data
        ? { ...identity, plan: PLAN_LABELS[data.plan], ...data.stats }
        : null;

    return (
        <AppShell>
            <ProfileHeader user={{ ...identity, plan }} />

            {user ? (
                <>
                    <ProfileStats user={user} />
                    <ProfileLevelCard user={user} />
                </>
            ) : (
                <p
                    role={isError ? "alert" : "status"}
                    className={isError ? "text-sm text-danger" : "text-sm text-foreground/70"}
                >
                    {isError
                        ? "Não foi possível carregar seu progresso."
                        : "Carregando seu progresso..."}
                </p>
            )}

            <ProfileMenu />
            <LogoutButton />
        </AppShell>
    );
}