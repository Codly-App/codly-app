"use client";

import { LogoutButton } from "@/components/profile/components/LogoutButton";
import { MOCK_PROFILE } from "@/components/profile/data/mock-data";
import { ProfileHeader } from "@/components/profile/sections/ProfileHeader";
import { ProfileLevelCard } from "@/components/profile/sections/ProfileLevelCard";
import { ProfileMenu } from "@/components/profile/sections/ProfileMenu";
import { ProfileStats } from "@/components/profile/sections/ProfileStats";
import type { ProfileUser } from "@/components/profile/types";
import { BottomNav } from "@/components/ui/navigation/BottomNav";
import { getAuthUserInfo } from "@/lib/auth-user";

export function ProfileMain() {
    const user: ProfileUser = { ...MOCK_PROFILE, ...getAuthUserInfo() };

    return (
        <>
            <main
                className={
                    "mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-28"
                }
            >
                <ProfileHeader user={user} />
                <ProfileStats user={user} />
                <ProfileLevelCard user={user} />
                <ProfileMenu />
                <LogoutButton />
            </main>
            <BottomNav />
        </>
    );
}
