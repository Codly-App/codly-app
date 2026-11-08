"use client";

import { FiUsers } from "react-icons/fi";
import { FriendCard } from "@/components/friends/components/FriendCard";
import type { FriendUser } from "@/components/friends/types";
import { EmptyState } from "@/components/ui/display/EmptyState";

interface FriendsListProps {
    users: FriendUser[];
    onAdd: (uid: string) => void;
    onViewProfile: (uid: string) => void;
    onMessage: (uid: string) => void;
}

export function FriendsList({ users, onAdd, onViewProfile, onMessage }: FriendsListProps) {
    if (users.length === 0) {
        return (
            <EmptyState
                icon={<FiUsers size={32} />}
                title="Nenhum usuário encontrado"
                description="Tente pesquisar por outro nome ou identificador."
            />
        );
    }

    return (
        <section aria-label="Usuários" className="flex flex-col gap-3 md:grid md:grid-cols-2">
            {users.map((user) => (
                <FriendCard
                    key={user.uid}
                    user={user}
                    onAdd={onAdd}
                    onViewProfile={onViewProfile}
                    onMessage={onMessage}
                />
            ))}
        </section>
    );
}
