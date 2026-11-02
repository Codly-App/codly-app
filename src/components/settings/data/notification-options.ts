import type { NotificationSettings, ToggleOption } from "@/types/settings";

export const NOTIFICATION_OPTIONS: ToggleOption<keyof NotificationSettings>[] =
    [
        {
            key: "dailyReminder",
            label: "Lembrete de estudo",
            description: "Um aviso por dia para você não perder a sequência.",
        },
        {
            key: "achievements",
            label: "Conquistas e níveis",
            description:
                "Avisa quando você sobe de nível ou ganha uma conquista.",
        },
        {
            key: "friendActivity",
            label: "Atividade dos amigos",
            description:
                "Pedidos de amizade e quando alguém passa você no ranking.",
        },
    ];
