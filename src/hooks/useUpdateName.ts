import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useUpdateName() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (name: string) => {
            const { data } = await api.patch("/me", { name });
            return data;
        },
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["profile"] }),
    });
}
