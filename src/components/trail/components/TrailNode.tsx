import clsx from "clsx";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiAward, FiCheck, FiLock, FiPlay } from "react-icons/fi";
import { NodePulse } from "@/components/trail/components/NodePulse";
import { StartBubble } from "@/components/trail/components/StartBubble";
import type { LessonStatus, ProgressLesson } from "@/components/trail/types";

interface TrailNodeProps {
    readonly lesson: ProgressLesson;
    readonly x: number;
    readonly courseId: string;
}

const STATUS_LABELS: Record<LessonStatus, string> = {
    done: "concluída",
    current: "próxima lição",
    locked: "bloqueada",
};

function getIcon({ status, kind }: ProgressLesson): IconType {
    if (status === "locked") return FiLock;
    if (status === "done") return FiCheck;

    return kind === "challenge" ? FiAward : FiPlay;
}

function getColors({ status, kind }: ProgressLesson) {
    if (status === "locked") {
        return "border-foreground/10 bg-surface text-foreground/40";
    }
    if (kind === "challenge") {
        return "border-primary bg-primary-strong text-on-primary";
    }

    return "border-primary-strong bg-primary text-on-primary";
}

export function TrailNode({ lesson, x, courseId }: TrailNodeProps) {
    const Icon = getIcon(lesson);
    const label = `${lesson.title} (${STATUS_LABELS[lesson.status]})`;
    const className = clsx(
        "relative flex items-center justify-center rounded-full border-b-4 text-2xl transition active:scale-95",
        lesson.kind === "challenge" ? "size-20" : "size-16",
        getColors(lesson),
    );

    return (
        <div
            className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%` }}
        >
            <div className="relative">
                {lesson.status === "current" && <NodePulse />}
                {lesson.status === "locked" ? (
                    <button
                        type="button"
                        disabled
                        aria-label={label}
                        className={className}
                    >
                        <Icon aria-hidden />
                    </button>
                ) : (
                    <Link
                        href={`/lessons?course=${courseId}&lesson=${lesson.id}`}
                        aria-label={label}
                        title={lesson.title}
                        className={className}
                    >
                        <Icon aria-hidden />
                    </Link>
                )}
                {lesson.status === "current" && <StartBubble />}
            </div>
        </div>
    );
}
