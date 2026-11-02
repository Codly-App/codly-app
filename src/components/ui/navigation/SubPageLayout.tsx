import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface SubPageLayoutProps {
    title: string;
    backHref?: string;
    children: ReactNode;
}

export function SubPageLayout({
    title,
    backHref = "/profile",
    children,
}: SubPageLayoutProps) {
    return (
        <main className="mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-10">
            <header className="flex items-center gap-3">
                <Link
                    href={backHref}
                    aria-label="Voltar"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-xl text-title transition active:scale-95"
                >
                    <FiArrowLeft aria-hidden />
                </Link>
                <h1 className="text-xl font-bold text-title">{title}</h1>
            </header>
            {children}
        </main>
    );
}
