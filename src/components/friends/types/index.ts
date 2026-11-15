export interface FriendUser {
    uid: string;
    name: string;
    username: string;
    avatarUrl?: string;
    xp: number;
    isFriend: boolean;
    requestSent: boolean;
}
