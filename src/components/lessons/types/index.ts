export interface ChoiceExercise {
    kind: "choice";
    prompt: string;
    code?: string;
    /** A resposta certa é sempre options[0]. A tela embaralha as opções. */
    options: string[];
    explanation: string;
}

export interface CodeExercise {
    kind: "code";
    prompt: string;
    /** Trechos de texto entre as lacunas (sempre um a mais que as lacunas). */
    parts: string[];
    /** Palavras certas, na ordem das lacunas. */
    blanks: string[];
    /** Palavras disponíveis: as certas e algumas erradas. */
    options: string[];
    explanation: string;
}

export interface OrderExercise {
    kind: "order";
    
    prompt: string;
    /** Itens na ordem certa. A tela embaralha. */
    items: string[];
    explanation: string;
}

export type Exercise = ChoiceExercise | CodeExercise | OrderExercise;

export interface LessonContent {
    id: string;
    intro: string;
    exercises: Exercise[];
}

export interface ExerciseResult {
    ready: boolean;
    correct: boolean;
}

export interface ExerciseProps<T extends Exercise> {
    exercise: T;
    locked: boolean;
    onChange: (result: ExerciseResult) => void;
}

export type LessonPhase = "intro" | "exercise" | "result";

/** Palavra ou item embaralhado, com id estável para a tela. */
export interface BankItem {
    id: string;
    label: string;
}
