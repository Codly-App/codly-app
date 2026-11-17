import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COURSES_KEY } from "@/hooks/useCourses";
import { SUMMARY_KEY } from "@/hooks/useSummary";
import { api } from "@/lib/api";

interface CompleteLessonInput {
    courseId: string;
    lessonId: string;
}

export interface CompleteLessonResult {
    xpEarned: number;
    alreadyDone: boolean;
    lessonsDone: number;
}

export function useCompleteLesson() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ courseId, lessonId }: CompleteLessonInput) =>
            (
                await api.post<CompleteLessonResult>(
                    `/me/courses/${courseId}/lessons/${lessonId}/complete`,
                )
            ).data,
        onSuccess: () =>
            Promise.all([
                queryClient.invalidateQueries({ queryKey: COURSES_KEY }),
                queryClient.invalidateQueries({ queryKey: SUMMARY_KEY }),
            ]),
    });
}
