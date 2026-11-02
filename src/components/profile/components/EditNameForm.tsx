"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiCheck, FiX } from "react-icons/fi";
import {
    type NameFormData,
    nameSchema,
} from "@/components/profile/schemas/name-schema";
import { useUpdateName } from "@/hooks/useUpdateName";

interface EditNameFormProps {
    initialName: string;
    onDone: () => void;
}

export function EditNameForm({ initialName, onDone }: EditNameFormProps) {
    const { mutate, isPending, isError } = useUpdateName();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NameFormData>({
        resolver: zodResolver(nameSchema),
        defaultValues: { name: initialName },
    });

    function onSubmit({ name }: NameFormData) {
        mutate(name, { onSuccess: onDone });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <input
                    {...register("name")}
                    aria-label="Nome"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-selection bg-surface px-3 py-2 text-center text-lg font-bold text-title outline-none focus:border-primary"
                />
                <button
                    type="submit"
                    aria-label="Salvar nome"
                    disabled={isPending}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition active:scale-95 disabled:opacity-60"
                >
                    <FiCheck aria-hidden />
                </button>
                <button
                    type="button"
                    aria-label="Cancelar edição"
                    onClick={onDone}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-title transition active:scale-95"
                >
                    <FiX aria-hidden />
                </button>
            </div>
            {errors.name && (
                <p role="alert" className="text-sm text-danger">
                    {errors.name.message}
                </p>
            )}
            {isError && (
                <p role="alert" className="text-sm text-danger">
                    Não foi possível salvar. Tente novamente.
                </p>
            )}
        </form>
    );
}
