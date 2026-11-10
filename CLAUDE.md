# Codly App: regras do projeto

App web (Next.js 16, React 19, TypeScript) empacotado com Capacitor para Android e iOS. A API fica em outro repositório (`codly-api`). Siga estas regras em toda alteração, sem exceção.

## Arquitetura

- Exportação estática (`output: "export"`): não use Server Actions, rotas de API do Next nem SSR dinâmico.
- O app nunca acessa o Firestore. É proibido importar `firebase/firestore` ou usar `getFirestore`, `getDoc`, `setDoc` e similares. Todo dado (perfil, XP, progresso, cursos, amigos, plano) vem da API via `src/lib/api.ts` (axios), com o token de login no cabeçalho `Authorization`.
- O Firebase no app serve **só para o login** (Firebase Auth), em `src/lib/firebase.ts`. As imagens (avatar e conteúdo) usam o Supabase Storage.
- Perfil, XP, sequência e progresso nunca são gravados pelo app: quem grava é a API, que aplica as regras de plano e de acesso.
- Variáveis `NEXT_PUBLIC_*` só recebem valores públicos. Nunca coloque `service_role`, chave privada do Firebase ou qualquer segredo no app.
- Dados do servidor sempre com React Query. Não use `useEffect` para buscar dados.
- Alias `@/` aponta para `src/`. Use sempre `@/...`, nunca imports relativos que subam pastas (`../../`).

## Estrutura de pastas

- `src/app/`: só rotas. Cada `page.tsx` apenas monta o componente principal da tela.
- `src/components/ui/`: componentes compartilhados entre telas, divididos por tipo: `navigation/` (AppShell, BottomNav, SideNav, MenuItem, SubPageLayout), `buttons/` (IconButton, ThemeToggle, Switch, SettingToggle, SegmentedControl, SearchInput, LogoutButton) e `display/` (Avatar, ProgressBar, StatPill, SettingsGroup, EmptyState, CourseIcon, StreakFlame, StreakIcon). Crie uma nova subpasta só quando nenhuma dessas servir.
- `src/components/<tela>/`: uma pasta por tela (ex.: `courses/`, `lessons/`, `friends/`, `profile/`), com tudo que só essa tela usa: componentes, hooks e chamadas à API.
- Dentro de `src/components/<tela>/`, só o `XxxMain.tsx` fica na raiz. O resto vai em subpastas:
    - `sections/`: blocos grandes da tela (ex.: `HomeHeader`, `ProfileStats`).
    - `components/`: peças menores usadas pelas sections (ex.: `CourseCard`, `ProfileStatCard`).
    - `data/`: dados fictícios (`mock-data.ts`) enquanto a tela não usa a API.
    - `types/`: tipos da tela, em `index.ts` (o import fica `@/components/<tela>/types`).
    - `schemas/`: validações `zod` dos formulários.
    - `hooks/`: hooks usados só por essa tela. Crie a subpasta quando houver o primeiro hook.
- `src/hooks/`: hooks globais usados em várias telas (ex.: autenticação, `useProfile`, `useSummary`, `useSettings`, `useUpdateSettings`, `useCourses`, `useSetEnrollment`, `useFriends`). Hooks que chamam a API ou que mais de uma tela deve usar ficam aqui, num arquivo `useXxx.ts` (o arquivo do `useFriends` é `useFriend.ts`).
- A sequência diária sempre usa o `StreakIcon` de `ui/display/` (chama com mais de 3 dias, raio nas sequências curtas). Não copie essa regra nem o `StreakFlame` para dentro de uma tela.
- Planos: existem só o gratuito (`free`) e o Pro (`pro`). Quem decide o acesso e o limite de cursos é a API. O app nunca calcula plano nem limite: mostra o `lockReason` (`plan` ou `limit`) que a API devolve em cada curso, com as mensagens em `courses/data/lock-messages.ts`, e deixa a API recusar o pedido (`403`).
- XP, nível, sequência, meta do dia e cursos ativos da tela inicial e do perfil vêm do resumo da API (`useSummary`, `GET /me/summary`). O app nunca calcula nível nem sequência: só mostra o que recebe. Nome e foto vêm de `GET /me` (`name` e `photoURL`).
- Ícone de curso é sempre o `CourseIcon` de `ui/display/`, escolhido pela chave `iconKey` que a API devolve.
- Remover um curso não apaga o progresso: a API só marca o curso como não ativo. Diga isso ao usuário na confirmação.
- Estados vazios usam o `EmptyState` de `ui/display/`, sem montar um bloco novo em cada tela.
- Buscas em listas usam o `SearchInput` de `ui/buttons/` e comparam o texto com o `normalizeText` de `src/lib/normalize-text.ts`, para ignorar acentos e maiúsculas. Não escreva campo de busca nem comparação de texto nova em cada tela.
- Trilhas dos cursos ficam em `src/components/trail/data/` (uma por curso, registrada em `trails.ts`). O status de cada lição (feita, atual ou bloqueada) é sempre calculado a partir do `lessonsDone` que a API devolve, nunca guardado no app. O cadeado na trilha é só visual: quem bloqueia o conteúdo da lição é a API.
- Animações que se repetem (pulso, balão, chama) usam `useReducedMotion` do `framer-motion` e ficam paradas para quem pediu menos movimento no sistema.
- Telas internas (abertas a partir de outra tela, como `preferences/`, `settings/` e `security-privacy/`) usam o `SubPageLayout` de `ui/navigation/`, que traz o título e o botão de voltar. Não repita esse cabeçalho em cada tela.
- Listas de opções (rótulo, descrição e chave de cada interruptor) ficam em `data/` da tela, e a section apenas percorre a lista. Não repita um `SettingToggle` escrito à mão para cada opção.
- Preferências do usuário (privacidade, preferências e notificações) são gravadas pela API em `PATCH /me/settings`, nunca no app. Use `useUpdateSettings`, que atualiza a tela na hora e desfaz se a API falhar. Quem aplica as flags de privacidade é a API, nunca o app.
- `src/components/auth/`: proteção de rotas (`AuthGuard`).
- `src/lib/`: infraestrutura sem interface (api, Firebase Auth, Supabase, query client) e utilitários puros sem tela, como `normalize-text.ts`.
- `src/providers/`: providers que envolvem o app.
- `src/theme/`: tema do MUI.
- `src/types/`: tipos globais.

