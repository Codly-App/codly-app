import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { auth } from "@/lib/firebase";

export function useUpdateName() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (name: string) => {
            const { data } = await api.patch("/me", { name });
            await auth.currentUser?.reload();
            return data;
        },
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["profile"] }),
    });
}
