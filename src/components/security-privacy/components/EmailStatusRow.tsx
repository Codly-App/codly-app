"use client";

import clsx from "clsx";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { auth } from "@/lib/firebase";

export function EmailStatusRow() {
    const user = auth.currentUser;
    const verified = user?.emailVerified ?? false;

    return (
        <div className="flex items-center justify-between gap-4 p-4">
            <div className="flex min-w-0 flex-col">
                <span className="font-medium text-title">E-mail</span>
                <span className="truncate text-sm text-foreground/70">
                    {user?.email}
                </span>
            </div>
            <span
                className={clsx(
                    "flex shrink-0 items-center gap-1 text-sm font-medium",
                    verified ? "text-primary" : "text-danger",
                )}
            >
                {verified ? (
                    <FiCheckCircle aria-hidden />
                ) : (
                    <FiAlertCircle aria-hidden />
                )}
                {verified ? "Verificado" : "Não verificado"}
            </span>
        </div>
    );
}
