import { EmailStatusRow } from "@/components/security-privacy/components/EmailStatusRow";
import { PasswordResetRow } from "@/components/security-privacy/components/PasswordResetRow";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";

export function SecuritySection() {
    return (
        <SettingsGroup title="Segurança">
            <EmailStatusRow />
            <PasswordResetRow />
        </SettingsGroup>
    );
}
