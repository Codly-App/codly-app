import type { Course } from "@/components/courses/types";

export const MOCK_COURSES: Course[] = [
    {
        id: "sql-basico",
        title: "SQL do zero",
        description:
            "Consultas, filtros e junções para ler qualquer banco de dados.",
        iconKey: "sql",
        lessonsTotal: 24,
        lessonsDone: 6,
        enrolled: true,
        requiredPlan: "free",
        lockReason: null,

    },
    {
        id: "js-basico",
        title: "JavaScript do zero",
        description: "Variáveis, funções e lógica para começar a programar.",
        iconKey: "javascript",
        lessonsTotal: 30,
        lessonsDone: 12,
        enrolled: true,
        requiredPlan: "free",
        lockReason: null,
    },
    {
        id: "sql-avancado",
        title: "SQL avançado",
        description: "Subconsultas, índices e otimização de consultas.",
        iconKey: "sql",
        lessonsTotal: 20,
        lessonsDone: 0,
        enrolled: false,
        requiredPlan: "pro",
        lockReason: "plan",
    },
    {
        id: "js-avancado",
        title: "JavaScript avançado",
        description: "Assincronismo, módulos e projetos completos.",
        iconKey: "javascript",
        lessonsTotal: 28,
        lessonsDone: 0,
        enrolled: false,
        requiredPlan: "pro",
        lockReason: "plan",
    },
];
