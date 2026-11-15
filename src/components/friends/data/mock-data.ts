
import type { FriendUser } from "@/components/friends/types";

export const mockUsers: FriendUser[] = [
    {
        uid: "user-001",
        name: "Guilherme Barroso",
        username: "guilherme",
        xp: 1850,
        isFriend: true,
        requestSent: false,
    },
    {
        uid: "user-002",
        name: "Ana Costa",
        username: "anacosta",
        xp: 1240,
        isFriend: false,
        requestSent: false,
    },
    {
        uid: "user-003",
        name: "Pedro Henrique",
        username: "pedrohenrique",
        xp: 980,
        isFriend: false,
        requestSent: false,
    },
];
