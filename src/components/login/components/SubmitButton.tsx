import { FiArrowRight } from "react-icons/fi";

interface SubmitButtonProps {
    readonly loading: boolean;
    readonly isRegister: boolean;
}

export function SubmitButton({ loading, isRegister }: SubmitButtonProps) {
    let text = "Entrar na minha conta";

    if (loading) {
        text = "Aguarde...";
    } else if (isRegister) {
        text = "Criar minha conta";
    }

    return (
        <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-on-primary transition-colors hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-60"
        >
            {text}
            {!loading && <FiArrowRight size={16} />}
        </button>
    );
}