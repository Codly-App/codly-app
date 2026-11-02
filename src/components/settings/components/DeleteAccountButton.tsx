"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { api } from "@/lib/api";
import { auth } from "@/lib/firebase";

export function DeleteAccountButton() {
    const router = useRouter();
    const [confirming, setConfirming] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [failed, setFailed] = useState(false);

    async function handleDelete() {
        setDeleting(true);
        setFailed(false);
        try {
            await api.delete("/me");
            await signOut(auth);
            router.replace("/login");
        } catch {
            setFailed(true);
            setDeleting(false);
        }
    }

    if (!confirming) {
        return (
            <button
                type="button"
                onClick={() => setConfirming(true)}
                className="flex items-center gap-3 p-4 font-medium text-danger"
            >
                <FiTrash2 aria-hidden className="text-xl" />
                Excluir minha conta
            </button>
        );
    }

    return (
        <div className="flex flex-col gap-3 p-4">
            <p className="text-sm text-foreground/70">
                Tem certeza? Seu progresso, XP e amigos serão apagados e isso
                não pode ser desfeito.
            </p>
            {failed && (
                <p role="alert" className="text-sm text-danger">
                    Não foi possível excluir. Tente novamente.
                </p>
            )}
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => setConfirming(false)}
                    disabled={deleting}
                    className="flex-1 rounded-xl bg-background py-3 font-medium text-title"
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="flex-1 rounded-xl bg-danger py-3 font-medium text-on-primary disabled:opacity-60"
                >
                    {deleting ? "Excluindo..." : "Sim, excluir"}
                </button>
            </div>
        </div>
    );
}
