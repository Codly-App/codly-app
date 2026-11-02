import type {
    BooleanKeys,
    PreferenceSettings,
    ToggleOption,
} from "@/types/settings";

export const EXPERIENCE_OPTIONS: ToggleOption<
    BooleanKeys<PreferenceSettings>
>[] = [
    {
        key: "soundEffects",
        label: "Efeitos sonoros",
        description: "Sons ao acertar, errar e concluir uma lição.",
    },
    {
        key: "reduceMotion",
        label: "Reduzir animações",
        description: "Menos movimento nas telas e nas transições.",
    },
];
