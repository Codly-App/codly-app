const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";

export default async function* reporter(source) {
    let passed = 0;
    let failed = 0;

    for await (const event of source) {
        if (event.type === "test:pass") passed++;

        if (event.type === "test:fail") {
            failed++;
            const error = event.data.details?.error;
            const message =
                error?.cause?.message ?? error?.message ?? "erro desconhecido";
            yield `${RED}${message}${RESET}`;
        }
    }

    if (failed === 0) {
        yield `${GREEN}✔ Padrões do projeto: ${passed} verificações passaram.${RESET}\n`;
        return;
    }

    yield `${RED}${BOLD}✖ ${failed} verificação(ões) falharam (${passed} passaram). Corrija os itens acima.${RESET}\n`;
}
