"use client";

import { FiPlus } from "react-icons/fi";
import { useSetEnrollment } from "@/hooks/useSetEnrollment";

interface AddCourseButtonProps {
    readonly courseId: string;
}

export function AddCourseButton({ courseId }: AddCourseButtonProps) {
    const { mutate, isPending } = useSetEnrollment();

    return (
        <button
            type="button"
            disabled={isPending}
            onClick={() => mutate({ courseId, enrolled: true })}
            className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition active:scale-95 disabled:opacity-60"
        >
            <FiPlus aria-hidden />
            Adicionar
        </button>
    );
}
