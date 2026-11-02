import { FiLock, FiSettings, FiShield } from "react-icons/fi";
import { MenuItem } from "@/components/ui/navigation/MenuItem";

export function ProfileMenu() {
    return (
        <nav aria-label="Opções da conta" className="flex flex-col gap-3">
            <MenuItem
                href="/settings"
                icon={<FiSettings />}
                label="Configurações"
            />
            <MenuItem href="/security" icon={<FiShield />} label="Segurança" />
            <MenuItem href="/privacy" icon={<FiLock />} label="Privacidade" />
        </nav>
    );
}
