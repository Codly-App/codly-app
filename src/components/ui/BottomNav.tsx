"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAward, FiBookOpen, FiHome, FiUser, FiUsers } from "react-icons/fi";

const ITEMS = [
    { href: "/", label: "Início", icon: FiHome },
    { href: "/courses", label: "Cursos", icon: FiBookOpen },
    { href: "/ranking", label: "Ranking", icon: FiAward },
    { href: "/friends", label: "Amigos", icon: FiUsers },
    { href: "/profile", label: "Perfil", icon: FiUser },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Navegação principal"
            className="fixed inset-x-0 bottom-0 z-10 border-t border-selection bg-background pb-[env(safe-area-inset-bottom)]"
        >
            <ul className="mx-auto flex max-w-md items-stretch justify-around">
                {ITEMS.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <li key={href} className="flex-1">
                            <Link
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={clsx(
                                    "flex flex-col items-center gap-0.5 py-2 text-xs font-medium",
                                    active
                                        ? "text-primary-strong dark:text-title"
                                        : "text-foreground/60",
                                )}
                            >
                                <span
                                    className={clsx(
                                        "rounded-full px-4 py-1 text-xl",
                                        active && "bg-selection",
                                    )}
                                >
                                    <Icon aria-hidden />
                                </span>
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}