## Componentes: um arquivo por componente

- Um componente por arquivo, sem exceção. Nunca declare vários componentes no mesmo arquivo.
- O arquivo principal da tela (ex.: `CoursesMain.tsx`) só compõe os componentes menores, cada um em seu próprio arquivo nas subpastas da tela (`sections/CourseList.tsx`, `sections/CourseFilters.tsx`, `components/CourseCard.tsx`).
- Nome do arquivo = nome do componente, em PascalCase e em inglês. Hooks em `useXxx.ts`.
- Arquivos curtos e focados. Se um arquivo passa de cerca de 100 linhas, divida.
- Props tipadas com `interface` no próprio arquivo do componente. Sem `any`.
- Prefira `export function Nome` (exportação nomeada). `export default` só em `page.tsx` e `layout.tsx`.
- Marque `"use client"` apenas nos arquivos que realmente precisam (estado, efeitos, eventos).
- O React Compiler está ativo: não use `useMemo`, `useCallback` nem `memo` por padrão.

## Reutilização primeiro

- Antes de criar um componente, procure em `src/components/ui/` e na pasta da tela se já existe algo parecido.
- Se algo é (ou pode ser) usado em mais de uma tela, crie em `src/components/ui/`, genérico e controlado por props.
- Se for usado só em uma tela, mantenha na pasta dessa tela, mas escreva de forma que dê para mover para `ui/` depois.
- Evite duplicar trechos de JSX: extraia um componente.

## Estilo e cores

- **Tailwind sempre primeiro.** O prop `style` e CSS inline são o último recurso, só quando o Tailwind não resolve (valor realmente dinâmico em tempo de execução, por exemplo largura calculada de uma barra de XP).
- Use o MUI só para componentes complexos que o Tailwind não cobre bem (modal, menu, seletor de data, etc.). Estilize o MUI pelo tema em `src/theme/theme.ts`, não por `sx` espalhado.
- **Use sempre as cores da plataforma**, definidas em `src/app/globals.css`. Nunca use cores soltas (`#fff`, `bg-purple-500`, `text-gray-700`) nem valores arbitrários (`bg-[#7c3aed]`).

| Classe Tailwind | Uso |
| --- | --- |
| `bg-background` / `text-foreground` | Fundo da tela e texto padrão |
| `bg-surface` | Cards e superfícies (lavanda no claro, roxo escuro no escuro) |
| `bg-selection` | Item selecionado |
| `text-title` | Títulos |
| `bg-primary` / `text-primary` | Ações e progresso (`#7C3AED`) |
| `bg-primary-strong` / `text-primary-strong` | Ativos e destaques (`#5B21B6`) |
| `text-on-primary` | Texto sobre fundo primário |
| `text-flame` / `bg-flame` | Chama da sequência diária (laranja, claro e escuro) |
| `text-danger` | Mensagens de erro (vermelho, claro e escuro) |

Use apenas classes de cor desta tabela. Classes como `text-muted` só podem ser usadas depois de existirem no `globals.css`. Para texto secundário, use `text-foreground/70`.

