import agregacao from "@/components/lessons/data/sql/agregacao.json";
import banco from "@/components/lessons/data/sql/banco.json";
import join from "@/components/lessons/data/sql/join.json";
import ordem from "@/components/lessons/data/sql/ordem.json";
import select from "@/components/lessons/data/sql/select.json";
import where from "@/components/lessons/data/sql/where.json";
import { lessonListSchema } from "@/components/lessons/schemas/lesson-schema";
import type { LessonContent } from "@/components/lessons/types";

const SQL_LESSONS = [banco, select, where, ordem, agregacao, join].flatMap(
    (unit) => lessonListSchema.parse(unit),
);

/** Conteúdo das lições: curso → id da lição (o mesmo id da trilha). */
export const LESSONS: Record<
    string,
    Record<string, LessonContent> | undefined
> = {
    "sql-basico": Object.fromEntries(
        SQL_LESSONS.map((item) => [item.id, item]),
    ),
};
