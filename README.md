
<div align="center">

# Codly Tecnologia Educacional

**Tecnologia, educação e inovação no aprendizado de programação.**

Transformando o aprendizado de programação em uma experiência acessível, prática e divertida.

</div>

---

## Sobre a Codly

A **Codly** é uma iniciativa de tecnologia educacional responsável pelo desenvolvimento de uma plataforma gamificada de aprendizado de programação.

Nosso propósito é tornar o conhecimento em programação mais acessível, interativo e envolvente, incentivando pessoas a desenvolverem suas habilidades tecnológicas por meio de experiências práticas.

Diferentemente das plataformas tradicionais de cursos, a Codly propõe uma jornada de aprendizado baseada em **lições curtas, desafios interativos, atividades práticas e evolução contínua**.

### Nossa missão

**Simplificar o aprendizado de programação e transformar conhecimento em oportunidades por meio da tecnologia.**

Acreditamos que aprender a programar deve ser uma experiência acessível, estimulante e adaptada à rotina de cada pessoa.

## O aplicativo Codly

O **Codly** é uma plataforma de aprendizado gamificado que combina educação, tecnologia e elementos de jogos para tornar o processo de aprendizagem mais dinâmico.

Entre os recursos planejados e desenvolvidos para o aplicativo, destacam-se:

- **Lições rápidas:** conteúdos objetivos que facilitam o aprendizado diário.
- **Desafios práticos:** atividades que incentivam a aplicação do conhecimento.
- **Sistema de XP:** pontos de experiência que acompanham a evolução do usuário.
- **Sequência diária:** incentivo à constância e à disciplina nos estudos.
- **Rankings e conquistas:** elementos de gamificação que estimulam o progresso.
- **Aprendizado progressivo:** evolução estruturada, respeitando diferentes níveis de conhecimento.

Nosso objetivo é proporcionar uma experiência em que aprender, praticar e evoluir façam parte da rotina.

## Tecnologias e ferramentas

Trabalhamos com tecnologias modernas para o desenvolvimento de aplicações web, sistemas, soluções educacionais e ferramentas digitais.

<div align="left">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg" alt="Capacitor" title="Capacitor" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" title="Python" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" title="Firebase" width="34" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" title="Supabase" width="34" />

</div>

> As tecnologias apresentadas representam o ecossistema técnico do projeto e podem variar conforme as necessidades de cada aplicação.

## Bibliotecas

### Interface e animações

- `@mui/material`: biblioteca de componentes de interface (botões, modais, formulários) seguindo o Material Design.
- `@emotion/react`: motor de estilos CSS-in-JS exigido pelo Material UI.
- `@emotion/styled`: API `styled` do Emotion, usada pelo Material UI para estilizar componentes.
- `@mui/material-nextjs`: integração do Material UI com o App Router do Next.js, evitando flash de estilo no SSR.
- `react-icons`: coleção de ícones populares (Font Awesome, Material, etc.) como componentes React.
- `framer-motion`: biblioteca de animações e transições declarativas para React.
- `motion`: novo nome do `framer-motion`, importado de `motion/react`. Hoje só o `AuthGuard` o usa. As duas estão instaladas, e o ideal é unificar numa só.
- `next-themes`: gerencia o tema claro/escuro, persistindo a escolha do usuário.

### Firebase (login)

- `firebase`: SDK de cliente do Firebase, usado **só para o Firebase Auth** (login com Google e com e-mail e senha). O app não acessa o Firestore: os dados passam pela API.

### Supabase (usuários e imagens)

- `@supabase/supabase-js`: cliente oficial do Supabase, usado para o Storage de imagens (avatar e conteúdo).
- `@supabase/ssr`: guarda a sessão do Supabase em cookies, permitindo usá-la no servidor e no cliente do Next.js.

### Capacitor (apps Android e iOS)

- `@capacitor/core`: núcleo do Capacitor, que embute o app web em um aplicativo nativo.
- `@capacitor/app`: acesso a eventos do app (abrir por link, botão voltar, pausa/retomada), usado no retorno do login OAuth.
- `@capacitor/browser`: abre o navegador do sistema, necessário para o fluxo de login com Google no celular.
- `@capacitor/splash-screen`: controla a tela de abertura (splash) do aplicativo.
- `@capacitor/status-bar`: personaliza a barra de status do dispositivo (cor e estilo).
- `@capacitor/preferences`: armazenamento local simples de chave e valor, usado para guardar dados de sessão.
- `@capacitor/cli`: ferramenta de linha de comando para sincronizar o projeto e gerar os projetos nativos.
- `@capacitor/android`: plataforma Android do Capacitor, que gera o projeto para o Android Studio.
- `@capacitor/ios`: plataforma iOS do Capacitor, que gera o projeto para o Xcode.

