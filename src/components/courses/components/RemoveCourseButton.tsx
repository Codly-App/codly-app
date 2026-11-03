"use client";

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useSetEnrollment } from "@/hooks/useSetEnrollment";

interface RemoveCourseButtonProps {
    readonly courseId: string;
}

export function RemoveCourseButton({ courseId }: RemoveCourseButtonProps) {
    const [confirming, setConfirming] = useState(false);
    const { mutate, isPending } = useSetEnrollment();

    if (!confirming) {
        return (
            <button
                type="button"
                onClick={() => setConfirming(true)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-danger"
            >
                <FiTrash2 aria-hidden />
                Remover
            </button>
        );
    }

    return (
        <div className="flex w-full flex-col gap-2">
            <p className="text-sm text-foreground/70">
                Remover este curso? Seu progresso fica salvo.
            </p>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => setConfirming(false)}
                    disabled={isPending}
                    className="flex-1 rounded-xl bg-background py-2 text-sm font-medium text-title"
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    onClick={() => mutate({ courseId, enrolled: false })}
                    disabled={isPending}
                    className="flex-1 rounded-xl bg-danger py-2 text-sm font-medium text-on-primary disabled:opacity-60"
                >
                    Remover
                </button>
            </div>
        </div>
    );
}
