"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    type User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { auth, db } from "@/lib/firebase";

type AuthMode = "login" | "register";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

function getErrorMessage(error: unknown) {
    if (!(error instanceof FirebaseError)) return "Ocorreu um erro inesperado. Tente novamente.";

    switch (error.code) {
        case "auth/email-already-in-use":
            return "Este e-mail já está cadastrado. Entre na sua conta.";
        case "auth/invalid-email":
            return "Informe um endereço de e-mail válido.";
        case "auth/weak-password":
            return "Escolha uma senha mais forte.";
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
            return "E-mail ou senha inválidos.";
        case "auth/too-many-requests":
            return "Muitas tentativas. Tente novamente mais tarde.";
        case "auth/network-request-failed":
            return "Verifique sua conexão com a internet.";
        case "auth/popup-blocked":
            return "Permita pop-ups no navegador para continuar com Google.";
        case "auth/unauthorized-domain":
            return "Este domínio não está autorizado no Firebase Authentication.";
        case "auth/account-exists-with-different-credential":
            return "Este e-mail já utiliza outro método de login. Entre com o método original.";
        case "permission-denied":
        case "firestore/permission-denied":
            return "Não foi possível acessar seu perfil. Verifique as regras do Firestore.";
        default:
            return "Não foi possível concluir a operação. Tente novamente.";
    }
}

async function ensureUserProfile(user: User, phone = "") {
    const userRef = doc(db, "users", user.uid);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) return;

    await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName ?? "",
        email: user.email ?? "",
        phone,
        photoURL: user.photoURL ?? "",
        xp: 0,
        streak: 0,
        createdAt: serverTimestamp(),
    });
}

