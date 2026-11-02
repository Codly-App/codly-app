"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { auth } from "@/lib/firebase";

export function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await signOut(auth);
        router.replace("/login");
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-surface p-4 font-semibold text-title transition active:scale-95"
        >
            <FiLogOut aria-hidden />
            Sair da conta
        </button>
    );
}
