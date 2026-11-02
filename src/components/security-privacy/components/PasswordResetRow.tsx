"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { FiKey } from "react-icons/fi";
import { auth } from "@/lib/firebase";

type Status = "idle" | "sending" | "sent" | "error";

const MESSAGES: Record<Status, string> = {
    idle: "Enviaremos um link para o seu e-mail.",
    sending: "Enviando...",
    sent: "Link enviado. Confira sua caixa de entrada.",
    error: "Não foi possível enviar. Tente novamente.",
};

export function PasswordResetRow() {
    const [status, setStatus] = useState<Status>("idle");
    const user = auth.currentUser;
    const email = user?.email;
    const usesPassword = user?.providerData.some(
        (p) => p.providerId === "password",
    );

    if (!email || !usesPassword) {
        return (
            <p className="p-4 text-sm text-foreground/70">
                Você entra com o Google. A senha é gerenciada pela sua conta
                Google.
            </p>
        );
    }

    const handleReset = async () => {
        setStatus("sending");
        try {
            await sendPasswordResetEmail(auth, email);
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    return (
        <button
            type="button"
            onClick={handleReset}
            disabled={status === "sending"}
            className="flex items-center gap-3 p-4 text-left transition active:scale-95 disabled:opacity-60"
        >
            <FiKey aria-hidden className="text-xl text-primary" />
            <span className="flex flex-col">
                <span className="font-medium text-title">Redefinir senha</span>
                <span className="text-sm text-foreground/70">
                    {MESSAGES[status]}
                </span>
            </span>
        </button>
    );
}
