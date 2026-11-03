# Matriz de rastreabilidade — Código e Specs

## Escopo e critérios

Esta matriz cobre 82 arquivos de implementação, configuração, publicação e assets: 66 arquivos sob `src/` e 16 arquivos de entrada/configuração/workflow/assets. 🟢 **CONFIRMADO** — inventário e árvore do workspace.

- 🟢 **Cobertura direta:** comportamento descrito em uma ou mais specs da unit.
- 🟡 **Cobertura parcial:** arquivo associado a uma unit, mas comportamento específico ou consumidores precisam de detalhamento.
- `n/a`: nenhum comportamento de unit mapeado; candidato a análise ou confirmação adicional.

## Código em `src/`

| Arquivo do legado | Unit correspondente | Cobertura |
|---|---|---|
| `src/App.css` | n/a | n/a — não importado pelo caminho de inicialização descrito. |
| `src/App.tsx` | `shell-e-navegacao/` | 🟢 |
| `src/index.css` | `infraestrutura-compartilhada/` | 🟢 |
| `src/main.tsx` | `shell-e-navegacao/` | 🟢 |
| `src/vite-env.d.ts` | `infraestrutura-compartilhada/` | 🟡 |
| `src/components/NavLink.tsx` | `infraestrutura-compartilhada/` | 🟢 |
| `src/components/patient/ConditionList.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/components/patient/EmergencyContact.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/components/patient/HypoglycemiaGuide.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/components/patient/MedicationList.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/components/patient/PatientHeader.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/components/ui/accordion.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/alert-dialog.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/alert.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/aspect-ratio.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/avatar.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/badge.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/breadcrumb.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/button.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/calendar.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/card.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/carousel.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/chart.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/checkbox.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/collapsible.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/command.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/context-menu.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/dialog.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/drawer.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/dropdown-menu.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/form.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/hover-card.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/input-otp.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/input.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/label.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/menubar.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/navigation-menu.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/pagination.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/popover.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/progress.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/radio-group.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/resizable.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/scroll-area.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/select.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/separator.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/sheet.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/sidebar.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/skeleton.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/slider.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/sonner.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/switch.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/table.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/tabs.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/textarea.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/toast.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/toaster.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/toggle-group.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/toggle.tsx` | `componentes-de-interface/` | 🟡 |
| `src/components/ui/tooltip.tsx` | `componentes-de-interface/` | 🟢 |
| `src/components/ui/use-toast.ts` | `componentes-de-interface/` | 🟢 |
| `src/data/patientData.ts` | `cartao-de-saude-do-paciente/` | 🟢 — contrato coberto; valores pessoais/clínicos omitidos |
| `src/hooks/use-mobile.tsx` | `infraestrutura-compartilhada/` | 🟢 |
| `src/hooks/use-toast.ts` | `componentes-de-interface/` | 🟢 |
| `src/lib/utils.ts` | `infraestrutura-compartilhada/`, `componentes-de-interface/` | 🟢 |
| `src/pages/Index.tsx` | `cartao-de-saude-do-paciente/` | 🟢 |
| `src/pages/NotFound.tsx` | `shell-e-navegacao/` | 🟢 |

## Entrada, configuração, publicação e assets

| Arquivo do legado | Unit correspondente | Cobertura |
|---|---|---|
| `index.html` | `shell-e-navegacao/` | 🟡 — entrada/root cobertos; metadados específicos não detalhados |
| `package.json` | `infraestrutura-compartilhada/` | 🟢 |
| `package-lock.json` | `infraestrutura-compartilhada/` | 🟢 |
| `bun.lockb` | `infraestrutura-compartilhada/` | 🟡 — lockfile presente, mas o workflow observado usa npm |
| `components.json` | `infraestrutura-compartilhada/` | 🟡 — configuração de scaffolding e aliases; sem comportamento runtime descrito |
| `vite.config.ts` | `infraestrutura-compartilhada/`, `shell-e-navegacao/` | 🟢 |
| `tailwind.config.ts` | `infraestrutura-compartilhada/` | 🟢 |
| `postcss.config.js` | `infraestrutura-compartilhada/` | 🟡 |
| `eslint.config.js` | `infraestrutura-compartilhada/` | 🟡 — script disponível; lint não está no workflow |
| `tsconfig.json` | `infraestrutura-compartilhada/` | 🟢 |
| `tsconfig.app.json` | `infraestrutura-compartilhada/` | 🟡 |
| `tsconfig.node.json` | `infraestrutura-compartilhada/` | 🟡 |
| `.github/workflows/deploy.yml` | `infraestrutura-compartilhada/` | 🟢 |
| `public/favicon.ico` | `infraestrutura-compartilhada/` | 🟢 |
| `public/placeholder.svg` | n/a | n/a — nenhum comportamento de unit mapeado |
| `public/robots.txt` | n/a | n/a — nenhum comportamento de unit mapeado |

## Cobertura estimada

- Arquivos no escopo: **82**.
- Arquivos associados a uma unit: **79**.
- Cobertura de mapeamento estimada: **96,3%** (79/82).
- Arquivos sem unit correspondente: **3** (`src/App.css`, `public/placeholder.svg`, `public/robots.txt`).

A cobertura `🟡` associa o arquivo à unit, mas não descreve em detalhe cada wrapper ou opção de configuração. Não foram identificados testes automatizados para validar a cobertura de execução. 🟡 **INFERIDO**.

## Lacunas de rastreabilidade

- Os wrappers UI marcados com `🟡` estão incluídos no catálogo, mas não têm contrato individual nesta extração. André confirmou que apenas os componentes usados pelo cartão fazem parte do escopo ativo; a ausência de contrato individual dos demais é intencional.
- A configuração efetiva do GitHub Pages e a disponibilidade dos assets PWA precisam de validação no ambiente de publicação.
- A aprovação clínica e a autorização dos dados não são verificáveis por rastreabilidade de código. 🔴 **LACUNA**.
