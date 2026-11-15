import clsx from "clsx";
import type { AuthMode } from "@/components/login/types";

const MODES: { value: AuthMode; label: string }[] = [
    { value: "login", label: "Entrar" },
    { value: "register", label: "Criar conta" },
];

interface ModeSwitchProps {
    readonly mode: AuthMode;
    readonly onChange: (mode: AuthMode) => void;
}

export function ModeSwitch({ mode, onChange }: ModeSwitchProps) {
    return (
        <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-background p-1">
            {MODES.map((item) => (
                <button
                    key={item.value}
                    type="button"
                    onClick={() => onChange(item.value)}
                    aria-pressed={mode === item.value}
                    className={clsx(
                        "h-10 cursor-pointer rounded-lg text-sm font-semibold transition-colors",
                        mode === item.value
                            ? "bg-surface text-primary shadow-sm"
                            : "text-foreground/70 hover:text-foreground",
                    )}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
