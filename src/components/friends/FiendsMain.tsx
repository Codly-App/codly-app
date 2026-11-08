"use client";

import { useState } from "react";
import { FriendsHeader } from "@/components/friends/sections/FriendsHeader";
import { FriendsSearch } from "@/components/friends/sections/FriendsSearch";
import { FriendsList } from "@/components/friends/sections/FriendsList";
import { useFriends } from "@/components/friends/hooks/UseFriend";
import { AppShell } from "@/components/ui/navigation/AppShell";
import { normalizeText } from "@/lib/normalize-text";

export function FriendsMain() {
    const [search, setSearch] = useState("");
    const [notice, setNotice] = useState("");

    const { users, sendRequest } = useFriends();

    const query = normalizeText(search.trim().replace(/^@/, ""));

    const filteredUsers = users.filter((user) =>
        [user.name, user.username, user.uid].some((value) =>
            normalizeText(value).includes(query)
        )
    );

    return (
        <AppShell>
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-4 md:p-8">
                <FriendsHeader />

                <FriendsSearch value={search} onChange={setSearch} />

                {notice && (
                    <output className="block rounded-xl bg-selection p-3 text-sm text-foreground">
                        {notice}
                    </output>
                )}

                <FriendsList users={filteredUsers} onAdd={sendRequest}
                    onViewProfile={() => setNotice("Perfil público: aguardando integração com a API.")}
                    onMessage={() => setNotice("Mensagens: funcionalidade em desenvolvimento.")}/>
            </div>
        </AppShell>
    );
}