- Tema claro e escuro funcionam automaticamente pelas variáveis. Evite `dark:` quando uma classe acima já resolve. Use `dark:` só quando não houver variável adequada.
- Se faltar uma cor, adicione a variável em `:root` e `.dark` no `globals.css` e o mapeamento em `@theme inline`, em vez de usar um valor solto.
- Layout responsivo, pensando primeiro em celular (`mobile first`).
- Todas as telas funcionam no celular e na web com o mesmo código. Escreva primeiro para o celular e acrescente `md:` só quando o layout mudar. Telas com navegação usam o `AppShell` de `ui/navigation/` (barra inferior no celular, menu lateral a partir de `md`) e telas internas usam o `SubPageLayout`. Não escreva `max-w-md` nem `<BottomNav />` direto numa tela, e não repita o `AppShell` por fora de outro `AppShell`.
- Os itens do menu ficam só em `ui/navigation/nav-items.ts`, usados pela barra inferior e pelo menu lateral. Para uma tela nova aparecer no menu, acrescente lá.
- Listas de cards usam `flex flex-col gap-3 md:grid md:grid-cols-2`, para aproveitar a largura do computador.
- Altura de tela cheia com `min-h-dvh` ou `h-dvh`, nunca `min-h-screen` ou `h-screen` (no celular o `vh` inclui a barra de endereço).
- Campos de texto com `text-base` (16 px): abaixo disso o Safari do iPhone dá zoom ao focar.
- Diferenças de plataforma se resolvem com CSS responsivo. Use `Capacitor.isNativePlatform()` só quando o comportamento muda de verdade (por exemplo, o login com Google).
- Botão de sair é sempre o `LogoutButton` de `ui/buttons/` (`variant="card"` ou `"nav"`, e `className` só para ajustes como `mt-auto`). Não crie outro.
- Sombras e brilhos usam as cores do tema (`shadow-primary/20`), nunca `rgba(...)`. A única exceção são as cores oficiais do logo do Google.

## Código

- TypeScript estrito. Sem `any`, sem `@ts-ignore`.
- Formatação e lint com Biome (`npm run lint`, `npm run format`). Rode antes de finalizar, junto com `npm test` (verificação dos padrões, abaixo).
- Textos da interface em português do Brasil. Nomes de código (arquivos, variáveis, componentes) em inglês.
- Validação de formulários com `react-hook-form` + `zod`.
- Ícones com `react-icons`. Animações com `framer-motion`. O pacote `motion` (importado de `motion/react`) também está instalado e hoje só o `AuthGuard` o usa. Em código novo, prefira `framer-motion`.
- Não instale bibliotecas novas sem avisar e justificar.

## Verificação automática dos padrões

- O teste `tests/conventions.test.mjs` confere estas regras. Rode `npm test` antes de commitar. Ele mostra, para cada erro, o arquivo, a linha e como corrigir.
- Os hooks de `.githooks/` rodam sozinhos: na `develop` e em outras branches apenas **avisam**, e na `main` **bloqueiam** o commit e o envio. A ação `.github/workflows/padroes.yml` roda em todo Pull Request para a `main`. Não desligue nem contorne uma verificação sem avisar e justificar. `--no-verify` só em emergência, e o erro volta no Pull Request.
- Se uma regra reclama de algo **legítimo**, registre em `tests/conventions-baseline.json` com o motivo (`exceção: ...` para o que é justificado, `dívida: ...` para o que precisa ser corrigido). Não afrouxe a regra. Quando corrigir uma dívida, tire a linha da lista (o teste exige).
- Regra nova de padrão entra no `CLAUDE.md` **e** em `tests/conventions.test.mjs`, juntos, para o documento e a verificação não se separarem.
- Os arquivos de `.githooks/` usam final de linha LF e precisam ser executáveis (`.gitattributes` e `git update-index --chmod=+x`). Com CRLF o hook não reconhece a branch e deixa de bloquear na `main`.
- Pastas e arquivos de tela seguem o padrão em minúsculas (`sections`, nunca `Sections`). O deploy e o GitHub rodam em Linux, que diferencia maiúscula de minúscula, e no Windows isso passa despercebido.

## Logo e ícones

- A logo oficial é `public/icons/logo.svg` (esfera roxa com o "C" da fonte Fredoka, convertido em curvas e concêntrico com a esfera). Use sempre esse arquivo ou os PNGs gerados a partir dele em `public/icons/` (`logo.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` e `apple-touch-icon.png`). Não redesenhe o "C" nem troque a fonte à mão.
- O favicon fica em `src/app/favicon.ico` e o Next.js o usa sozinho. Se a logo mudar, gere de novo o SVG, os PNGs e o favicon juntos.
