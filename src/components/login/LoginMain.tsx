import { LoginForm } from "./Sections/LoginForm";
import { LoginHeader } from "./Sections/LoginHeader";

export function LoginMain() {
    return (
        <main className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-primary/5" />

            <div className="w-full max-w-md rounded-3xl bg-surface p-6 shadow-xl shadow-primary/10 ring-1 ring-primary/10 sm:p-9">
                <LoginForm />
            </div>
        </main>
    );
}
