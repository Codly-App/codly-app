import { useQuery } from "@tanstack/react-query";
import type { ProfileUser } from "@/components/profile/types";
import { api } from "@/lib/api";

export function useProfile() {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => (await api.get<ProfileUser>("/me")).data,
    });
}
