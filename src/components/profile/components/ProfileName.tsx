"use client";

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { EditNameForm } from "@/components/profile/components/EditNameForm";

interface ProfileNameProps {
    name: string;
}

export function ProfileName({ name }: ProfileNameProps) {
    const [editing, setEditing] = useState(false);

    if (editing) {
        return (
            <EditNameForm initialName={name} onDone={() => setEditing(false)} />
        );
    }

    return (
        <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold text-title">{name}</h1>
            <button
                type="button"
                aria-label="Editar nome"
                title="Editar nome"
                onClick={() => setEditing(true)}
                className="flex size-8 items-center justify-center rounded-full bg-surface text-primary transition active:scale-95"
            >
                <FiEdit2 aria-hidden />
            </button>
        </div>
    );
}
