import { DeleteAccountButton } from "@/components/settings/components/DeleteAccountButton";
import { SettingsGroup } from "@/components/ui/display/SettingsGroup";

export function AccountSection() {
    return (
        <SettingsGroup title="Conta">
            <DeleteAccountButton />
        </SettingsGroup>
    );
}
