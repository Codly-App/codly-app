import { FcGoogle } from "react-icons/fc";

interface GoogleButtonProps {
    readonly disabled: boolean;
    readonly onClick: () => void;
}

export function GoogleButton({ disabled, onClick }: GoogleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-background text-sm font-semibold text-foreground ring-1 ring-primary/10 transition-colors hover:bg-selection disabled:cursor-not-allowed disabled:opacity-60"
        >
            <FcGoogle className="size-5" aria-hidden />
            Continuar com Google
        </button>
    );
}
