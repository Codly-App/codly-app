import { FiPlay } from "react-icons/fi";

interface LessonIntroProps {
    readonly intro: string;
    readonly total: number;
    readonly xp: number;
    readonly onStart: () => void;
}

export function LessonIntro({ intro, total, xp, onStart }: LessonIntroProps) {
    return (
        <section className="flex flex-col gap-5 rounded-3xl bg-surface p-5">
            <p className="text-base leading-7 text-foreground">{intro}</p>
            <p className="text-sm text-foreground/70">
                {total} exercícios · {xp} XP
            </p>
            <button
                type="button"
                onClick={onStart}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-semibold text-on-primary transition active:scale-95"
            >
                <FiPlay aria-hidden />
                Começar
            </button>
        </section>
    );
}