### PWA

- `@serwist/next`: integra o Service Worker ao Next.js, permitindo instalar o app e usá-lo offline.
- `serwist`: biblioteca base de Service Worker que dá suporte ao `@serwist/next`.

### Formulários, dados e utilitários

- `react-hook-form`: gerenciamento de formulários com bom desempenho e poucas re-renderizações.
- `zod`: validação e tipagem de dados em TypeScript, usada nos formulários e nas respostas da API.
- `@hookform/resolvers`: conecta o Zod (e outros validadores) ao React Hook Form.
- `@tanstack/react-query`: busca, cache e sincronização de dados vindos do servidor.
- `axios`: cliente HTTP usado para chamar a API da Codly, com interceptadores para enviar o token de login.
- `date-fns`: funções para manipular e formatar datas, usadas na sequência diária e no histórico.
- `clsx`: monta nomes de classes CSS de forma condicional.

## Estrutura do projeto

```
codly-app/
├─ .env.example
├─ .gitattributes
├─ .github/
│  └─ workflows/
│     └─ padroes.yml
├─ .githooks/
│  ├─ pre-commit
│  └─ pre-push
├─ .gitignore
├─ biome.json
├─ capacitor.config.ts
├─ CLAUDE.md
├─ next.config.ts
├─ package.json
├─ tsconfig.json
├─ scripts/
│  └─ setup-hooks.mjs
├─ tests/
│  ├─ conventions.test.mjs
│  ├─ conventions-baseline.json
│  └─ reporter.mjs
├─ public/
│  ├─ manifest.webmanifest
│  └─ icons/              logo.svg, logo.png, icon-192, icon-512, icon-maskable-512, apple-touch-icon
└─ src/
   ├─ app/
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  ├─ globals.css
   │  ├─ favicon.ico
   │  ├─ login/
   │  │  └─ page.tsx
   │  ├─ profile/
   │  │  └─ page.tsx
   │  ├─ courses/
   │  │  └─ page.tsx
   │  ├─ trail/
   │  │  └─ page.tsx
   │  ├─ friends/
   │  │  └─ page.tsx
   │  ├─ preferences/
   │  │  └─ page.tsx
   │  ├─ settings/
   │  │  └─ page.tsx
   │  └─ security-privacy/
   │     └─ page.tsx
   ├─ components/
   │  ├─ auth/
   │  │  └─ AuthGuard.tsx
   │  ├─ home/
   │  │  ├─ HomeMain.tsx
   │  │  ├─ sections/        HomeHeader, DailyGoalCard, ContinueCard, CourseList
   │  │  └─ components/      CourseCard
   │  ├─ courses/
   │  │  ├─ CoursesMain.tsx
   │  │  ├─ sections/        MyCoursesSection, ExploreCoursesSection
   │  │  ├─ components/      EnrolledCourseCard, CatalogCourseCard, AddCourseButton, RemoveCourseButton
   │  │  ├─ data/            mock-data.ts, lock-messages.ts
   │  │  └─ types/           index.ts
   │  ├─ trail/
   │  │  ├─ TrailMain.tsx
   │  │  ├─ sections/        TrailSummary, TrailUnitSection
   │  │  ├─ components/      UnitBanner, TrailNode, TrailConnector, NodePulse, StartBubble
   │  │  ├─ data/            sql-trail.ts, trails.ts, trail-layout.ts, trail-progress.ts
   │  │  └─ types/           index.ts
   │  ├─ friends/
   │  │  ├─ FriendsMain.tsx
   │  │  ├─ sections/        FriendsHeader, FriendsSearch, FriendsList
   │  │  ├─ components/      FriendCard
   │  │  ├─ data/            mock-data.ts
   │  │  └─ types/           index.ts
   │  ├─ rank/
   │  │  └─ RankMain.tsx     (placeholder, ainda sem rota)
   │  ├─ login/
   │  │  ├─ LoginMain.tsx
   │  │  └─ sections/        LoginHeader, LoginForm
   │  ├─ profile/
   │  │  ├─ ProfileMain.tsx
   │  │  ├─ sections/        ProfileHeader, ProfileStats, ProfileLevelCard, ProfileMenu
   │  │  ├─ components/      ProfileName, ProfileStatCard, EditNameForm
   │  │  ├─ schemas/         name-schema.ts
   │  │  ├─ data/            plan-labels.ts
   │  │  └─ types/           index.ts
   │  ├─ preferences/
   │  │  ├─ PreferencesMain.tsx
   │  │  ├─ sections/        AppearanceSection, DailyGoalSection, ExperienceSection
   │  │  └─ data/            goal-options.ts, experience-options.ts
   │  ├─ settings/
   │  │  ├─ SettingsMain.tsx
   │  │  ├─ sections/        NotificationsSection, AccountSection
   │  │  ├─ components/      DeleteAccountButton
   │  │  └─ data/            notification-options.ts
   │  ├─ security-privacy/
   │  │  ├─ SecurityPrivacyMain.tsx
   │  │  ├─ sections/        PrivacySection, SecuritySection
   │  │  ├─ components/      EmailStatusRow, PasswordResetRow
   │  │  └─ data/            privacy-options.ts
   │  └─ ui/
   │     ├─ navigation/      AppShell, BottomNav, SideNav, nav-items.ts, MenuItem, SubPageLayout
   │     ├─ buttons/         IconButton, ThemeToggle, Switch, SettingToggle, SegmentedControl, SearchInput, LogoutButton
   │     └─ display/         Avatar, ProgressBar, StatPill, SettingsGroup, EmptyState, CourseIcon, StreakFlame, StreakIcon
   ├─ hooks/
   │  ├─ useProfile.ts
   │  ├─ useUpdateName.ts
   │  ├─ useSettings.ts
   │  ├─ useUpdateSettings.ts
   │  ├─ useCourses.ts
   │  ├─ useSetEnrollment.ts
   │  ├─ useSummary.ts
   │  └─ useFriend.ts
   ├─ types/
   │  ├─ settings.ts
   │  └─ summary.ts
   ├─ lib/
   │  ├─ api.ts
   │  ├─ firebase.ts
   │  ├─ query-client.ts
   │  ├─ normalize-text.ts
   │  └─ supabase/
   ├─ providers/
   │  ├─ Providers.tsx
   │  └─ ThemeSync.tsx
   └─ theme/
      └─ theme.ts
```

