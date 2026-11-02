import type { PrivacySettings, ToggleOption } from "@/types/settings";

export const PRIVACY_OPTIONS: ToggleOption<keyof PrivacySettings>[] = [
    {
        key: "showOnlineStatus",
        label: "Mostrar quando estou online",
        description: "Seus amigos veem se você está online agora.",
    },
    {
        key: "showCurrentCourse",
        label: "Mostrar o curso que estou fazendo",
        description: "Seus amigos veem qual curso você está estudando.",
    },
    {
        key: "showInRanking",
        label: "Aparecer no ranking",
        description: "Desativado, você some do ranking público.",
    },
    {
        key: "showStreak",
        label: "Mostrar minha sequência diária",
        description: "Seus amigos veem há quantos dias você estuda seguido.",
    },
    {
        key: "allowFriendRequests",
        label: "Permitir pedidos de amizade",
        description: "Desativado, ninguém consegue te adicionar.",
    },
];
