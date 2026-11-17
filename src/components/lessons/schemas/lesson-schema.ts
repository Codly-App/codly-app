import { z } from "zod";
import type { CodeExercise } from "@/components/lessons/types";

const choiceSchema = z.object({
    kind: z.literal("choice"),
    prompt: z.string().min(1),
    code: z.string().optional(),
    options: z.array(z.string().min(1)).min(2),
    explanation: z.string().min(1),
});

const codeSchema = z
    .object({
        kind: z.literal("code"),
        prompt: z.string().min(1),
        template: z.string().includes("___"),
        blanks: z.array(z.string().min(1)).min(1),
        extra: z.array(z.string()).default([]),
        explanation: z.string().min(1),
    })
    .transform(
        ({ template, blanks, extra, ...rest }): CodeExercise => ({
            ...rest,
            parts: template.split("___"),
            blanks,
            options: [...blanks, ...extra],
        }),
    )
    .refine(
        (item) => item.parts.length === item.blanks.length + 1,
        "As lacunas não batem com as palavras.",
    );

const orderSchema = z.object({
    kind: z.literal("order"),
    prompt: z.string().min(1),
    items: z
        .array(z.string().min(1))
        .min(2)
        .refine(
            (items) => new Set(items).size === items.length,
            "Itens repetidos.",
        ),
    explanation: z.string().min(1),
});

export const lessonListSchema = z.array(
    z.object({
        id: z.string().min(1),
        intro: z.string().min(1),
        exercises: z
            .array(z.union([choiceSchema, codeSchema, orderSchema]))
            .min(1),
    }),
);
