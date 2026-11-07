import type { ReactNode } from "react";
import { BottomNav } from "@/components/ui/navigation/BottomNav";
import { SideNav } from "@/components/ui/navigation/SideNav";

interface AppShellProps {
    children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="md:flex">
            <SideNav />
            <main className="mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-28 md:max-w-3xl md:px-8 md:pt-10 md:pb-10">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
