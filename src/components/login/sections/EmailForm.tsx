"use client";

import { useState } from "react";
import {
    FiEye,
    FiEyeOff,
    FiLock,
    FiMail,
    FiPhone,
    FiUser,
} from "react-icons/fi";
import { FormMessages } from "@/components/login/components/FormMessages";
import { SubmitButton } from "@/components/login/components/SubmitButton";
import { TextField } from "@/components/login/components/TextField";
import type { AuthMode, EmailAuthValues } from "@/components/login/types";

interface EmailFormProps {
    readonly mode: AuthMode;
    readonly values: EmailAuthValues;
    readonly loading: boolean;
    readonly error: string;
    readonly notice: string;
    readonly onChange: (field: keyof EmailAuthValues, value: string) => void;
    readonly onSubmit: () => void;
    readonly onResetPassword: () => void;
}

export function EmailForm({
    mode,
    values,
    loading,
    error,
    notice,
    onChange,
    onSubmit,
    onResetPassword,
}: EmailFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isRegister = mode === "register";
    const passwordType = showPassword ? "text" : "password";

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
            className="space-y-4"
        >
            {isRegister && (
                <TextField
                    id="name"
                    label="Nome completo"
                    icon={<FiUser />}
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    minLength={3}
                    value={values.name}
                    onChange={(value) => onChange("name", value)}
                />
            )}
            <TextField
                id="email"
                type="email"
                label="E-mail"
                icon={<FiMail />}
                autoComplete="email"
                placeholder="seuemail@exemplo.com"
                value={values.email}
                onChange={(value) => onChange("email", value)}
            />
            {isRegister && (
                <TextField
                    id="phone"
                    type="tel"
                    label="Telefone com DDD"
                    icon={<FiPhone />}
                    autoComplete="tel"
                    placeholder="(85) 99999-9999"
                    hint="Usaremos este número como contato."
                    value={values.phone}
                    onChange={(value) => onChange("phone", value)}
                />
            )}
            <TextField
                id="password"
                type={passwordType}
                label="Senha"
                icon={<FiLock />}
                autoComplete={isRegister ? "new-password" : "current-password"}
                placeholder={
                    isRegister ? "Mínimo de 8 caracteres" : "Digite sua senha"
                }
                minLength={isRegister ? 8 : undefined}
                value={values.password}
                onChange={(value) => onChange("password", value)}
                trailing={
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                            showPassword ? "Ocultar senha" : "Mostrar senha"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-foreground/70 hover:text-primary"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                }
            />
            {isRegister && (
                <TextField
                    id="confirmPassword"
                    type={passwordType}
                    label="Confirmar senha"
                    icon={<FiLock />}
                    autoComplete="new-password"
                    placeholder="Repita sua senha"
                    value={values.confirmPassword}
                    onChange={(value) => onChange("confirmPassword", value)}
                />
            )}
            {!isRegister && (
                <div className="text-right">
                    <button
                        type="button"
                        onClick={onResetPassword}
                        disabled={loading}
                        className="cursor-pointer text-xs font-medium text-primary hover:underline disabled:opacity-60"
                    >
                        Esqueceu sua senha?
                    </button>
                </div>
            )}
            <FormMessages error={error} notice={notice} />
            <SubmitButton loading={loading} isRegister={isRegister} />
        </form>
    );
}
