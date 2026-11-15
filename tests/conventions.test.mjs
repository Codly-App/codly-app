import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";

const ROOT = process.cwd();
const BASELINE_FILE = path.join(ROOT, "tests", "conventions-baseline.json");

const MAX_LINES = 120;
const SCREEN_SUBFOLDERS = [
    "sections",
    "components",
    "data",
    "types",
    "schemas",
    "hooks",
];
const NOT_SCREENS = ["ui", "auth"];
const SHELL_FILES = ["AppShell.tsx", "SubPageLayout.tsx", "BottomNav.tsx"];

const PALETTE =
    "red|green|blue|gray|grey|slate|zinc|neutral|stone|orange|amber|yellow|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black";
const UTILITIES =
    "bg|text|border|ring|from|to|via|fill|stroke|outline|divide|shadow|placeholder|decoration|accent|caret";
const FAKE_TOKENS =
    "muted|surface-alt|lavender|primary-dark|primary-light|border|card|accent";

function walk(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .flatMap((entry) =>
            entry.isDirectory()
                ? walk(path.join(dir, entry.name))
                : [path.join(dir, entry.name)],
        );
}

const toRel = (file) => path.relative(ROOT, file).split(path.sep).join("/");
const readRaw = (file) =>
    fs.readFileSync(path.join(ROOT, file), "utf8").replace(/\r\n/g, "\n");

// Troca comentários por espaços (mantém as linhas no lugar) para não acusar texto de comentário
function stripComments(text) {
    return text
        .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
        .replace(/(^|[^:])\/\/.*$/gm, (_m, before) => before);
}

const allFiles = walk(path.join(ROOT, "src")).map(toRel);
const codeFiles = allFiles.filter((f) => /\.(ts|tsx)$/.test(f));
const tsxFiles = codeFiles.filter((f) => f.endsWith(".tsx"));
const componentFiles = tsxFiles.filter((f) => f.startsWith("src/components/"));
const isPageOrLayout = (f) => /\/(page|layout)\.tsx$/.test(f);
const baseName = (f) => f.split("/").pop();

function linesMatching(text, regex) {
    return text
        .split("\n")
        .map((content, index) => ({
            line: index + 1,
            snippet: content.trim().slice(0, 90),
            content,
        }))
        .filter(({ content }) => regex.test(content))
        .map(({ line, snippet }) => ({ line, snippet }));
}

function exportedComponents(clean) {
    return [
        ...clean.matchAll(/^export (?:default )?function ([A-Z]\w*)/gm),
    ].map((m) => m[1]);
}

