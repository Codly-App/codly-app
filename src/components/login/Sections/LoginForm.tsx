"use client";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile, } from "firebase/auth";
import { useRouter } from "next/navigation";
import { type SubmitEvent, useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser, } from "react-icons/fi";
import { LoginHeader } from "./LoginHeader";
import { auth } from "@/lib/firebase";
type AuthMode = "login" | "register";
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
function getErrorMessage(error: unknown): string {
    if (!(error instanceof FirebaseError)) {
        return "Ocorreu um erro inesperado. Tente novamente.";
    }
    const messages: Record<string, string> = {
        "auth/email-already-in-use": "Este e-mail já está cadastrado.",
        "auth/invalid-email": "Informe um e-mail válido.",
        "auth/weak-password": "Escolha uma senha mais forte.",
        "auth/invalid-credential": "E-mail ou senha inválidos.",
        "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
        "auth/network-request-failed": "Verifique sua conexão com a internet.",
        "auth/popup-blocked": "Permita pop-ups para continuar com Google.",
        "auth/unauthorized-domain": "Domínio não autorizado no Firebase.",
        "auth/account-exists-with-different-credential": "Utilize o método de login original.",
    };
    return messages[error.code] ?? "Não foi possível concluir a operação.";
}
const inputClass =
    "h-11 w-full rounded-xl bg-background pl-10 pr-11 text-base text-foreground outline-none ring-1 ring-primary/10 transition-colors placeholder:text-foreground/50 focus:ring-primary/50";
export function LoginForm() {
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
    const isRegister = mode === "register";
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
            await signInWithPopup(auth, googleProvider);
            router.replace("/");
        } catch (err) {
            if (
                err instanceof FirebaseError &&
                ["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(err.code)
            ) return;
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }
    async function handleEmailAuth(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        if (loading) return;
        setError("");
        setNotice("");
        const cleanEmail = email.trim().toLowerCase();
        const cleanName = name.trim();
        const cleanPhone = phone.replace(/\D/g, "");
        if (isRegister) {
            if (cleanName.length < 3) {
                setError("Informe seu nome completo.");
                return;
            }
            if (cleanPhone.length < 10 || cleanPhone.length > 13) {
                setError("Informe um telefone válido com DDD.");
                return;
            }
            if (password.length < 8) {
                setError("A senha deve ter pelo menos 8 caracteres.");
                return;
            }
            if (password !== confirmPassword) {
                setError("As senhas não coincidem.");
                return;
            }
        }
        setLoading(true);
        try {
            if (isRegister) {
                const credential = await createUserWithEmailAndPassword(auth, cleanEmail, password,);
                await updateProfile(credential.user, {
                    displayName: cleanName,
                });
                try {
                    await sendEmailVerification(credential.user);
                } catch {
                    console.warn("Não foi possível enviar o e-mail de verificação.");
                }
                // A API deve registrar o perfil e o telefone.
                // Integrar ao endpoint de cadastro do codly-api.
            } else {
                await signInWithEmailAndPassword(auth, cleanEmail, password,);
            }
            router.replace("/");
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }
    async function handlePasswordReset() {
        if (loading) return;
        const cleanEmail = email.trim().toLowerCase();
        if (!cleanEmail) {
            setError("Informe seu e-mail para recuperar a senha.");
            return;
        }
        setError("");
        setNotice("");
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, cleanEmail);
            setNotice("Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha.");
        } catch (err) {
            setError(getErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }
    let buttonText = "Entrar na minha conta";
    if (loading) {
        buttonText = "Aguarde...";
    } else if (isRegister) {
        buttonText = "Criar minha conta";
    }
    return (
        <>
            <LoginHeader mode={mode} />
            <button type="button" onClick={handleGoogleLogin} disabled={loading}
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-background text-sm font-semibold text-foreground ring-1 ring-primary/10 transition-colors hover:bg-selection disabled:cursor-not-allowed disabled:opacity-60">
                <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.88 46.98 24.55z" />
                    <path fill="#FBBC05" d="M10.53 28.59A14.41 14.41 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.2A23.98 23.98 0 0 0 0 24c0 3.87.93 7.51 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                Continuar com Google
            </button>
            <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-primary/10" />
                <span className="text-xs text-foreground/70">ou continue com e-mail</span>
                <span className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-background p-1">
                {(["login", "register"] as const).map((item) => (
                    <button key={item} type="button" onClick={() => changeMode(item)} aria-pressed={mode === item}
                        className={`h-10 cursor-pointer rounded-lg text-sm font-semibold transition-colors ${mode === item
                            ? "bg-surface text-primary shadow-sm"
                            : "text-foreground/70 hover:text-foreground"
                            }`}>
                        {item === "login" ? "Entrar" : "Criar conta"}
                    </button>
                ))}
            </div>
            <form onSubmit={handleEmailAuth} className="space-y-4">
                {isRegister && (
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold">
                            Nome completo
                        </label>
                        <div className="relative">
                            <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60" />
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome completo"
                                minLength={3}
                                required
                                className={inputClass}
                            />
                        </div>
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold">E-mail</label>
                    <div className="relative">
                        <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60" />
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seuemail@exemplo.com"
                            required
                            className={inputClass}
                        />
                    </div>
                </div>
                {isRegister && (
                    <div>
                        <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold">
                            Telefone com DDD
                        </label>
                        <div className="relative">
                            <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60" />
                            <input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="(85) 99999-9999"
                                required
                                className={inputClass}
                            />
                        </div>
                        <p className="mt-1 text-xs text-foreground/70">
                            Usaremos este número como contato.
                        </p>
                    </div>
                )}
                <div>
                    <label htmlFor="password" className="mb-1.5 block text-xs font-semibold">
                        Senha
                    </label>
                    <div className="relative">
                        <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60" />
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete={isRegister ? "new-password" : "current-password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={isRegister ? "Mínimo de 8 caracteres" : "Digite sua senha"}
                            minLength={isRegister ? 8 : undefined}
                            required
                            className={inputClass}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-foreground/70 hover:text-primary"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>
                {isRegister && (
                    <div>
                        <label htmlFor="confirmPassword" className="mb-1.5 block text-xs font-semibold">
                            Confirmar senha
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60" />
                            <input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Repita sua senha"
                                required
                                className={inputClass}
                            />
                        </div>
                    </div>
                )}
                {!isRegister && (
                    <div className="text-right">
                        <button type="button" onClick={handlePasswordReset} disabled={loading}
                            className="cursor-pointer text-xs font-medium text-primary hover:underline disabled:opacity-60">
                            Esqueceu sua senha?
                        </button>
                    </div>
                )}
                {error && (
                    <p role="alert" className="rounded-xl bg-danger/10 p-3 text-xs text-danger">
                        {error}
                    </p>
                )}
                {notice && (
                    <output className="block rounded-xl bg-selection p-3 text-xs text-foreground">
                        {notice}
                    </output>
                )}
                <button type="submit" disabled={loading}
                    className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-on-primary transition-colors hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-60">
                    {buttonText}
                    {!loading && <FiArrowRight size={16} />}
                </button>
            </form>
            <p className="mx-auto mt-7 max-w-xs text-center text-xs leading-5 text-foreground/70">
                Ao continuar, você concorda com os termos de uso e a política de privacidade da Codly.
            </p>
        </>
    );
}
