import { ProfileName } from "@/components/profile/components/ProfileName";
import type { ProfileUser } from "@/components/profile/types";
import { Avatar } from "@/components/ui/display/Avatar";
import { ThemeToggle } from "@/components/ui/buttons/ThemeToggle";

interface ProfileHeaderProps {
    user: ProfileUser;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <header className="flex flex-col items-center gap-3 text-center">
            <div className="flex w-full justify-end">
                <ThemeToggle />
            </div>
            <Avatar name={user.name} src={user.picture} size="lg" />
            <div className="w-full">
                <ProfileName name={user.name} />
                <p className="text-sm text-foreground/70">{user.email}</p>
            </div>
            <span className="rounded-full bg-selection px-3 py-1 text-xs font-semibold text-primary-strong dark:text-title">
                Plano {user.plan}
            </span>
        </header>
    );
}
