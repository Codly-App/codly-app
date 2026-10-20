
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
- `next-themes`: gerencia o tema claro/escuro, persistindo a escolha do usuário.

### Supabase (login e imagens)

- `@supabase/supabase-js`: cliente oficial do Supabase para autenticação (Google OAuth) e Storage de imagens.
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
├─ capacitor.config.ts
├─ next.config.ts
├─ public/
│  └─ manifest.webmanifest
└─ src/
   ├─ app/
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  └─ globals.css
   ├─ lib/
   │  ├─ api.ts
   │  └─ query-client.ts
   ├─ providers/
   │  ├─ Providers.tsx
   │  └─ ThemeSync.tsx
   └─ theme/
      └─ theme.ts
```

### Para que serve cada pasta e arquivo

| Caminho | Função |
| --- | --- |
| `capacitor.config.ts` | Configuração do Capacitor: identificador do app (`appId`), nome e pasta do build (`out`) que vira Android e iOS. |
| `next.config.ts` | Configuração do Next.js: React Compiler, Tailwind via Turbopack e exportação estática, necessária para o Capacitor. |
| `public/` | Arquivos servidos como estão: manifest da PWA, ícones e imagens fixas. |
| `src/app/` | Rotas e páginas (App Router). Cada pasta vira uma rota, e `layout.tsx` envolve todas as telas. |
| `src/app/globals.css` | Estilos globais: Tailwind, variáveis de cor e ordem de camadas entre o Tailwind e o MUI. |
| `src/lib/` | Código de infraestrutura, sem interface: cliente HTTP (`api.ts`), cache de dados (`query-client.ts`) e, depois, o cliente do Supabase. |
| `src/providers/` | Componentes que envolvem o app e fornecem recursos a todas as telas: MUI, tema claro/escuro e React Query. |
| `src/theme/` | Tema do Material UI: cores, tipografia e modo claro/escuro. |

Conforme o app crescer, as próximas pastas previstas são:

| Caminho | Função |
| --- | --- |
| `src/components/ui/` | Componentes compartilhados entre telas (botões, cards, barra de XP, avatar). |
| `src/components/<tela>/` | Uma pasta por tela (`cursos`, `licoes`, `amigos`, `perfil`), com os componentes, hooks e chamadas à API que só essa tela usa. A rota em `src/app/` apenas monta o componente da tela. |
| `src/hooks/` | Hooks globais usados em várias telas (por exemplo, o de autenticação). |
| `src/types/` | Tipos TypeScript globais. |

> A API (Node.js + Firebase Admin) fica em um repositório separado, `codly-api`. Este app só se comunica com ela por HTTP.

### Como o fluxo funciona

- **Supabase:** guarda os usuários (login com Google) e as imagens (avatar e conteúdo).
- **Firestore:** é o banco de dados (cursos, lições, progresso, XP, amigos e plano de cada aluno). O app nunca acessa o Firestore diretamente.
- **API:** recebe o token do Supabase, confere quem é o usuário e lê ou grava no Firestore.

```
App ──(Google OAuth)──> Supabase Auth ──> token
App ──(Bearer token)──> codly-api ──(Firebase Admin)──> Firestore
```

1. **Abertura:** `layout.tsx` carrega o `Providers`, que ativa o tema (claro/escuro), o MUI e o React Query em todas as telas.
2. **Login:** o usuário entra com Google pelo Supabase, que devolve uma sessão com um token.
3. **Pedido de dados:** uma tela usa o React Query, que chama `lib/api.ts`. O axios envia o token no cabeçalho `Authorization`.
4. **Validação:** a API confere o token no Supabase para saber quem é o usuário.
5. **Leitura e gravação:** a API lê ou grava no Firestore e devolve o resultado, que o React Query guarda em cache e mostra na tela.
6. **Imagens:** avatar e imagens de conteúdo vão direto ao Supabase Storage.
7. **Tema:** a escolha de tema do `next-themes` é repassada ao MUI pelo `ThemeSync`, e o Tailwind usa a mesma classe `.dark`.
8. **Android e iOS:** `next build` gera a pasta `out/`, e o Capacitor a empacota para o Android Studio e o Xcode.

## Como rodar

```bash
npm install
npm run dev
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
