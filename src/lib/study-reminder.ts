import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";

const REMINDER_ID = 1001;
const REMINDER_HOUR = 19;

async function schedule() {
    await LocalNotifications.schedule({
        notifications: [
            {
                id: REMINDER_ID,
                title: "Hora de estudar!",
                body: "Estude um pouco hoje e mantenha sua sequência no Codly.",
                schedule: {
                    on: { hour: REMINDER_HOUR, minute: 0 },
                    allowWhileIdle: true,
                },
            },
        ],
    });
}

/** Liga ou desliga o lembrete. Não pede permissão: só agenda se ela já foi dada. */
export async function syncStudyReminder(enabled: boolean) {
    if (!Capacitor.isNativePlatform()) return;

    if (!enabled) {
        await LocalNotifications.cancel({
            notifications: [{ id: REMINDER_ID }],
        });
        return;
    }

    const { display } = await LocalNotifications.checkPermissions();

    if (display === "granted") await schedule();
}

/** Pede a permissão (quando o usuário liga a opção) e agenda se ele aceitar. */
export async function askStudyReminderPermission() {
    if (!Capacitor.isNativePlatform()) return;

    const { display } = await LocalNotifications.requestPermissions();

    if (display === "granted") await schedule();
}
