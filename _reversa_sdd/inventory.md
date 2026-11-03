# Inventário do projeto

## Visão geral

- **Projeto:** diabetes-companion-site
- **Tipo:** aplicação web de página única (SPA), sem backend identificado
- **Linguagem principal da aplicação:** TypeScript (`src/`: 5 arquivos `.ts`, 59 `.tsx`)
- **Framework principal:** React 18.3.1 com Vite 5.4.19
- **Estilização:** Tailwind CSS 3.4.17
- **Gerenciadores/lockfiles:** `package-lock.json` (npm) e `bun.lockb` (Bun); a documentação e o workflow usam npm
- **Arquivos no workspace analisado:** 1.068, excluídos `.git`, `.reversa`, `_reversa_sdd`, `node_modules`, `dist`, `build`, `coverage`, `__pycache__` e `.cache`. O total inclui os arquivos de skills instalados em `.agents`, `.claude` e `.kiro`.

## Estrutura relevante

```text
.
├── .agents/skills/       # Skills e agentes instalados
├── .claude/skills/       # Skills para Claude
├── .github/workflows/    # Automação de publicação
├── .kiro/skills/         # Skills para Kiro
├── public/               # Assets estáticos
├── src/
│   ├── components/
│   │   ├── patient/      # Componentes do cartão de saúde
│   │   └── ui/           # Primitivos visuais reutilizáveis (Radix/shadcn)
│   ├── data/             # Dados apresentados pela aplicação
│   ├── hooks/            # Hooks compartilhados
│   ├── lib/              # Utilitários compartilhados
│   ├── pages/            # Páginas e fallback de rota
│   ├── App.tsx           # Composição da aplicação e rotas
│   └── main.tsx          # Bootstrap React
├── index.html
├── package.json
├── package-lock.json
├── bun.lockb
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig*.json
```

## Linguagens e tecnologias

No código da aplicação em `src/`: TypeScript/TSX (64 arquivos) e CSS (2 arquivos). No workspace completo também há JavaScript, Python, Markdown, YAML e arquivos de configuração gerados/instalados junto às skills.

Tecnologias identificadas:

- React e React DOM
- Vite com plugin React SWC
- React Router DOM
- Tailwind CSS, componentes Radix UI e padrões shadcn
- TanStack React Query, React Hook Form e Zod estão disponíveis como dependências
- `vite-plugin-pwa` configura recursos de Progressive Web App

## Entradas, configuração e publicação

- `index.html` carrega `src/main.tsx`.
- `src/main.tsx` cria a raiz React e renderiza `App`.
- `src/App.tsx` configura providers, `BrowserRouter`, a rota `/` para `Index` e o fallback `NotFound`.
- `src/pages/Index.tsx` compõe a tela principal do cartão de saúde.
- Configuração: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `tailwind.config.ts`, `postcss.config.js` e `eslint.config.js`.
- Scripts disponíveis: `dev`, `build`, `build:dev`, `lint` e `preview`. Não há script de teste.
- `.github/workflows/deploy.yml` compila e publica no GitHub Pages após push para `main`.
- O Vite usa base `/diabetes-companion-site/` para produção e configura a porta local 8080.
- Não foram encontrados Dockerfile, Compose, Jenkinsfile ou `.gitlab-ci.yml`.

## Módulos funcionais identificados

1. **Shell e navegação:** bootstrap React, providers e rotas em `src/main.tsx` e `src/App.tsx`.
2. **Cartão de saúde do paciente:** dados e componentes de identificação, condições, hipoglicemia, medicamentos/insulina e contato de emergência em `src/data/` e `src/components/patient/`.
3. **Componentes de interface:** biblioteca de componentes reutilizáveis em `src/components/ui/`.
4. **Infraestrutura compartilhada:** hooks e utilitários em `src/hooks/` e `src/lib/`.

O conteúdo médico é mantido como dados estáticos no frontend; este inventário não replica dados pessoais.

## Persistência, integrações e testes

- **Banco de dados:** não identificado. Não foram localizados schemas, migrations ou arquivos de banco da aplicação.
- **Integração externa:** GitHub Actions/GitHub Pages para CI e publicação. Não foi identificada integração de API externa em runtime.
- **Testes:** nenhum arquivo `*.test.*` ou `*.spec.*` encontrado em `src/`; nenhum framework ou script de testes configurado.
- **Assets/PWA:** assets estáticos em `public/`; Vite PWA define manifest e registro automático do service worker.

## Sugestão inicial de organização das specs

- **Granularidade sugerida:** `endpoint`
- **Razão:** o roteamento da SPA está centralizado em `src/App.tsx`; a sugestão se refere às rotas de interface, não a uma API HTTP.
- **Evidência:** `src/App.tsx`
