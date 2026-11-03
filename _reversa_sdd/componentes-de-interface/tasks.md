# Componentes de interface — Tarefas de Implementação

## Pré-requisitos

- [ ] Disponibilizar React, Radix UI, CVA, `clsx`, `tailwind-merge`, Sonner e as demais dependências referenciadas em `package.json`. 🟢
- [ ] Adotar Vitest + React Testing Library, `user-event`, `jsdom` e cobertura V8 com metas de 80% para linhas/funções/instruções e 70% para branches na superfície ativa do produto. 🟢 **DECISÃO CONFIRMADA**; ainda não instalado.
- [ ] Não é necessário banco de dados ou migração para os wrappers analisados. 🟢

## Tarefas

- [ ] T-01 — Implementar o helper compartilhado de composição e merge de classes.
  - Origem no legado: `src/lib/utils.ts:1-5`
  - Critério de pronto: `cn` aceita valores de classe condicionais e resolve conflitos Tailwind.
  - Confiança: 🟢
- [ ] T-02 — Implementar os wrappers centrais usados pelo cartão: `Button`, `Badge` e `Card`.
  - Origem no legado: `src/components/ui/button.tsx:1-56`, `src/components/ui/badge.tsx:1-27`, `src/components/ui/card.tsx:1-39`
  - Critério de pronto: props, variantes e classes observadas estão disponíveis; `Button` mantém `asChild` e encaminha a ref.
  - Confiança: 🟢
- [ ] T-03 — Manter os wrappers não usados pelo cartão como catálogo legado, fora do escopo de implementação ativa.
  - Origem no legado: `src/components/ui/` (48 arquivos TSX); uso atual do cartão limitado a `Button`, `Badge` e `Card`.
  - Critério de pronto: somente componentes consumidos pelo cartão são requisitos ativos; outros wrappers só entram no escopo mediante requisito futuro.
  - Confiança: 🟢 **CONFIRMADO PELO USUÁRIO**.
- [ ] T-04 — Implementar o estado compartilhado e o renderizador de toast baseado em Radix.
  - Origem no legado: `src/hooks/use-toast.ts`, `src/components/ui/toaster.tsx`, `src/components/ui/toast.tsx`
  - Critério de pronto: adicionar, atualizar e dispensar notificações atualiza o estado observado pelo `Toaster`; novos itens substituem o anterior e itens dispensados são removidos em 1.000 ms.
  - Confiança: 🟢
- [ ] T-05 — Implementar os wrappers globais de Sonner e tooltip.
  - Origem no legado: `src/components/ui/sonner.tsx`, `src/components/ui/tooltip.tsx`, `src/App.tsx:1-15`
  - Critério de pronto: o shell pode montar os renderizadores/provedor sem exigir chamadas em telas que não usam esses recursos.
  - Confiança: 🟢

## Tarefas de Teste

- [ ] TT-01 — Testar classes base, variantes, `className`, ref e composição `asChild` dos componentes centrais.
  - Origem no legado: `src/components/ui/button.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/card.tsx`
  - Critério de pronto: renderização e propriedades observáveis correspondem aos contratos documentados.
  - Confiança: 🟢 para o contrato legado; testes automatizados não foram encontrados.
- [ ] TT-02 — Testar os wrappers interativos atualmente usados pelo cartão quanto a renderização, estados e interação por teclado.
  - Origem no legado: `Button`, `Badge` e `Card` em `src/components/ui/`
  - Critério de pronto: cada wrapper usado pelo cartão reproduz o contrato documentado e não apresenta controles inacessíveis.
  - Confiança: 🟡 — ainda não há suíte de testes legada.
- [ ] TT-03 — Testar ciclo de adicionar, atualizar, dispensar e remover toast, incluindo limite de um item.
  - Origem no legado: `src/hooks/use-toast.ts`, `src/components/ui/toaster.tsx`
  - Critério de pronto: novos itens substituem os anteriores; o item dispensado é removido após 1.000 ms.
  - Confiança: 🟢 para o comportamento esperado confirmado; 🔴 — código atual usa 1.000.000 ms.
- [ ] TT-04 — Testar composição de Sonner e tooltip no shell sem conteúdo ativo.
  - Origem no legado: `src/components/ui/sonner.tsx`, `src/components/ui/tooltip.tsx`, `src/App.tsx`
  - Critério de pronto: providers e renderizadores podem ser montados sem apresentar notificações ou dicas espontâneas.
  - Confiança: 🟢

## Tarefas de Migração de Dados

Não aplicável: os wrappers não persistem dados de negócio. 🟢 **CONFIRMADO**.

## Ordem Sugerida

1. Implementar `cn` e os componentes centrais usados pelo cartão.
2. Preservar os demais wrappers apenas como catálogo disponível, sem tratá-los como requisitos ativos.
3. Implementar estado/renderização de toast e wrappers globais.
4. Validar componentes interativos e o ciclo de notificações após aprovar o runner recomendado.

## Lacunas Pendentes (🔴)

- Reduzir o atraso atual de remoção do toast para o alvo confirmado de 1.000 ms.
- Implementar o runner, cobertura e gate CI aprovados para a superfície ativa do produto.
