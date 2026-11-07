"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/components/ui/navigation/nav-items";
import { LogoutButton } from "../buttons/LogoutButton";

export function SideNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Navegação principal"
            className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col gap-1 border-r border-selection p-4 md:flex"
        >
            <p className="px-3 pt-2 pb-6 text-2xl font-extrabold text-title">
                Codly
            </p>
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={clsx(
                            "flex items-center gap-3 rounded-xl px-3 py-3 font-medium transition",
                            active
                                ? "bg-selection text-primary-strong dark:text-title"
                                : "text-foreground/70 hover:bg-surface",
                        )}
                    >
                        <Icon aria-hidden className="text-xl" />
                        {label}
                    </Link>
                );
            })}
            <LogoutButton className="mt-auto" variant="nav"/>
        </nav>
    );
}
