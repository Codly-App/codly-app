"use client";

import clsx from "clsx";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { auth } from "@/lib/firebase";

interface LogoutButtonProps {
    readonly variant?: "card" | "nav";
    readonly className?:string;
}

export function LogoutButton({ variant = "card", className }: LogoutButtonProps) {
    const router = useRouter();
    const isNav = variant === "nav";

    async function handleLogout() {
        await signOut(auth);
        router.replace("/login");
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className={clsx(
                "flex w-full items-center transition",
                isNav
                    ? "gap-3 rounded-xl px-3 py-3 font-medium text-danger hover:bg-surface sm:cursor-pointer"
                    : "justify-center gap-2 rounded-2xl bg-surface p-4 font-semibold text-title active:scale-95",className,
            )}
        >
            <FiLogOut aria-hidden className={clsx(isNav && "text-xl")} />
            {isNav ? "Sair" : "Sair da conta"}
        </button>
    );
}