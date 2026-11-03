# Componentes de interface — Casos extremos

| ID | Cenário | Comportamento observado / risco | Validação necessária | Confiança |
|---|---|---|---|---|
| EC-01 | Mais de uma notificação é adicionada ao toast Radix. | O reducer trunca a lista para o limite de um item; notificações anteriores deixam de aparecer no estado. André confirmou que a anterior deve ser substituída. | Manter a substituição e testar notificações concorrentes. | 🟢 **CONFIRMADO** — código e decisão do usuário; `src/hooks/use-toast.ts` |
| EC-02 | Um toast é dispensado. | A remoção é atualmente agendada após 1.000.000 ms; André aprovou usar 1.000 ms como recomendação para preservar a animação de saída. | Reduzir o delay para 1.000 ms e testar remoção e criação rápida de novos itens. | 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/hooks/use-toast.ts` |
| EC-03 | `Button` recebe `asChild` sem um filho compatível com `Slot`. | O wrapper delega a composição a Radix `Slot`; erros para combinações incompatíveis não são tratados pelo wrapper. | Testar tipos de filhos suportados e documentar o requisito de composição. | 🟡 **INFERIDO** — `src/components/ui/button.tsx` |
| EC-04 | Um consumidor passa classes Tailwind que conflitam com as classes base. | `cn` aplica `twMerge` depois de `clsx`; o resultado segue a resolução de conflitos da biblioteca, não a concatenação textual simples. | Testar combinações de classes usadas pelo produto, especialmente dimensões, cor e foco. | 🟢 **CONFIRMADO** — `src/lib/utils.ts` |
| EC-05 | Um wrapper estrutural é usado como controle interativo sem primitiva ou semântica adicional. | `Badge` e `Card` são renderizados como elementos `div`; o uso por si só não cria semântica de botão ou interação. | Confirmar semântica e acessibilidade no consumidor para cada uso interativo. | 🟢 **CONFIRMADO** — `src/components/ui/badge.tsx`, `src/components/ui/card.tsx` |
| EC-06 | Uma alteração em wrapper não utilizado pela tela atual introduz regressão em outro consumidor. | O catálogo contém 48 arquivos, mas a tela analisada usa apenas parte deles; não foi identificada suíte de testes automatizados. | Mapear consumidores restantes e estabelecer testes para wrappers usados antes de alterações. | 🟡 **INFERIDO** — catálogo em `src/components/ui/`; ausência de testes no projeto |

## Resumo

- O limite de toast, o atraso de remoção e o merge de classes são comportamentos confirmados no código. 🟢
- A adequação do limite/atraso e a cobertura dos demais consumidores dependem de validação. 🔴 **LACUNA**.
