import type { ReactNode } from "react";

interface IconButtonProps {
    icon: ReactNode;
    label: string;
}

export function IconButton({ icon, label }: IconButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            title={label}
            className="flex size-11 items-center justify-center rounded-full bg-surface text-xl text-title transition active:scale-95"
        >
            {icon}
        </button>
    );
}