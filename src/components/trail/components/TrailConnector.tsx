import clsx from "clsx";

interface TrailConnectorProps {
    readonly fromX: number;
    readonly toX: number;
    readonly active: boolean;
}

export function TrailConnector({ fromX, toX, active }: TrailConnectorProps) {
    return (
        <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className={clsx(
                "pointer-events-none absolute top-1/2 left-0 h-full w-full",
                active ? "text-primary" : "text-foreground/25",
            )}
        >
            <title>Linha conectora decorativa</title>
            <path
                d={`M ${fromX} 0 C ${fromX} 50, ${toX} 50, ${toX} 100`}
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray="1 8"
                vectorEffect="non-scaling-stroke"
            />
            
        </svg>
    );
}