const RULES = [
    {
        id: "sem-firestore",
        title: "O app não pode acessar o Firestore",
        hint: "Leia e grave pela API (src/lib/api.ts). O Firebase no app serve só para o login.",
        files: () => codeFiles,
        find: ({ clean }) =>
            linesMatching(
                clean,
                /from\s+["']firebase\/firestore["']|\b(getFirestore|getDoc|setDoc|onSnapshot)\s*\(/,
            ),
    },
    {
        id: "sem-import-relativo-que-sobe",
        title: "Import relativo que sobe pastas",
        hint: 'Use o alias @/ (exemplo: "@/components/ui/..."), nunca "../".',
        files: () => codeFiles,
        find: ({ clean }) => linesMatching(clean, /from\s+["']\.\.\//),
    },
    {
        id: "um-componente-por-arquivo",
        title: "Mais de um componente no mesmo arquivo",
        hint: "Separe cada componente no seu próprio arquivo, com o nome do componente.",
        files: () => componentFiles,
        find: ({ clean }) => {
            const names = exportedComponents(clean);
            return names.length > 1
                ? [{ line: 1, snippet: `exporta: ${names.join(", ")}` }]
                : [];
        },
    },
    {
        id: "nome-do-arquivo",
        title: "Nome do arquivo diferente do componente (ou fora de PascalCase)",
        hint: "O arquivo se chama como o componente, em PascalCase (CourseCard.tsx exporta CourseCard).",
        files: () => componentFiles.filter((f) => !f.includes("/types/")),
        find: ({ file, clean }) => {
            const name = baseName(file).replace(/\.tsx$/, "");
            const names = exportedComponents(clean);
            if (!/^[A-Z][A-Za-z0-9]*$/.test(name))
                return [
                    { line: 1, snippet: `"${name}" não está em PascalCase` },
                ];
            if (names.length === 1 && names[0] !== name) {
                return [
                    {
                        line: 1,
                        snippet: `arquivo "${name}" exporta "${names[0]}"`,
                    },
                ];
            }
            return [];
        },
    },
    {
        id: "tipos-em-ts",
        title: "Arquivo de tipos com extensão .tsx",
        hint: "Arquivos da pasta types/ não têm JSX: use index.ts (e não index.tsx).",
        files: () => tsxFiles.filter((f) => f.includes("/types/")),
        find: () => [{ line: 1, snippet: "renomeie para .ts" }],
    },
    {
        id: "export-nomeado",
        title: "export default fora de page.tsx e layout.tsx",
        hint: "Use export function Nome. export default só em page.tsx e layout.tsx.",
        files: () => codeFiles.filter((f) => !isPageOrLayout(f)),
        find: ({ clean }) => linesMatching(clean, /^export default\b/),
    },
    {
        id: "arquivo-curto",
        title: `Arquivo com mais de ${MAX_LINES} linhas`,
        hint: "Divida em componentes ou funções menores, cada um no seu arquivo.",
        files: () => componentFiles,
        find: ({ raw }) => {
            const total = raw.split("\n").length;
            return total > MAX_LINES
                ? [{ line: 1, snippet: `${total} linhas` }]
                : [];
        },
    },
    {
        id: "sem-any",
        title: "Uso de any ou @ts-ignore",
        hint: "Tipe corretamente. any e @ts-ignore são proibidos.",
        files: () => codeFiles,
        find: ({ raw }) =>
            linesMatching(raw, /:\s*any\b|<any>|\bas any\b|@ts-ignore/),
    },
    {
        id: "cores-do-tailwind",
        title: "Cor fora da paleta da plataforma",
        hint: "Use só as cores do globals.css (bg-surface, text-title, text-primary, text-danger...). Texto secundário: text-foreground/70.",
        files: () => tsxFiles,
        find: ({ clean }) =>
            linesMatching(
                clean,
                new RegExp(
                    `\\b(?:${UTILITIES})-(?:(?:${PALETTE})(?:-\\d{2,3})?|${FAKE_TOKENS})(?![\\w-])`,
                ),
            ),
    },
    {
        id: "cores-soltas",
        title: "Cor solta (#hex ou rgba)",
        hint: "Use uma cor da plataforma (shadow-primary/20, bg-primary...). Se faltar uma cor, crie a variável no globals.css.",
        files: () => codeFiles,
        find: ({ clean }) =>
            linesMatching(
                clean,
                /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|\brgba?\(/,
            ),
    },
    {
        id: "altura-com-dvh",
        title: "Altura de tela com vh/screen",
        hint: "Use min-h-dvh ou h-dvh: no celular o vh inclui a barra de endereço.",
        files: () => tsxFiles,
        find: ({ clean }) =>
            linesMatching(clean, /\b(min-h-screen|h-screen)\b|100vh/),
    },
    {
        id: "largura-so-no-shell",
        title: "max-w-md fora do AppShell/SubPageLayout",
        hint: "Envolva a tela no AppShell (telas com menu) ou no SubPageLayout (telas internas).",
        files: () => tsxFiles.filter((f) => !SHELL_FILES.includes(baseName(f))),
        find: ({ clean }) => linesMatching(clean, /\bmax-w-md\b/),
    },
    {
        id: "bottomnav-so-no-shell",
        title: "BottomNav usado fora do AppShell",
        hint: "O AppShell já inclui a barra inferior. Tire o <BottomNav /> da tela.",
        files: () => tsxFiles.filter((f) => baseName(f) !== "AppShell.tsx"),
        find: ({ clean }) => linesMatching(clean, /<BottomNav\b/),
    },
    {
        id: "sem-memo-manual",
        title: "useMemo, useCallback ou memo",
        hint: "O React Compiler já otimiza. Só use com motivo claro.",
        files: () => codeFiles,
        find: ({ clean }) =>
            linesMatching(clean, /\b(useMemo|useCallback)\s*\(|\bmemo\s*\(/),
    },
    {
        id: "sem-style-inline",
        title: "Prop style (CSS inline)",
        hint: "Tailwind primeiro. Se for valor dinâmico de verdade, registre na baseline com o motivo.",
        files: () => tsxFiles,
        find: ({ clean }) => linesMatching(clean, /\bstyle=\{\{/),
    },
    {
        id: "nome-de-hook",
        title: "Hook fora do padrão useXxx",
        hint: "Arquivos em hooks/ se chamam useXxx.ts e começam com use + maiúscula.",
        files: () => codeFiles.filter((f) => /\/hooks\//.test(f)),
        find: ({ file }) =>
            /^use[A-Z][A-Za-z0-9]*\.tsx?$/.test(baseName(file))
                ? []
                : [{ line: 1, snippet: `"${baseName(file)}"` }],
    },
    {
        id: "sem-segredo-no-codigo",
        title: "Segredo no código do app",
        hint: "Nunca coloque service_role, chave privada do Firebase ou segredos no app. Só valores públicos (NEXT_PUBLIC_*).",
        files: () => codeFiles,
        find: ({ raw }) =>
            linesMatching(
                raw,
                /service_role|SERVICE_ROLE|PRIVATE_KEY|BEGIN (RSA )?PRIVATE KEY|NEXT_PUBLIC_\w*(SECRET|PRIVATE|SERVICE)/,
            ),
    },
];

// Regras que olham a estrutura de pastas ou arquivos fora do src
const STRUCTURE_RULES = [
    {
        id: "raiz-da-tela",
        title: "Arquivo ou pasta fora do padrão na raiz de uma tela",
        hint: `Na raiz de src/components/<tela>/ fica só o XxxMain.tsx. O resto vai em: ${SCREEN_SUBFOLDERS.join(", ")}.`,
        find: () => {
            const base = path.join(ROOT, "src", "components");
            if (!fs.existsSync(base)) return [];
            const found = [];
            for (const screen of fs.readdirSync(base, {
                withFileTypes: true,
            })) {
                if (!screen.isDirectory() || NOT_SCREENS.includes(screen.name))
                    continue;
                for (const entry of fs.readdirSync(
                    path.join(base, screen.name),
                    { withFileTypes: true },
                )) {
                    const rel = `src/components/${screen.name}/${entry.name}`;
                    if (
                        entry.isDirectory() &&
                        !SCREEN_SUBFOLDERS.includes(entry.name)
                    ) {
                        found.push({
                            file: rel,
                            line: 1,
                            snippet: `pasta "${entry.name}" não é do padrão`,
                        });
                    }
                    if (entry.isFile() && !/Main\.tsx$/.test(entry.name)) {
                        found.push({
                            file: rel,
                            line: 1,
                            snippet: "na raiz só pode ter o XxxMain.tsx",
                        });
                    }
                }
            }
            return found;
        },
    },
    {
        id: "exportacao-estatica",
        title: 'next.config.ts sem output: "export"',
        hint: 'O Capacitor precisa da exportação estática. Acrescente output: "export" no next.config.ts.',
        find: () => {
            const file = "next.config.ts";
            if (!fs.existsSync(path.join(ROOT, file))) return [];
            const ok = /output:\s*["']export["']/.test(readRaw(file));
            return ok
                ? []
                : [{ file, line: 1, snippet: 'falta output: "export"' }];
        },
    },
    {
        id: "arquivo-secreto-no-git",
        title: "Arquivo secreto versionado no Git",
        hint: "Tire do Git (git rm --cached), coloque no .gitignore e, se já foi enviado, gere uma chave nova.",
        find: () => {
            let tracked = [];
            try {
                tracked = execSync("git ls-files", {
                    cwd: ROOT,
                    encoding: "utf8",
                })
                    .split("\n")
                    .filter(Boolean);
            } catch {
                return [];
            }
            return tracked
                .filter(
                    (f) =>
                        (/(^|\/)\.env(\.|$)/.test(f) &&
                            !f.endsWith(".env.example")) ||
                        /adminsdk.*\.json$/i.test(f) ||
                        /\.pem$/i.test(f),
                )
                .map((file) => ({
                    file,
                    line: 1,
                    snippet: "não pode ir para o Git",
                }));
        },
    },
];

function collect(rule) {
    if (rule.files) {
        return rule.files().flatMap((file) => {
            const raw = readRaw(file);
            const clean = stripComments(raw);
            return rule.find({ file, raw, clean }).map((v) => ({ file, ...v }));
        });
    }
    return rule.find();
}

const loadBaseline = () =>
    fs.existsSync(BASELINE_FILE)
        ? JSON.parse(fs.readFileSync(BASELINE_FILE, "utf8"))
        : {};

const ALL_RULES = [...RULES, ...STRUCTURE_RULES];

if (process.env.DUMP_BASELINE) {
    const dump = {};
    for (const rule of ALL_RULES) {
        const files = [...new Set(collect(rule).map((v) => v.file))];
        if (files.length)
            dump[rule.id] = Object.fromEntries(
                files.map((f) => [f, "dívida: corrigir"]),
            );
    }
    console.log(JSON.stringify(dump, null, 4));
    process.exit(0);
}

function fail(message) {
    const error = new assert.AssertionError({ message, stackStartFn: fail });
    error.stack = "";
    throw error;
}

const baseline = loadBaseline();

for (const rule of ALL_RULES) {
    test(`${rule.id}: ${rule.title}`, () => {
        const tolerated = baseline[rule.id] ?? {};
        const fresh = collect(rule).filter((v) => !(v.file in tolerated));
        if (fresh.length === 0) return;

        const list = fresh
            .map((v) => `  ${v.file}:${v.line}  ${v.snippet}`)
            .join("\n");
        fail(
            `\n\nERRO: ${rule.title}\nCOMO CORRIGIR: ${rule.hint}\n\n${list}\n`,
        );
    });
}

test("baseline: sem exceções desatualizadas", () => {
    const stale = [];
    for (const rule of ALL_RULES) {
        const stillViolating = new Set(collect(rule).map((v) => v.file));
        for (const file of Object.keys(baseline[rule.id] ?? {})) {
            if (!stillViolating.has(file)) stale.push(`  ${rule.id}: ${file}`);
        }
    }
    if (stale.length === 0) return;

    fail(
        `\n\nERRO: a baseline tem exceções que já foram corrigidas\nCOMO CORRIGIR: remova estas linhas de tests/conventions-baseline.json (o arquivo agora segue o padrão!)\n\n${stale.join("\n")}\n`,
    );
});