### Arquivos de configuração (raiz do projeto)

| Arquivo | Para que serve |
| --- | --- |
| `package.json` | Lista as bibliotecas do projeto e os comandos: `npm run dev` (servidor local), `npm run build` (gera o app), `npm run lint` (confere o código com o Biome), `npm run format` (formata o código), `npm test` (verifica os padrões do projeto) e `prepare` (liga os hooks do Git sozinho no `npm install`). |
| `package-lock.json` | Trava a versão exata de cada biblioteca instalada, para todo mundo e o deploy usarem as mesmas. Não edite à mão. |
| `next.config.ts` | Configuração do Next.js. Hoje liga o **React Compiler** (`reactCompiler`), que otimiza os componentes sozinho (por isso não usamos `useMemo` nem `useCallback`), e registra o loader do **Tailwind** no Turbopack (`@tailwindcss/turbopack`) para processar os `.css`. O `allowedDevOrigins` libera a rede local (`192.168.1.*`) para abrir o servidor de desenvolvimento pelo celular, e o `images.unoptimized` é necessário para a exportação estática. |
| `capacitor.config.ts` | Configuração do Capacitor, que embute o app web em um aplicativo Android e iOS: define o `appId`, o nome do app e a pasta do build (`webDir: "out"`). Hoje o arquivo está **vazio** e precisa ser preenchido antes de rodar `npx cap sync`. |
| `tsconfig.json` | Configuração do TypeScript: modo estrito, suporte ao JSX do React e o alias `@/` que aponta para `src/`. É por causa dele que os imports são `@/components/...`. |
| `biome.json` | Configuração do Biome, que faz o lint e a formatação: indentação de 4 espaços, regras recomendadas para Next.js e React, organização automática dos imports e `lineEnding: "auto"`, para o Biome não acusar o final de linha do Windows (CRLF). |
| `.gitattributes` | Obriga os arquivos de `.githooks/` e os `.mjs` a usarem final de linha LF. Sem isso, no Windows os hooks ficam com CRLF e quebram (a branch lida ganha um `\r` e a comparação com `main` nunca é verdadeira). |
| `.githooks/` | Hooks do Git versionados: `pre-commit` (roda o `npm test` e o Biome nos arquivos do commit) e `pre-push` (confere os tipos com o `tsc`). Fora da `main` só avisam. Na `main` bloqueiam. Ver **Verificação automática dos padrões**. |
| `tests/` | Teste dos padrões do projeto (`conventions.test.mjs`), o relatório de erro limpo (`reporter.mjs`) e a lista de exceções conhecidas (`conventions-baseline.json`). |
| `scripts/setup-hooks.mjs` | Roda no `npm install` (script `prepare`) e aponta o Git para a pasta `.githooks`. Se não houver Git (como no deploy), não faz nada. |
| `.github/workflows/padroes.yml` | Ação do GitHub que roda o teste dos padrões e o `tsc` em todo Pull Request para a `main` e nos envios para `main` e `develop`. |
| `.env.example` | Modelo das variáveis de ambiente (API, Supabase e Firebase). Copie para `.env.local` e preencha. Só valores públicos (`NEXT_PUBLIC_*`). |
| `.gitignore` | Arquivos que não vão para o Git: `node_modules`, builds (`.next`, `out`), variáveis de ambiente (`.env*`), arquivos gerados pelo TypeScript e a chave de serviço do Firebase. |
| `CLAUDE.md` | Regras de arquitetura, de organização das pastas, de componentes e de estilo do projeto. Vale para qualquer pessoa, e para o Claude Code, antes de alterar o código. |
| `LICENSE` | Licença e direitos de uso do código. |

