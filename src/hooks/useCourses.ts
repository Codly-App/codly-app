import { useQuery } from "@tanstack/react-query";
import { MOCK_COURSES } from "@/components/courses/data/mock-data";
import type { Course } from "@/components/courses/types";
import { api } from "@/lib/api";

export const COURSES_KEY = ["courses"];

export function useCourses() {
    return useQuery({
        queryKey: COURSES_KEY,
        queryFn: async () => (await api.get<Course[]>("/courses")).data,
        initialData: MOCK_COURSES,
        initialDataUpdatedAt: 0,
    });
}
