import { LogoutButton } from "@/components/profile/components/LogoutButton";
import { MOCK_PROFILE } from "@/components/profile/data/mock-data";
import { ProfileHeader } from "@/components/profile/sections/ProfileHeader";
import { ProfileLevelCard } from "@/components/profile/sections/ProfileLevelCard";
import { ProfileMenu } from "@/components/profile/sections/ProfileMenu";
import { ProfileStats } from "@/components/profile/sections/ProfileStats";
import { BottomNav } from "@/components/ui/navigation/BottomNav";

export function ProfileMain() {
    return (
        <>
            <main
                className={
                    "mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-28"
                }
            >
                <ProfileHeader user={MOCK_PROFILE} />
                <ProfileStats user={MOCK_PROFILE} />
                <ProfileLevelCard user={MOCK_PROFILE} />
                <ProfileMenu />
                <LogoutButton />
            </main>
            <BottomNav />
        </>
    );
}
