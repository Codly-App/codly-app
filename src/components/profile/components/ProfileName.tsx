"use client";

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { EditNameForm } from "@/components/profile/components/EditNameForm";
import { getAuthUserInfo } from "@/lib/auth-user";

export function ProfileName() {
    const [editing, setEditing] = useState(false);
    const { name } = getAuthUserInfo();

    if (editing) {
        return (
            <EditNameForm
                initialName={name}
                onDone={() => setEditing(false)}
            />
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