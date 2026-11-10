import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export interface ApiProfile {
    id: string;
    name: string;
    email: string;
    photoURL: string;
    tema: string;
    metaDiaria: number;
}

export function useProfile() {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => (await api.get<ApiProfile>("/me")).data,
    });
}