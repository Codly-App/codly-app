import { FiSettings, FiShield, FiSliders } from "react-icons/fi";
import { MenuItem } from "@/components/ui/navigation/MenuItem";

export function ProfileMenu() {
    return (
        <nav aria-label="Opções da conta" className="flex flex-col gap-3">
            <MenuItem
                href="/preferences"
                icon={<FiSliders />}
                label="Preferências"
            />
            <MenuItem
                href="/settings"
                icon={<FiSettings />}
                label="Configurações"
            />
            <MenuItem
                href="/security-privacy"
                icon={<FiShield />}
                label="Segurança e privacidade"
            />
        </nav>
    );
}
