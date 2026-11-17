import clsx from "clsx";

interface ChipProps {
    readonly label: string;
    readonly onClick: () => void;
    readonly disabled?: boolean;
    readonly used?: boolean;
}

export function Chip({
    label,
    onClick,
    disabled = false,
    used = false,
}: ChipProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled || used}
            className={clsx(
                "rounded-xl border-2 px-3 py-2 font-mono text-sm font-semibold transition active:scale-95",
                used
                    ? "border-transparent bg-background text-foreground/30"
                    : "border-primary/30 bg-surface text-title",
            )}
        >
            {label}
        </button>
    );
}