Arquivos gerados automaticamente, que não se editam e não vão para o Git: `next-env.d.ts` (tipos do Next.js) e `tsconfig.tsbuildinfo` (cache do TypeScript). O Tailwind 4 não precisa de `tailwind.config` nem de `postcss.config`: a configuração das cores fica no `src/app/globals.css`.

> **Pendente para gerar o Android e o iOS:** para o Capacitor empacotar o app, o `next.config.ts` precisa gerar a exportação estática (`output: "export"` e `trailingSlash`; o `images.unoptimized` já está) e o `capacitor.config.ts` precisa ser preenchido. O teste dos padrões já avisa sobre o `output: "export"` (está na lista de exceções como dívida).

### Verificação automática dos padrões

O projeto confere sozinho se o código segue as regras do `CLAUDE.md`. O mesmo teste (`tests/conventions.test.mjs`) roda em três lugares:

| Onde | Quando | Na `develop` e outras branches | Na `main` |
| --- | --- | --- | --- |
| Hook `pre-commit` | A cada `git commit` | **Avisa** e o commit passa | **Bloqueia** o commit |
| Hook `pre-push` | A cada `git push` (confere os tipos com o `tsc`) | **Avisa** e o envio segue | **Bloqueia** o envio |
| Ação do GitHub (`padroes.yml`) | Em todo Pull Request para a `main` | Informativo (X ou ✔) | Pode ser exigida na proteção da branch (Settings, Branches) |

**O que ele confere (21 verificações):** nada de Firestore no app, sem `../` nos imports, um componente por arquivo, nome do arquivo igual ao componente, só o `XxxMain.tsx` na raiz da tela, `export default` só em `page` e `layout`, arquivos de até 120 linhas, sem `any`, só as cores da plataforma, sem cor solta (`#hex` ou `rgba`), `dvh` em vez de `vh`, `max-w-md` só no `AppShell` e no `SubPageLayout`, `BottomNav` só no `AppShell`, sem `useMemo` e `useCallback`, sem CSS inline, hooks `useXxx`, tipos em `.ts`, segredos fora do código, arquivos secretos fora do Git e o `output: "export"` do Next.

**Como usar:**

- `npm test` roda tudo na hora (leva menos de um segundo) e mostra, para cada erro, o arquivo, a linha e **como corrigir**.
- Os hooks são ligados sozinhos no `npm install`.
- Para pular de propósito: `git commit --no-verify` ou `git push --no-verify`. Na `develop` normalmente nem é preciso, porque só avisa. O erro não some: ele aparece de novo no Pull Request para a `main`.