export default function LoginPage() {
    const router = useRouter();

    const [mode, setMode] = useState<AuthMode>("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [notice, setNotice] = useState("");

    function changeMode(nextMode: AuthMode) {
        setMode(nextMode);
        setError("");
        setNotice("");
        setPassword("");
        setConfirmPassword("");
    }

    async function handleGoogleLogin() {
        if (loading) return;

        setLoading(true);
        setError("");
        setNotice("");

        try {
            const result = await signInWithPopup(auth, googleProvider);
            await ensureUserProfile(result.user);
            router.replace("/");
        } catch (err) {
            if (err instanceof FirebaseError && ["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(err.code)) return;
            console.error("Erro no login Google:", err);
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }

    async function handleEmailAuth(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (loading) return;

        setError("");
        setNotice("");

        const cleanEmail = email.trim().toLowerCase();
        const cleanName = name.trim();
        const cleanPhone = phone.replace(/\D/g, "");

        if (mode === "register") {
            if (cleanName.length < 3) return setError("Informe seu nome completo.");
            if (cleanPhone.length < 10 || cleanPhone.length > 13) return setError("Informe um telefone válido com DDD.");
            if (password.length < 8) return setError("A senha deve ter pelo menos 8 caracteres.");
            if (password !== confirmPassword) return setError("As senhas não coincidem.");
        }

        setLoading(true);

        try {
            if (mode === "register") {
                const credential = await createUserWithEmailAndPassword(auth, cleanEmail, password);

                await updateProfile(credential.user, { displayName: cleanName });
                await ensureUserProfile(credential.user, cleanPhone);

                try {
                    await sendEmailVerification(credential.user);
                } catch (verificationError) {
                    console.warn("Não foi possível enviar a verificação:", verificationError);
                }

                router.replace("/");
            } else {
                const credential = await signInWithEmailAndPassword(auth, cleanEmail, password);
                await ensureUserProfile(credential.user);
                router.replace("/");
            }
        } catch (err) {
            console.error("Erro na autenticação:", err);
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }

    async function handlePasswordReset() {
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanEmail) {
            setError("Informe seu e-mail para recuperar a senha.");
            return;
        }

        setError("");
        setNotice("");

        try {
            await sendPasswordResetEmail(auth, cleanEmail);
            setNotice("Se este e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.");
        } catch (err) {
            setError(getErrorMessage(err));
        }
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6">
            <div className="pointer-events-none absolute -top-40 left-1/2 size-100 -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

            <div className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-[0_25px_70px_rgba(91,33,182,0.08)] sm:p-8">
                <div className="mb-7 text-center">
                    <div className="mx-auto mb-5 flex size-13 items-center justify-center rounded-2xl bg-primary text-2xl font-extrabold text-white shadow-[0_8px_25px_rgba(124,58,237,0.2)]">
                        C
                    </div>

                    <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
                        {mode === "login" ? "Bem-vindo à Codly" : "Crie sua conta na Codly"}
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-muted">
                        {mode === "login" ? "Entre na sua conta e continue evoluindo." : "Comece sua jornada na programação gratuitamente."}
                    </p>
                </div>

                <button type="button" onClick={handleGoogleLogin} disabled={loading} className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-lavender disabled:cursor-not-allowed disabled:opacity-60">
                    <svg viewBox="0 0 48 48" className="size-5 shrink-0" aria-hidden="true">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.88 46.98 24.55z" />
                        <path fill="#FBBC05" d="M10.53 28.59A14.41 14.41 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.2A23.98 23.98 0 0 0 0 24c0 3.87.93 7.51 2.56 10.78l7.97-6.19z" />
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    </svg>
                    Continuar com Google
                </button>

                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-primary">
                  {/*   <FiCheck size={14} /> */}
                    Recomendado: mais rápido e prático.
                </p>

                <div className="my-6 flex items-center gap-3">
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted">ou continue com e-mail</span>
                    <span className="h-px flex-1 bg-border" />
                </div>

                <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-surface-alt p-1">
                    <button type="button" onClick={() => changeMode("login")} className={`h-10 cursor-pointer rounded-lg text-sm font-semibold transition-all ${mode === "login" ? "bg-surface text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}>
                        Entrar
                    </button>

                    <button type="button" onClick={() => changeMode("register")} className={`h-10 cursor-pointer rounded-lg text-sm font-semibold transition-all ${mode === "register" ? "bg-surface text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}>
                        Criar conta
                    </button>
                </div>

                <form onSubmit={handleEmailAuth} className="space-y-4">
                    {mode === "register" && (
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-foreground">Nome completo</label>
                            <div className="relative">
                                <FiUser size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                                <input id="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" required minLength={3} className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary" />
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground">E-mail</label>
                        <div className="relative">
                            <FiMail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                            <input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seuemail@exemplo.com" required className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary" />
                        </div>
                    </div>

                    {mode === "register" && (
                        <div>
                            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-foreground">Telefone com DDD</label>
                            <div className="relative">
                                <FiPhone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                                <input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(85) 99999-9999" required className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary" />
                            </div>
                            <p className="mt-1 text-[11px] text-muted">Usaremos este número como informação de contato. Não enviaremos SMS nesta etapa.</p>
                        </div>
                    )}

                    <div>
                        <label htmlFor="password" className="mb-1.5 block text-xs font-semibold text-foreground">Senha</label>
                        <div className="relative">
                            <FiLock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                            <input id="password" type={showPassword ? "text" : "password"} autoComplete={mode === "register" ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={mode === "register" ? "Mínimo de 8 caracteres" : "Digite sua senha"} required minLength={mode === "register" ? 8 : undefined} className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted hover:text-foreground">
                                {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                            </button>
                        </div>
                    </div>

                    {mode === "register" && (
                        <div>
                            <label htmlFor="confirmPassword" className="mb-1.5 block text-xs font-semibold text-foreground">Confirmar senha</label>
                            <div className="relative">
                                <FiLock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                                <input id="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repita sua senha" required className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary" />
                            </div>
                        </div>
                    )}

                    {mode === "login" && (
                        <button type="button" onClick={handlePasswordReset} className="cursor-pointer text-xs font-medium text-primary hover:underline">
                            Esqueceu sua senha?
                        </button>
                    )}

                    {error && <p role="alert" className="rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2 text-xs leading-5 text-red-500">{error}</p>}
                    {notice && <p  className="rounded-lg border border-primary/20 bg-lavender px-3 py-2 text-xs leading-5 text-primary">{notice}</p>}

                    <button type="submit" disabled={loading} className="group flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60">
                        {loading ? "Aguarde..." : mode === "login" ? "Entrar na minha conta" : "Criar minha conta"}
                        {!loading && <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                </form>

                <p className="mt-6 text-center text-xs leading-5 text-muted">
                    Ao continuar, você concorda com os termos de uso e a política de privacidade da Codly.
                </p>
            </div>
        </main>
    );
}
