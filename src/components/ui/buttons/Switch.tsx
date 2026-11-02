import clsx from "clsx";

interface SwitchProps {
    readonly checked: boolean;
    readonly onChange: (checked: boolean) => void;
    readonly label: string;
}

export function Switch({ checked, onChange, label }: SwitchProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={label}
            onClick={() => onChange(!checked)}
            className={clsx(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                checked ? "bg-primary" : "bg-foreground/30",
            )}
        >
            <span
                className={clsx(
                    "absolute top-1 left-1 size-5 rounded-full bg-on-primary transition-transform",
                    checked && "translate-x-5",
                )}
            />
        </button>
    );
}
