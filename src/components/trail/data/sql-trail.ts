import type { Trail, TrailUnit } from "@/components/trail/types";

const LESSON_XP = 10;
const CHALLENGE_XP = 25;

function unit(
    id: string,
    title: string,
    description: string,
    lessons: [string, string, string],
    challenge: string,
): TrailUnit {
    return {
        id,
        title,
        description,
        lessons: [
            ...lessons.map((lessonTitle, index) => ({
                id: `${id}-${index + 1}`,
                title: lessonTitle,
                kind: "lesson" as const,
                xp: LESSON_XP,
            })),
            {
                id: `${id}-desafio`,
                title: challenge,
                kind: "challenge" as const,
                xp: CHALLENGE_XP,
            },
        ],
    };
}

export const SQL_TRAIL: Trail = {
    courseId: "sql-basico",
    units: [
        unit(
            "banco",
            "Conhecendo o banco",
            "Tabelas, linhas e colunas.",
            [
                "O que é um banco de dados",
                "Tabelas, linhas e colunas",
                "Chaves primárias",
            ],
            "Desafio: leia o esquema",
        ),
        unit(
            "select",
            "Primeiras consultas",
            "Peça dados com o SELECT.",
            ["Seu primeiro SELECT", "Escolhendo colunas", "Apelidos com AS"],
            "Desafio: consultas simples",
        ),
        unit(
            "where",
            "Filtrando dados",
            "Traga só o que importa com o WHERE.",
            ["WHERE e comparações", "AND, OR e NOT", "LIKE e IN"],
            "Desafio: encontre o registro",
        ),
        unit(
            "ordem",
            "Ordenando e limitando",
            "Organize e recorte o resultado.",
            ["ORDER BY", "LIMIT e OFFSET", "DISTINCT"],
            "Desafio: top 10",
        ),
        unit(
            "agregacao",
            "Resumindo dados",
            "Conte, some e agrupe.",
            ["COUNT, SUM e AVG", "MIN e MAX", "GROUP BY e HAVING"],
            "Desafio: relatório de vendas",
        ),
        unit(
            "join",
            "Juntando tabelas",
            "Combine dados com o JOIN.",
            ["Relacionando tabelas", "INNER JOIN", "LEFT JOIN"],
            "Desafio final: o banco completo",
        ),
    ],
};
