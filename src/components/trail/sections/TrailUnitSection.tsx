import { TrailConnector } from "@/components/trail/components/TrailConnector";
import { TrailNode } from "@/components/trail/components/TrailNode";
import { UnitBanner } from "@/components/trail/components/UnitBanner";
import { NODE_X } from "@/components/trail/data/trail-layout";
import type { ProgressUnit } from "@/components/trail/types";

interface TrailUnitSectionProps {
    unit: ProgressUnit;
    number: number;
    courseId: string;
}

export function TrailUnitSection({
    unit,
    number,
    courseId,
}: TrailUnitSectionProps) {
    return (
        <section
            aria-label={`Unidade ${number}: ${unit.title}`}
            className="flex flex-col gap-2"
        >
            <UnitBanner unit={unit} number={number} />
            <ol className="flex flex-col pt-6">
                {unit.lessons.map((lesson, index) => {
                    const x = NODE_X[index % NODE_X.length];
                    const isLast = index === unit.lessons.length - 1;

                    return (
                        <li key={lesson.id} className="relative h-24">
                            {!isLast && (
                                <TrailConnector
                                    fromX={x}
                                    toX={NODE_X[(index + 1) % NODE_X.length]}
                                    active={lesson.status === "done"}
                                />
                            )}
                            <TrailNode
                                lesson={lesson}
                                x={x}
                                courseId={courseId}
                            />
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
