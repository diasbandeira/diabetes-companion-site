# ADR-002 — Publicação estática no GitHub Pages via Actions

- **Data observada:** 2026-04-13
- **Estado:** implementada; justificativa não registrada
- **Confiança:** 🟢 **CONFIRMADO** quanto ao mecanismo; 🟡 **INFERIDO** quanto à motivação

## Contexto

O commit `f3a30f1` adiciona `.github/workflows/deploy.yml` e configura o Vite para produzir o build com base `/diabetes-companion-site/`. O README descreve publicação no GitHub Pages.

## Decisão observada

Um workflow de GitHub Actions, acionado por push para `main`, instala dependências com npm, executa `npm run build`, publica `dist` como artefato e faz deploy no ambiente `github-pages`.

## Alternativas consideradas

O histórico não registra alternativas avaliadas. A documentação menciona publicação manual como possibilidade, mas não registra uma decisão de comparação.

## Consequências

- A publicação usa o build estático do Vite, sem servidor de aplicação identificado.
- O caminho base da SPA precisa corresponder ao subcaminho configurado para Pages.
- O gatilho e os passos de deploy são versionados junto ao repositório.
- Não há evidência no workflow de verificações automatizadas de testes; o pipeline executa instalação e build.
- A configuração efetiva de acesso e visibilidade do site depende das definições do GitHub, que não estão no workflow. 🔴 **LACUNA**

## Evidências

- `f3a30f1` — `Refatoracao e preparacao para Github Pages`
- `.github/workflows/deploy.yml`
- `vite.config.ts`
- `README.md`
