import { z } from "zod";

export const nameSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "O nome precisa ter ao menos 2 letras.")
        .max(50, "O nome pode ter no máximo 50 letras."),
});

export type NameFormData = z.infer<typeof nameSchema>;
