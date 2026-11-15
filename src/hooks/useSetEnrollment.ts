import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Course } from "@/components/courses/types";
import { COURSES_KEY } from "@/hooks/useCourses";
import { api } from "@/lib/api";
import { SUMMARY_KEY } from "@/hooks/useSummary";

interface EnrollmentInput {
    courseId: string;
    enrolled: boolean;
}

export function useSetEnrollment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ courseId, enrolled }: EnrollmentInput) => {
            const url = `/me/courses/${courseId}`;

            if (enrolled) {
                await api.put(url);
            } else {
                await api.delete(url);
            }
        },
        onMutate: async ({ courseId, enrolled }) => {
            await queryClient.cancelQueries({ queryKey: COURSES_KEY });
            const previous = queryClient.getQueryData<Course[]>(COURSES_KEY);

            if (previous) {
                queryClient.setQueryData<Course[]>(
                    COURSES_KEY,
                    previous.map((course) =>
                        course.id === courseId
                            ? { ...course, enrolled }
                            : course,
                    ),
                );
            }

            return { previous };
        },
        onError: (_error, _input, context) => {
            if (context?.previous) {
                queryClient.setQueryData(COURSES_KEY, context.previous);
            }
        },
        onSettled: () =>
            Promise.all([
                queryClient.invalidateQueries({ queryKey: COURSES_KEY }),
                queryClient.invalidateQueries({ queryKey: SUMMARY_KEY }),
            ]),
    });
}
