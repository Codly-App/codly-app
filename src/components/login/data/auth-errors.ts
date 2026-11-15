import { FirebaseError } from "firebase/app";

const MESSAGES: Record<string, string> = {
    "auth/email-already-in-use": "Este e-mail já está cadastrado.",
    "auth/invalid-email": "Informe um e-mail válido.",
    "auth/weak-password": "Escolha uma senha mais forte.",
    "auth/invalid-credential": "E-mail ou senha inválidos.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
    "auth/network-request-failed": "Verifique sua conexão com a internet.",
    "auth/popup-blocked": "Permita pop-ups para continuar com Google.",
    "auth/unauthorized-domain": "Domínio não autorizado no Firebase.",
    "auth/account-exists-with-different-credential":
        "Utilize o método de login original.",
};

export function getErrorMessage(error: unknown): string {
    if (!(error instanceof FirebaseError)) {
        return "Ocorreu um erro inesperado. Tente novamente.";
    }

    return MESSAGES[error.code] ?? "Não foi possível concluir a operação.";
}