**Lista de exceções (`tests/conventions-baseline.json`):** guarda o que já está fora do padrão ou é uma exceção justificada, para a verificação não travar o que já existia. Cada entrada tem o **motivo**, começando com `dívida:` (a corrigir) ou `exceção:` (justificada, como as cores oficiais do logo do Google e o `themeColor` do navegador). Regra nova que não esteja na lista falha. Quando uma dívida é corrigida, o teste exige tirá-la da lista, então ela só diminui.

### Para que serve cada pasta e arquivo

| Caminho | Função |
| --- | --- |
| `public/` | Arquivos servidos como estão: manifest da PWA, ícones e imagens fixas. |
| `public/icons/` | Logo e ícones do app. `logo.svg` é a logo oficial (esfera roxa com o "C" da fonte Fredoka, convertido em curvas e concêntrico com a esfera) e é o arquivo de origem de todos os outros. `logo.png` (1024 px, fundo transparente) serve onde só se aceita imagem. `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` e `apple-touch-icon.png` são os ícones do PWA, apontados pelo manifest. O `layout.tsx` ainda precisa do campo `icons` (ícone da tela inicial do iPhone). |
| `src/app/favicon.ico` | Ícone da aba do navegador (16, 32 e 48 px), com o "C" maior e sem sombra para ficar nítido em tamanho pequeno. O Next.js usa este arquivo sozinho. |
| `public/manifest.webmanifest` | Manifest da PWA: descreve o app ao navegador (nome, ícones, cores e modo de exibição) para que ele possa ser instalado na tela inicial e abrir em tela cheia, sem a barra do navegador. Vale só para a versão web; os apps Android e iOS gerados pelo Capacitor usam os ícones dos projetos nativos. |
| `src/app/` | Rotas e páginas (App Router). Cada pasta vira uma rota, e `layout.tsx` envolve todas as telas. |
| `src/app/globals.css` | Estilos globais: Tailwind, variáveis de cor e ordem de camadas entre o Tailwind e o MUI. |
| `src/app/login/` | Rota `/login`: só monta o componente da tela de login. |
| `src/components/auth/` | Proteção de rotas: o `AuthGuard` verifica a sessão do Firebase Auth e manda quem não está logado para `/login`. |
| `src/app/profile/` | Rota `/profile`: protegida pelo `AuthGuard`, só monta o `ProfileMain`. É aberta pelo botão Perfil da barra de navegação. |
| `src/components/home/` | Tela inicial: `HomeMain` compõe o cabeçalho (nome e foto do `GET /me`, e sequência, XP e nível do resumo), a meta diária, o card de continuar (o curso mexido por último, que abre a trilha) e a lista de cursos ativos (em `sections/`), com a peça menor `CourseCard` (em `components/`). Tudo vem do resumo da API (`useSummary`), sem dados fictícios. Quem não tem curso vê um aviso com o botão Explorar cursos. A sequência diária usa o `StreakIcon` de `ui/display/`. |
| `src/app/courses/` | Rota `/courses`: protegida pelo `AuthGuard`, só monta o `CoursesMain`. É aberta pelo botão Cursos da barra de navegação. |
| `src/components/courses/` | Tela de cursos, onde o usuário gerencia os cursos dele. Duas abas: **Meus cursos** (progresso, Continuar, que abre a trilha, e Remover com confirmação, mantendo o progresso salvo) e **Explorar** (barra de busca por título e descrição, que ignora acentos e maiúsculas, e Adicionar). Cada curso vem da API com um `lockReason`: `plan` (curso exclusivo do plano Pro) ou `limit` (o plano gratuito atingiu o limite de cursos ao mesmo tempo), e a tela só mostra a mensagem (`data/lock-messages.ts`). Quem aplica as regras é a API. Os ícones são escolhidos pela chave `iconKey`, pelo `CourseIcon` de `ui/display/`, que a tela inicial também usa. Enquanto a API não responde, usa dados fictícios (`data/mock-data.ts`) e mostra um aviso. |
| `src/app/trail/` | Rota `/trail?course=<id>`: protegida pelo `AuthGuard`, só monta o `TrailMain`. O curso vem da URL (por isso a página usa `Suspense`, exigido pela exportação estática). |
| `src/components/trail/` | Trilha do curso, em estilo de caminho. Cada unidade (`TrailUnitSection`) tem um banner (`UnitBanner`) e as lições em zigue-zague (`NODE_X` em `data/trail-layout.ts`), ligadas por uma linha pontilhada curva (`TrailConnector`) que fica roxa até onde o aluno já chegou. Cada lição (`TrailNode`) pode estar **feita** (check), **atual** (play, com pulso e o balão "Começar") ou **bloqueada** (cadeado), e o último item de cada unidade é um desafio, maior e com troféu. O status vem do `lessonsDone` do curso (`withProgress` em `data/trail-progress.ts`), e o resumo no topo mostra progresso, próxima lição e XP ganho. Hoje existe só a trilha de SQL, com 6 unidades e 24 lições fixas (`data/sql-trail.ts`, registrada em `data/trails.ts`). Cursos sem trilha mostram "Trilha em construção". As animações respeitam a preferência de movimento reduzido do sistema. Tocar numa lição leva a `/lessons`, que ainda não existe. |
| `src/app/friends/` | Rota `/friends`: só monta o `FriendsMain`. É aberta pelo botão Amigos do menu. |
| `src/components/friends/` | Tela de amigos: `FriendsMain` compõe o cabeçalho, a busca (por nome, usuário ou código, sem acento nem maiúscula, com `normalizeText`) e a lista de pessoas (`FriendCard`), com ações de enviar pedido, ver perfil e mensagem. Hoje usa dados fictícios (`data/mock-data.ts`) pelo hook `useFriends`, e o perfil público e as mensagens ainda mostram só um aviso. |
| `src/components/rank/` | Tela de ranking: por enquanto só o `RankMain`, um placeholder. O menu já aponta para `/ranking`, mas a rota (`src/app/ranking/page.tsx`) ainda não existe. |
| `src/components/login/` | Tela de login e cadastro (Google e e-mail e senha). `LoginMain` monta o cartão centralizado, que tem o próprio layout (sem menu), e as sections `LoginHeader` e `LoginForm` ficam em `sections/`. |
| `src/components/profile/` | Tela de perfil: `ProfileMain` compõe o cabeçalho (avatar, nome com edição, e-mail e plano), as estatísticas, o progresso de nível, o menu (preferências, configurações e segurança e privacidade) e o botão de sair. A edição do nome usa `react-hook-form` + `zod` (`schemas/`) e a API (`PATCH /me`). Nome, e-mail e foto vêm do Firebase Auth, e o plano, o XP, o nível e a sequência vêm do resumo da API (`useSummary`). O texto do plano fica em `data/plan-labels.ts`. |
| `src/app/preferences/`, `src/app/settings/`, `src/app/security-privacy/` | Rotas `/preferences`, `/settings` e `/security-privacy`: protegidas pelo `AuthGuard`, abertas pelo menu do perfil. |
| `src/components/preferences/` | Preferências de estudo: tema (claro, escuro ou sistema), meta diária de XP (20, 50 ou 100), efeitos sonoros e reduzir animações. |
| `src/components/settings/` | Configurações da conta: notificações (lembrete de estudo, conquistas e atividade dos amigos) e exclusão da conta, com confirmação em dois passos. |
| `src/components/security-privacy/` | Privacidade e segurança: flags de privacidade (mostrar online, mostrar o curso atual, aparecer no ranking, mostrar a sequência e permitir pedidos de amizade), status do e-mail e redefinição de senha por e-mail (só para quem entra com e-mail e senha). |
| `src/components/ui/navigation/AppShell.tsx` | Casca de layout das telas principais (Início, Cursos, Ranking, Amigos e Perfil, itens de `nav-items.ts`): mostra a barra inferior no celular e o menu lateral a partir de 768 px (`md`), e define a largura do conteúdo (coluna estreita no celular, mais larga no computador), já respeitando a área segura do celular. A tela só passa o conteúdo. As telas internas usam o `SubPageLayout`, e o login não usa nenhum dos dois porque não tem menu. |
| `src/components/ui/` | Componentes compartilhados entre telas, divididos por tipo: `navigation/` (`AppShell`, barra inferior, menu lateral, lista de itens do menu, item de menu e layout das telas internas com botão de voltar), `buttons/` (botão de ícone, alternador de tema, interruptor, linha com interruptor, seletor segmentado, campo de busca e botão de sair, com as variantes `card` e `nav` e a prop `className`) e `display/` (avatar, barra de progresso, indicador de estatística, grupo de configurações, estado vazio e o foguinho da sequência: `StreakFlame` e `StreakIcon`, que mostra a chama com mais de 3 dias e um raio nas sequências curtas). |
| `src/hooks/` | Hooks que chamam a API com React Query: `useProfile` (`GET /me`, nome e foto), `useSummary` (`GET /me/summary`, XP, sequência, meta do dia e cursos ativos), `useUpdateName` (`PATCH /me`), `useSettings` (`GET /me/settings`), `useUpdateSettings` (`PATCH /me/settings`), `useCourses` (`GET /courses`), `useSetEnrollment` (`PUT` e `DELETE /me/courses/:courseId`, e recarrega também o resumo) e `useFriends` (amigos, hoje com dados fictícios, ainda sem a API). Os que gravam usam atualização otimista: a tela muda na hora e volta atrás se a API falhar. |
| `src/types/` | Tipos TypeScript globais usados em mais de uma tela, como `settings.ts` (privacidade, preferências e notificações) e `summary.ts` (o resumo do aluno: plano, estatísticas, meta do dia e cursos ativos). |
| `src/lib/` | Código de infraestrutura, sem interface: cliente HTTP (`api.ts`), Firebase Auth (`firebase.ts`), cache de dados (`query-client.ts`), o cliente do Supabase (`supabase/`) e o `normalize-text.ts`, que tira acentos e maiúsculas para comparar textos nas buscas. |
| `src/providers/` | Componentes que envolvem o app e fornecem recursos a todas as telas: MUI, tema claro/escuro e React Query. |
| `src/theme/` | Tema do Material UI: cores, tipografia e modo claro/escuro. |
| `.env.example` | Modelo das variáveis de ambiente. Copie para `.env.local` e preencha (o `.env` nunca vai para o Git). |

