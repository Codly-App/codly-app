export type AuthMode = "login" | "register";

export interface EmailAuthValues {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}