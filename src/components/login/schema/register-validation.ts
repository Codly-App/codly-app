import type { EmailAuthValues } from "@/components/login/types";

export function validateRegister(values: EmailAuthValues): string | null {
    const phone = values.phone.replace(/\D/g, "");

    if (values.name.trim().length < 3) return "Informe seu nome completo.";

    if (phone.length < 10 || phone.length > 13) {
        return "Informe um telefone válido com DDD.";
    }

    if (values.password.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }

    if (values.password !== values.confirmPassword) {
        return "As senhas não coincidem.";
    }

    return null;
}