**Web e celular com o mesmo código:** o app é escrito primeiro para o celular (`mobile first`) e ganha ajustes com `md:` só onde o layout muda. A navegação troca de barra inferior para menu lateral em 768 px, as listas de cards passam para duas colunas e as telas internas ficam mais largas. A altura de tela cheia usa `dvh` (não `vh`, que no navegador do celular inclui a barra de endereço), os campos de texto têm 16 px para o iPhone não dar zoom ao focar e o foco do teclado aparece com um contorno roxo (`:focus-visible` no `globals.css`). Diferenças entre plataformas se resolvem com CSS, e só em casos de comportamento (como o login com Google no app nativo) se usa o `Capacitor.isNativePlatform()`.

**Organização dentro de cada tela:** só o arquivo `XxxMain.tsx` fica na raiz da pasta. O restante vai em subpastas: `sections/` (blocos grandes da tela), `components/` (peças menores usadas pelas sections), `data/` (dados fictícios e listas de opções), `types/` (tipos da tela) e `schemas/` (validações `zod`).

Conforme o app crescer, as próximas telas previstas são `lessons` e a rota `ranking` (o `friends` já existe, com dados fictícios), seguindo a mesma organização em subpastas. A rota em `src/app/` apenas monta o componente da tela.

### Rotas da API usadas pelas telas

