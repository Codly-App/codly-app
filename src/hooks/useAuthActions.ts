import { FirebaseError } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getErrorMessage } from "@/components/login/data/auth-errors";
import { validateRegister } from "@/components/login/schema/register-validation";
import type { AuthMode, EmailAuthValues } from "@/components/login/types";
import { auth } from "@/lib/firebase";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// O usuário fechou a janela do Google: não é erro
const SILENT_ERRORS = [
    "auth/popup-closed-by-user",
    "auth/cancelled-popup-request",
];

export function useAuthActions() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [notice, setNotice] = useState("");

    function clearMessages() {
        setError("");
        setNotice("");
    }

    async function run(action: () => Promise<void>) {
        if (loading) return;

        setLoading(true);

        try {
            await action();
        } catch (err) {
            const silent =
                err instanceof FirebaseError &&
                SILENT_ERRORS.includes(err.code);

            if (!silent) setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }

    async function googleLogin() {
        clearMessages();

        await run(async () => {
            await signInWithPopup(auth, googleProvider);
            router.replace("/");
        });
    }

    async function emailAuth(mode: AuthMode, values: EmailAuthValues) {
        clearMessages();

        if (mode === "register") {
            const message = validateRegister(values);

            if (message) {
                setError(message);
                return;
            }
        }

        const email = values.email.trim().toLowerCase();

        await run(async () => {
            if (mode === "register") {
                const credential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    values.password,
                );

                await updateProfile(credential.user, {
                    displayName: values.name.trim(),
                });

                try {
                    await sendEmailVerification(credential.user);
                } catch {
                    console.warn(
                        "Não foi possível enviar o e-mail de verificação.",
                    );
                }

                // A API deve registrar o perfil e o telefone.
                // Integrar ao endpoint de cadastro do codly-api.
            } else {
                await signInWithEmailAndPassword(auth, email, values.password);
            }

            router.replace("/");
        });
    }

    async function passwordReset(rawEmail: string) {
        const email = rawEmail.trim().toLowerCase();

        if (!email) {
            setError("Informe seu e-mail para recuperar a senha.");
            return;
        }

        clearMessages();

        await run(async () => {
            await sendPasswordResetEmail(auth, email);
            setNotice(
                "Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.",
            );
        });
    }

    return {
        loading,
        error,
        notice,
        clearMessages,
        googleLogin,
        emailAuth,
        passwordReset,
    };
}
