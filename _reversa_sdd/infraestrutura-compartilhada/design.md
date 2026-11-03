# Infraestrutura compartilhada — Design Técnico

## Interface

| Símbolo/configuração | Entrada | Saída | Observação |
|---|---|---|---|
| `cn(...inputs: ClassValue[])` | Classes e valores condicionais | `string` | Combina `clsx` e `tailwind-merge`. 🟢 |
| `useIsMobile()` | Largura da viewport | `boolean` | Usa breakpoint de 768 px e listener `matchMedia`. 🟢 |
| `NavLink` | Props do Router, classes padrão/ativa/pendente | Link React Router | Encaminha `ref` e calcula `className` a partir do estado da rota. 🟢 |
| Alias `@` | Import iniciado por `@/` | Caminho em `src/` | Declarado em Vite e TypeScript. 🟢 |
| Configuração Vite | `mode` de execução | Servidor e build da SPA | Base `/` em desenvolvimento e `/diabetes-companion-site/` nos demais modos. 🟢 |
| Plugin PWA | Configuração do Vite | Manifest e registro de service worker | `registerType: autoUpdate`; os assets de ícone declarados não estão em `public/`. 🟢 |
| Workflow Pages | Push em `main` | Artifact e deployment de Pages | Executa `npm install`, `npm run build`, upload de `dist` e deploy. 🟢 |

## Fluxo Principal

1. `cn` normaliza classes condicionais com `clsx` e mescla conflitos Tailwind com `twMerge`. 🟢 — `src/lib/utils.ts`.
2. `useIsMobile` instala listener de `matchMedia`, inicializa o valor pela largura atual e remove o listener ao desmontar. 🟢 — `src/hooks/use-mobile.tsx`.
3. `NavLink` encaminha props e ref ao `RouterNavLink` e aplica classes padrão, ativa e pendente via `cn`. 🟢 — `src/components/NavLink.tsx`.
4. Vite configura React/SWC, plugin de PWA, tagger apenas em desenvolvimento, alias `@` e base conforme `mode`. 🟢 — `vite.config.ts`.
5. Tailwind lê fontes TS/TSX listadas, usa `darkMode: ["class"]` e associa tokens a variáveis CSS. 🟢 — `tailwind.config.ts`, `src/index.css`.
6. Em push para `main`, o workflow de Actions constrói a aplicação, carrega `dist/` como artifact de Pages e executa o deployment. 🟢 — `.github/workflows/deploy.yml`.

## Fluxos Alternativos

- **Viewport menor que 768 px:** `useIsMobile` retorna `true`; em larguras iguais ou maiores retorna `false`. 🟢 — `src/hooks/use-mobile.tsx`.
- **Modo de desenvolvimento:** Vite usa base `/`, habilita `componentTagger` e configura servidor na porta 8080. 🟢 — `vite.config.ts`.
- **Build não iniciado por push em `main`:** o workflow descrito não define outro gatilho. 🟢 — `.github/workflows/deploy.yml`.
- **Ícones PWA declarados ausentes:** quatro arquivos configurados não existem em `public/`; resultado no build e no runtime não foi testado. 🔴 **LACUNA** — `vite.config.ts`, diretório `public/`.
- **Sidebar em viewport móvel:** `sidebar.tsx` consome `useIsMobile`, mas a sidebar não é usada na página principal analisada. 🟢 — `src/components/ui/sidebar.tsx`.

## Dependências

- `clsx` e `tailwind-merge`: composição e mesclagem de classes. 🟢
- `react-router-dom`: implementação de `NavLink`. 🟢
- `vite`, `@vitejs/plugin-react-swc`, `vite-plugin-pwa`: servidor, build React e configuração PWA. 🟢
- Tailwind CSS e `tailwindcss-animate`: tokens, utilitários e animações. 🟢
- GitHub Actions Pages: build e publicação estática a partir de `main`. 🟢
- `src/hooks/use-toast.ts`: implementação reexportada por `src/components/ui/use-toast.ts`. 🟢

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---|---|---|
| Separar base de desenvolvimento e base de publicação | `vite.config.ts` | 🟢 |
| Publicar a SPA por GitHub Pages | `.github/workflows/deploy.yml` | 🟢 |
| Centralizar cores e estados de tema em variáveis CSS | `tailwind.config.ts`, `src/index.css` | 🟢 |
| Determinar o estado mobile por breakpoint fixo de 768 px | `src/hooks/use-mobile.tsx` | 🟢 |
| Habilitar auto-update no plugin PWA | `vite.config.ts` | 🟢 |

## Estado Interno

- `useIsMobile` mantém o resultado da viewport em estado React local e reage a mudanças de media query. 🟢 **CONFIRMADO** — `src/hooks/use-mobile.tsx`.
- O estado de toast compartilhado e a fila de remoção estão no escopo de módulo de `src/hooks/use-toast.ts`; esta unit apenas o expõe e integra. 🟢 **CONFIRMADO**.
- Build e publicação não mantêm estado de negócio no frontend. 🟢 **CONFIRMADO** — configuração e workflow analisados.

## Observabilidade

- O workflow apresenta os resultados de build e deployment nos logs do GitHub Actions; não foi identificada telemetria adicional da aplicação nesta unit. 🟢 **CONFIRMADO**.
- Não foram encontrados health checks, métricas ou alertas configurados nos arquivos analisados. 🟢 **CONFIRMADO**.

## Riscos e Lacunas

- 🔴 Os arquivos `apple-touch-icon.png`, `mask-icon.svg`, `pwa-192x192.png` e `pwa-512x512.png` são referenciados na configuração, mas não existem atualmente em `public/`; build e comportamento PWA precisam ser verificados.
- 🔴 O workflow não executa testes nem lint antes da publicação.
- 🟡 O hook pressupõe ambiente de navegador (`window`); uso em renderização server-side não foi identificado nem validado.
- 🟡 O impacto de `npm install` no CI em comparação com instalação reprodutível não foi avaliado nesta unit.
