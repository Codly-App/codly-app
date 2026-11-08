"use client";

import { FiMessageCircle, FiUserPlus, FiCheck, FiUser } from "react-icons/fi";
import type { FriendUser } from "@/components/friends/types";

interface FriendCardProps {
    user: FriendUser;
    onAdd: (uid: string) => void;
    onViewProfile: (uid: string) => void;
    onMessage: (uid: string) => void;
}

export function FriendCard({ user, onAdd, onViewProfile, onMessage }: FriendCardProps) {
    return (
        <article className="flex items-center gap-3 rounded-2xl bg-surface p-4 ring-1 ring-primary/10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-selection text-primary">
                <FiUser size={22} />
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-title">{user.name}</h3>
                <p className="truncate text-xs text-foreground/70">
                    @{user.username} · {user.xp} XP
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
                <button type="button" onClick={() => onViewProfile(user.uid)}
                    className="rounded-lg px-2 py-2 text-xs font-semibold text-primary hover:bg-selection">
                    Perfil
                </button>

                {user.isFriend ? (
                    <button type="button" onClick={() => onMessage(user.uid)} aria-label={`Enviar mensagem para ${user.name}`}
                        className="rounded-lg bg-primary p-2 text-on-primary hover:bg-primary-strong">
                        <FiMessageCircle />
                    </button>
                ) : (
                    <button type="button" onClick={() => onAdd(user.uid)} disabled={user.requestSent}
                        className="flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-on-primary disabled:opacity-60">
                        {user.requestSent ? <FiCheck /> : <FiUserPlus />}
                        {user.requestSent ? "Enviado" : "Adicionar"}
                    </button>
                )}
            </div>
        </article>
    );
}
