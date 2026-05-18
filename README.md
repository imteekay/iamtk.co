# johnenderson.dev

Personal website — portfolio, articles, book notes, and experiments.

## Stack

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript 5
- **Styling**: Emotion (CSS-in-JS) + MUI
- **Content**: MDX via `next-mdx-remote`
- **Search**: kbar (command palette)
- **Animations**: Framer Motion
- **Graphs**: ReactFlow
- **Node**: 22.x

## Rodando localmente

### Pré-requisitos

- Node 22 via nvm
- Yarn

```bash
# Instalar e ativar o Node correto
nvm install 22.15.0
nvm use 22.15.0

# Instalar yarn (se necessário)
npm install -g yarn

# Instalar dependências
yarn install

# Subir o servidor de desenvolvimento
yarn dev
```

O site estará disponível em `http://localhost:3000`.

### Outros comandos

| Comando | O que faz |
|---|---|
| `yarn dev` | Servidor de desenvolvimento |
| `yarn build` | Build de produção |
| `yarn start` | Servidor de produção (após build) |
| `yarn typecheck` | Verificar erros de TypeScript |
| `yarn lint` | Rodar ESLint |
| `yarn prettier:fix` | Formatar código |

## Estrutura do projeto

```
.
├── pages/              # Rotas do Next.js (Pages Router)
├── Base/               # Componentes reutilizáveis
│   ├── Article/        # Componentes de artigos
│   ├── components/     # Componentes genéricos (SearchBar, Footer, etc.)
│   └── LinksGraph/     # Grafo interativo de links
├── Home/               # Componentes da página inicial
├── content/            # Artigos em MDX
├── data/               # Helpers para carregar conteúdo
├── src/lib/            # Utilitários (leitura de posts, geração de grafos)
├── public/             # Assets estáticos
├── styles/             # Estilos globais
└── packages/           # Scripts auxiliares
```

## Seções do site

| Rota | Descrição |
|---|---|
| `/` | Home: bio, artigos recentes, projetos e experimentos |
| `/writings` | Artigos longos (TypeScript, React, ML, performance) |
| `/series` | Coleções temáticas de artigos |
| `/bookshelf` | Notas e resenhas de livros |
| `/microblog` | Posts curtos e citações |
| `/projects` | Portfolio de projetos |
| `/experiments` | Features interativas |
| `/habit-tracker` | Calendário de hábitos com heatmaps |
| `/web-performance-roadmap` | Mapa de aprendizado de web performance |
| `/tags/[tag]` | Conteúdo filtrado por tag |
| `/pt-BR/` | Versão em português |

## Adicionando conteúdo

### Novo artigo

Crie um arquivo `.mdx` em `content/` com o seguinte frontmatter:

```mdx
---
title: Título do artigo
description: Descrição curta
date: 2024-01-01
tags:
  - typescript
  - react
coverImage: /path/to/image.jpg
---

Conteúdo em Markdown + JSX aqui.
```

### Componentes disponíveis nos artigos

#### Syntax highlighting

Blocos de código com highlight automático — basta especificar a linguagem:

````md
```typescript
const greet = (name: string): string => `Hello, ${name}`;
```
````

Linguagens suportadas: `typescript`, `javascript`, `python`, `bash`, `css`, `html`, `json`, entre outras.

---

#### Tabelas (GitHub Flavored Markdown)

```md
| Coluna A | Coluna B |
|---|---|
| valor 1  | valor 2  |
```

---

#### Fórmulas matemáticas — `<InlineMath>` e `<BlockMath>`

Usa [KaTeX](https://katex.org/) para renderizar LaTeX.

```mdx
Equação inline: <InlineMath math="E = mc^2" />

Equação em bloco:
<BlockMath math="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" />
```

---

#### Imagens lado a lado — `<SideBySideImages>`

Exibe duas ou mais imagens em linha horizontal.

```mdx
<SideBySideImages images={["/imagens/antes.png", "/imagens/depois.png"]} />
```

- `images`: array de caminhos (relativos a `public/`)

---

#### Vídeos lado a lado — `<SideBySideVideos>`

Exibe dois ou mais vídeos em linha horizontal, com controles e mudo por padrão.

```mdx
<SideBySideVideos videos={["/videos/demo1.mp4", "/videos/demo2.mp4"]} />
```

- `videos`: array de caminhos (relativos a `public/`)

---

#### Embed de tweet — `<TweetEmbed>`

Incorpora um tweet pelo ID.

```mdx
<TweetEmbed tweetId="1234567890123456789" />
```

- `tweetId`: ID do tweet (parte final da URL do twitter.com)

---

#### Link com data — `<PostAndDate>`

Útil para listas de artigos referenciados dentro de um post.

```mdx
<ul>
  <PostAndDate date="2024-01-15" title="Título do artigo" url="/slug-do-artigo" />
  <PostAndDate date="2024-02-10" title="Outro artigo" url="/outro-slug" />
</ul>
```

- `date`: data exibida ao lado do link
- `title`: texto do link
- `url`: caminho interno do artigo

---

#### Diagrama de Venn — `<Venn>`

Exibe um diagrama de Venn simples (Event A ⊕ Event B). Sem props.

```mdx
<Venn />
```

## Atalhos de teclado

| Atalho | Ação |
|---|---|
| `Ctrl+K` / `Cmd+K` | Abrir command palette (busca global) |
| `g` `h` | Ir para Home |
| `g` `w` | Ir para Writings |
| `g` `p` | Ir para Projects |
| `f` `g` | Abrir GitHub |
| `f` `t` | Abrir Twitter |
| `f` `l` | Abrir LinkedIn |

## Licenças

- Código fonte: [MIT](./LICENSE)
- Imagens, textos e assets: [BY-NC-SA 4.0](./LICENSE-content)
