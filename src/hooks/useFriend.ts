"use client";

import { useState } from "react";
import { mockUsers } from "@/components/friends/data/mock-data";
import type { FriendUser } from "@/components/friends/types";

export function useFriends() {
    const [users, setUsers] = useState<FriendUser[]>(mockUsers);

    function sendRequest(uid: string) {
        setUsers((current) =>
            current.map((user) =>
                user.uid === uid && !user.isFriend ? { ...user, requestSent: true } : user));
    }

    return { users, sendRequest };
}