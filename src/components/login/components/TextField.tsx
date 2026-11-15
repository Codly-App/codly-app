import type { ReactNode } from "react";

const INPUT_CLASS =
    "h-11 w-full rounded-xl bg-background pl-10 pr-11 text-base text-foreground outline-none ring-1 ring-primary/10 transition-colors placeholder:text-foreground/50 focus:ring-primary/50";

interface TextFieldProps {
    readonly id: string;
    readonly label: string;
    readonly icon: ReactNode;
    readonly value: string;
    readonly onChange: (value: string) => void;
    readonly type?: string;
    readonly placeholder?: string;
    readonly autoComplete?: string;
    readonly minLength?: number;
    readonly hint?: string;
    readonly trailing?: ReactNode;
}

export function TextField({
    id,
    label,
    icon,
    value,
    onChange,
    type = "text",
    placeholder,
    autoComplete,
    minLength,
    hint,
    trailing,
}: TextFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-xs font-semibold">
                {label}
            </label>
            <div className="relative">
                <span
                    aria-hidden
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/60"
                >
                    {icon}
                </span>
                <input
                    id={id}
                    type={type}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder}
                    minLength={minLength}
                    required
                    className={INPUT_CLASS}
                />
                {trailing}
            </div>
            {hint && <p className="mt-1 text-xs text-foreground/70">{hint}</p>}
        </div>
    );
}