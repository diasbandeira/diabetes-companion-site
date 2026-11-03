# Shell e navegação — Tarefas de Implementação

## Pré-requisitos

- [ ] Disponibilizar React, React DOM, React Router e as dependências dos providers descritos em `design.md`. 🟢
- [ ] Definir a base de publicação utilizada pelo build e pela hospedagem. 🟢
- [ ] Banco de dados e variáveis de ambiente de aplicação não são necessários no fluxo observado. 🟢

## Tarefas

- [ ] T-01 — Criar o bootstrap da SPA e montar `App` no elemento raiz.
  - Origem no legado: `src/main.tsx:1-5`
  - Critério de pronto: com `#root` presente, a aplicação monta a árvore React.
  - Confiança: 🟢
- [ ] T-02 — Aplicar os providers globais e configurar `BrowserRouter` com a base de build.
  - Origem no legado: `src/App.tsx:9-24`
  - Critério de pronto: o shell fornece Query Client, tooltip e renderizadores de toast; o roteador usa o basename configurado.
  - Confiança: 🟢
- [ ] T-03 — Implementar a rota principal e o fallback para caminhos desconhecidos.
  - Origem no legado: `src/App.tsx:17-20`
  - Critério de pronto: `/` apresenta `Index`; caminhos restantes apresentam `NotFound`.
  - Confiança: 🟢
- [ ] T-04 — Registrar a rota visitada e fornecer navegação de retorno no fallback.
  - Origem no legado: `src/pages/NotFound.tsx:7-15`
  - Critério de pronto: a mudança de pathname registra o evento e o link retorna à raiz da aplicação publicada, respeitando o subcaminho.
  - Confiança: 🟢 para o destino confirmado pelo usuário; 🔴 — a implementação atual usa `href="/"`.
- [ ] T-05 — Apresentar um erro visível quando o elemento `#root` não existir.
  - Origem no legado: `src/main.tsx:5`
  - Critério de pronto: a pessoa recebe uma indicação visível de falha de inicialização em vez de uma página vazia.
  - Confiança: 🟢 para o comportamento esperado confirmado pelo usuário; 🔴 — ainda não implementado no legado.

## Tarefas de Teste

- [ ] TT-01 — Testar a inicialização com `#root` e a rota `/`.
  - Critério de pronto: a árvore principal renderiza sem erro.
  - Confiança: 🟢 para o comportamento esperado; não há teste legado.
- [ ] TT-02 — Testar caminho desconhecido e a apresentação de `NotFound`.
  - Critério de pronto: a rota curinga renderiza o fallback e registra o pathname.
  - Confiança: 🟢 para a implementação observada; não há teste legado.
- [ ] TT-03 — Verificar o basename do build de produção e o acesso direto às rotas hospedadas.
  - Origem no legado: `src/App.tsx:16`, `vite.config.ts:8-9`
  - Critério de pronto: rota raiz e fallback funcionam sob o subcaminho configurado.
  - Confiança: 🟡 — a configuração está confirmada, mas o comportamento de hospedagem não foi executado.

## Tarefas de Migração de Dados

Não aplicável: o shell não persiste dados. 🟢

## Ordem Sugerida

1. Implementar bootstrap e providers.
2. Adicionar roteamento e fallback.
3. Validar o basename e o comportamento de deep links no ambiente de hospedagem.

## Lacunas Pendentes (🔴)

- Confirmar se o GitHub Pages está configurado para encaminhar acessos diretos ao fallback da SPA.
- Definir o comportamento esperado quando `#root` não existe no documento.
