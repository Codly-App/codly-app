"use client";

import { useState } from "react";
import { AuthDivider } from "@/components/login/components/AuthDivider";
import { GoogleButton } from "@/components/login/components/GoogleButton";
import { ModeSwitch } from "@/components/login/components/ModeSwitch";
import { useAuthActions } from "@/hooks/useAuthActions";
import { EmailForm } from "@/components/login/sections/EmailForm";
import { LoginHeader } from "@/components/login/sections/LoginHeader";
import type { AuthMode, EmailAuthValues } from "@/components/login/types";

const EMPTY_VALUES: EmailAuthValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

export function LoginForm() {
    const [mode, setMode] = useState<AuthMode>("login");
    const [values, setValues] = useState(EMPTY_VALUES);
    const {
        loading,
        error,
        notice,
        clearMessages,
        googleLogin,
        emailAuth,
        passwordReset,
    } = useAuthActions();

    function changeMode(next: AuthMode) {
        setMode(next);
        clearMessages();
        setValues((current) => ({
            ...current,
            password: "",
            confirmPassword: "",
        }));
    }

    function changeField(field: keyof EmailAuthValues, value: string) {
        setValues((current) => ({ ...current, [field]: value }));
    }

    return (
        <>
            <LoginHeader mode={mode} />
            <GoogleButton onClick={googleLogin} disabled={loading} />
            <AuthDivider />
            <ModeSwitch mode={mode} onChange={changeMode} />
            <EmailForm
                mode={mode}
                values={values}
                loading={loading}
                error={error}
                notice={notice}
                onChange={changeField}
                onSubmit={() => emailAuth(mode, values)}
                onResetPassword={() => passwordReset(values.email)}
            />
            <p className="mx-auto mt-7 max-w-xs text-center text-xs leading-5 text-foreground/70">
                Ao continuar, você concorda com os termos de uso e a política de
                privacidade da Codly.
            </p>
        </>
    );
}