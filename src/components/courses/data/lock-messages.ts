import type { LockReason } from "@/components/courses/types";

export const LOCK_MESSAGES: Record<LockReason, string> = {
    plan: "Curso exclusivo do plano Pro.",
    limit: "O plano gratuito tem limite de cursos ao mesmo tempo. Remova um curso ou assine o Pro.",
};
