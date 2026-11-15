interface FormMessagesProps {
    readonly error: string;
    readonly notice: string;
}

export function FormMessages({ error, notice }: FormMessagesProps) {
    return (
        <>
            {error && (
                <p
                    role="alert"
                    className="rounded-xl bg-danger/10 p-3 text-xs text-danger"
                >
                    {error}
                </p>
            )}
            {notice && (
                <output className="block rounded-xl bg-selection p-3 text-xs text-foreground">
                    {notice}
                </output>
            )}
        </>
    );
}
