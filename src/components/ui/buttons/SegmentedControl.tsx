import clsx from "clsx";

export interface SegmentedOption<T extends string | number> {
    value: T;
    label: string;
}

interface SegmentedControlProps<T extends string | number> {
    label: string;
    options: SegmentedOption<T>[];
    value: T;
    onChange: (value: T) => void;
}

export function SegmentedControl<T extends string | number>({
    label,
    options,
    value,
    onChange,
}: SegmentedControlProps<T>) {
    return (
        <fieldset
            aria-label={label}
            className="flex min-w-0 gap-1 rounded-xl border-0 bg-background p-1"
        >
            {options.map((option) => {
                const active = option.value === value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        aria-pressed={active}
                        onClick={() => onChange(option.value)}
                        className={clsx(
                            "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition",
                            active
                                ? "bg-primary text-on-primary"
                                : "text-foreground/70",
                        )}
                    >
                        {option.label}
                    </button>
                );
            })}
        </fieldset>
    );
}
