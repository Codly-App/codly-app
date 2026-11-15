
interface LoginHeaderProps {
    mode: "login" | "register";
}

export function LoginHeader({ mode }: LoginHeaderProps) {
    const isLogin = mode === "login";

    return (
        <header className="mb-7 text-center">
            <div className="relative mx-auto mb-5 flex size-14 items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-xl" />

                <div className="relative flex size-13 items-center justify-center rounded-2xl bg-primary text-2xl font-extrabold text-on-primary shadow-lg shadow-primary/20">
                    C
                </div>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-title sm:text-[27px]">
                {isLogin
                    ? "Bem-vindo à Codly"
                    : "Crie sua conta na Codly"}
            </h1>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-foreground/70">
                {isLogin
                    ? "Entre na sua conta e continue sua jornada na programação."
                    : "Dê o primeiro passo para aprender, praticar e evoluir."}
            </p>
        </header>
    );
}
