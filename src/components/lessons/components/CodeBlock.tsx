import type { ReactNode } from "react";

interface CodeBlockProps {
    readonly children: ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
    return (
        <pre className="overflow-x-auto rounded-2xl bg-surface p-4 font-mono text-sm leading-8 whitespace-pre-wrap text-foreground">
            {children}
        </pre>
    );
}