| Rota | Usada por | Situação |
| --- | --- | --- |
| `GET /me` | Nome e foto (tela inicial) | Existe. Devolve `name` e `photoURL`. |
| `GET /me/summary` | Tela inicial e perfil | Existe. Devolve plano, XP, nível, sequência, meta do dia e cursos ativos. O XP do dia só vale quando as lições gravarem. |
| `PATCH /me` | Edição do nome | Existe. Grava no Supabase, no Firestore e no Firebase Auth. |
| `GET /courses` | Cursos | Existe. Devolve os cursos com o progresso e o `lockReason`. |
| `PUT /me/courses/:courseId` | Cursos (Adicionar) | Existe. `403` se o curso é do Pro ou se o limite do plano foi atingido. |
| `DELETE /me/courses/:courseId` | Cursos (Remover) | Existe. Mantém o progresso salvo. |
| `GET /me/settings` | Preferências, configurações e privacidade | A criar. Cria os padrões se o usuário ainda não tem. |
| `PATCH /me/settings` | Preferências, configurações e privacidade | A criar. Valida só os campos conhecidos. |
| `DELETE /me` | Excluir conta | A criar. Apaga Firestore, Supabase e o usuário do Firebase Auth. |
| `GET /users/search?q=` | Amigos (busca) | Existe na API, mas a tela ainda usa dados fictícios. Devolve `uid`, `name` e `avatarUrl`. |
| Pedido de amizade, lista de amigos e ranking | Amigos e Ranking | A criar. A API deve omitir online, curso atual e sequência de quem desligou a flag. |

