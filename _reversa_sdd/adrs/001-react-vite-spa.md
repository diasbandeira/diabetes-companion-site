# ADR-001 — Aplicação do cartão como SPA React/Vite

- **Data observada:** 2026-04-13
- **Estado:** implementada; motivação original parcialmente inferida
- **Confiança:** 🟡 **INFERIDO** quanto à motivação; 🟢 **CONFIRMADO** quanto à arquitetura adotada

## Contexto

O histórico contém uma página estática (`b724dfc`, 2025-12-14) e, posteriormente, uma refatoração (`f3a30f1`, 2026-04-13) que adiciona a estrutura React/Vite, separa o conteúdo em componentes e dados TypeScript e prepara a publicação no GitHub Pages.

As mensagens de commit não registram explicitamente a motivação para substituir a estrutura de página única.

## Decisão observada

O cartão é entregue como SPA React compilada pelo Vite, com componentes organizados em `src/` e conteúdo do paciente importado como dados TypeScript estáticos.

## Alternativas consideradas

O repositório não registra alternativas discutidas. Manter a página HTML/CSS estática ou introduzir um backend são possibilidades comparativas, não decisões documentadas nos commits.

## Consequências

- A apresentação pode ser hospedada como arquivos estáticos, sem servidor de aplicação identificado.
- Componentes e dados são empacotados para o frontend; não há API ou persistência remota no caminho analisado.
- 🟡 A motivação presumida para modularização/manutenção é inferida pela refatoração, não afirmada pela equipe.
- A presença de dados de saúde no frontend torna importante validar origem, revisão e política de acesso; esses processos não estão descritos neste repositório. 🔴 **LACUNA**

## Evidências

- `b724dfc` — `Add static patient page HTML/CSS`
- `f3a30f1` — `Refatoracao e preparacao para Github Pages`
- `src/main.tsx`, `src/App.tsx`, `src/data/patientData.ts`
