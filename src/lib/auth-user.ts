import { auth } from "@/lib/firebase";

export interface AuthUserInfo {
    name: string;
    email: string;
    picture: string | null;
}

export function getAuthUserInfo(): AuthUserInfo {
    const user = auth.currentUser;

    return {
        name: user?.displayName || user?.email?.split("@")[0] || "Estudante",
        email: user?.email ?? "",
        picture: user?.photoURL ?? null,
    };
}