**Planos:** existem só o gratuito e o Pro. O Pro libera os cursos avançados e mais de 2 cursos ao mesmo tempo (o gratuito tem limite). O app nunca decide isso: ele mostra o `lockReason` que a API devolve, e a API também recusa o pedido com `403`.

As flags de privacidade são aplicadas **pela API**: ao devolver amigos e ranking, ela omite online, curso atual e sequência de quem desligou. O app só mostra o que recebe.

> A API (Node.js + Firebase Admin) fica em um repositório separado, `codly-api`. Este app só se comunica com ela por HTTP.

### Como o fluxo funciona

- **Firebase Auth:** faz o login do usuário (Google e e-mail e senha) e entrega o token de acesso.
- **Supabase:** guarda os usuários da plataforma e as imagens (avatar e conteúdo).
- **Firestore:** é o banco de dados (cursos, lições, progresso, XP, amigos e plano de cada aluno). **O app nunca acessa o Firestore.** As regras do Firestore negam todo acesso de cliente.
- **API:** recebe o token, confere quem é o usuário e é a única que lê e grava no Firestore, aplicando as regras de plano, XP e progresso.

```
App ──(login Google / e-mail)──> Firebase Auth ──> token
App ──(Bearer token)──────────> codly-api ──(Firebase Admin)──> Firestore
App ──(imagens)───────────────> Supabase Storage
```

1. **Abertura:** `layout.tsx` carrega o `Providers`, que ativa o tema (claro/escuro), o MUI e o React Query em todas as telas.
2. **Login:** o usuário entra pelo Firebase Auth. O `AuthGuard` protege as telas e redireciona para `/login` quem não tem sessão.
3. **Pedido de dados:** uma tela usa o React Query, que chama `lib/api.ts`. O axios envia o token no cabeçalho `Authorization`.
4. **Validação:** a API confere o token para saber quem é o usuário.
5. **Leitura e gravação:** a API lê ou grava no Firestore e devolve o resultado, que o React Query guarda em cache e mostra na tela. Perfil, XP e progresso nunca são gravados pelo app.
6. **Imagens:** avatar e imagens de conteúdo vão ao Supabase Storage.
7. **Tema:** a escolha de tema do `next-themes` é repassada ao MUI pelo `ThemeSync`, e o Tailwind usa a mesma classe `.dark`.
8. **Android e iOS:** `next build` gera a pasta `out/`, e o Capacitor a empacota para o Android Studio e o Xcode.

## Como rodar

```bash
npm install
```

Copie o `.env.example` para `.env.local` e preencha (no PowerShell: `Copy-Item .env.example .env.local`):

| Variável | Onde pegar |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Endereço da `codly-api` (local: `http://localhost:3333`). No celular, use o IP da máquina ou o endereço publicado. |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase: Project Settings → API → Project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase: chave pública (`anon` ou `publishable`). Nunca a `service_role`. |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase: Project Settings → General → Your apps → app Web (seis variáveis do `firebaseConfig`). |

```bash
npm run dev
```

Reinicie o servidor sempre que alterar o `.env.local`.

Para conferir se o código segue os padrões do projeto (roda sozinho nos commits, mas pode rodar quando quiser):

```bash
npm test
```

Para gerar os aplicativos Android e iOS:

```bash
npm run build
npx cap sync
npx cap open android
npx cap open ios
```

## Desenvolvimento e inovação

A Codly busca desenvolver soluções digitais com foco em:

- Qualidade e manutenção de software.
- Segurança e proteção de dados.
- Experiência do usuário e acessibilidade.
- Eficiência, desempenho e escalabilidade.
- Evolução contínua e inovação educacional.

## Propriedade intelectual

Este repositório é mantido pela equipe responsável pela Codly.

A disponibilização pública do código-fonte não significa que ele esteja em domínio público ou que exista autorização irrestrita para reprodução, modificação, redistribuição ou exploração comercial.

Salvo disposição expressa em licença aplicável ou autorização específica, todos os direitos autorais e demais direitos de propriedade intelectual permanecem reservados aos respectivos titulares.

## Contato

Para informações institucionais, oportunidades de parceria ou assuntos relacionados ao projeto, utilize os canais oficiais da Codly.

---

<div align="center">

**Codly — Aprenda. Pratique. Evolua.**

Feito com tecnologia, dedicação e capivaras.

</div>
