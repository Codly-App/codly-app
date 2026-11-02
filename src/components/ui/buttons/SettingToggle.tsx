import { Switch } from "@/components/ui/buttons/Switch";

interface SettingToggleProps {
    label: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function SettingToggle({
    label,
    description,
    checked,
    onChange,
}: SettingToggleProps) {
    return (
        <div className="flex items-center justify-between gap-4 p-4">
            <div className="flex flex-col">
                <span className="font-medium text-title">{label}</span>
                {description && (
                    <span className="text-sm text-foreground/70">
                        {description}
                    </span>
                )}
            </div>
            <Switch checked={checked} onChange={onChange} label={label} />
        </div>
    );
}
