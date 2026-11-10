import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { UserSummary } from "@/types/summary";

export const SUMMARY_KEY = ["summary"];

export function useSummary() {
    return useQuery({
        queryKey: SUMMARY_KEY,
        queryFn: async () => (await api.get<UserSummary>("/me/summary")).data,
    });
}