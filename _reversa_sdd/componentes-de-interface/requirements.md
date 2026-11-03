# Componentes de interface — Requisitos

## Visão Geral

Esta unit reúne wrappers reutilizáveis de interface em `src/components/ui/`, além de helpers e estado compartilhado de notificações. 🟢 **CONFIRMADO** — há 48 arquivos TSX no diretório.

A maioria dos wrappers compõe primitivas Radix com props tipadas e estilos Tailwind; o cartão atual usa diretamente `Badge`, `Button` e `Card`/`CardContent`. 🟢 **CONFIRMADO** — `src/components/ui/` e `src/pages/Index.tsx`.

## Responsabilidades

- Disponibilizar componentes de interface reutilizáveis para controles, navegação, conteúdo e overlays. 🟢 **CONFIRMADO** — `src/components/ui/`.
- Aplicar variantes e classes visuais com utilitários compartilhados. 🟢 **CONFIRMADO** — `src/lib/utils.ts`, `button.tsx`, `badge.tsx`.
- Disponibilizar renderizadores globais de toast e um provider de tooltip usados pelo shell. 🟢 **CONFIRMADO** — `src/App.tsx`.
- Manter os wrappers não usados pela tela principal como parte do catálogo sem presumir uso funcional atual. 🟢 **CONFIRMADO** — imports observados em `src/pages/Index.tsx`.

## Regras de Negócio

- `cn` combina classes condicionais por `clsx` e mescla conflitos Tailwind por `tailwind-merge`. 🟢 **CONFIRMADO** — `src/lib/utils.ts`.
- `Button` oferece variantes e tamanhos definidos por CVA; `asChild` usa `Slot` para compor o elemento filho. 🟢 **CONFIRMADO** — `src/components/ui/button.tsx`.
- `Badge` oferece variantes de apresentação e `Card`/`CardContent` fornecem composição visual baseada em elementos `div`. 🟢 **CONFIRMADO** — `src/components/ui/badge.tsx`, `src/components/ui/card.tsx`.
- O toast baseado em Radix mantém no máximo um item na lista de estado. 🟢 **CONFIRMADO** — `src/hooks/use-toast.ts`.
- O usuário confirmou que notificações concorrentes devem substituir a anterior. 🟢 **CONFIRMADO PELO USUÁRIO**.
- O atraso de remoção após dispensar deve ser reduzido de 1.000.000 ms para a recomendação de 1.000 ms, suficiente para a animação de saída. 🟢 **CONFIRMADO PELO USUÁRIO**; ainda não implementado. 🔴
- `App` monta `Toaster`, Sonner e `TooltipProvider`; a tela principal analisada não chama `toast()` nem renderiza triggers de tooltip. 🟢 **CONFIRMADO** — `src/App.tsx`, `src/pages/Index.tsx`.
- Somente os wrappers atualmente usados pelo cartão devem ser tratados como parte ativa do produto; os demais permanecem como catálogo disponível, sem requisitos ativos confirmados. 🟢 **CONFIRMADO PELO USUÁRIO**.

## Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de Aceite |
|---|---|---|---|
| RF-01 | Considerar parte ativa do produto somente os wrappers usados atualmente pelo cartão; manter os demais identificados como catálogo disponível, sem requisitos funcionais ativos. 🟢 **CONFIRMADO PELO USUÁRIO** | Must | `Badge`, `Button` e `Card` são o escopo funcional atual; demais wrappers não são tratados como recursos do produto sem novo requisito. |
| RF-02 | Permitir que componentes selecionados recebam classes combinadas por `cn` e variantes configuradas. 🟢 | Must | Variantes e `className` resultam em uma única composição de classes sem conflitos Tailwind observáveis. |
| RF-03 | Permitir que `Button` seja renderizado como elemento filho por `asChild`, além de oferecer variantes e tamanhos. 🟢 | Should | O uso com `Slot` preserva o elemento filho e aplica as classes de botão. |
| RF-04 | Disponibilizar o ciclo de adicionar, atualizar e dispensar notificações do toast Radix. 🟢 | Should | `useToast` expõe estado e ações; o `Toaster` renderiza os itens presentes. |
| RF-05 | Disponibilizar Sonner e o provider global para tooltips no shell. 🟢 | Could | Os wrappers podem ser montados pelo shell; telas que não os utilizam não apresentam notificações ou dicas espontaneamente. |
| RF-06 | Substituir toasts anteriores por novos e remover o toast dispensado após 1.000 ms. 🟢 **CONFIRMADO PELO USUÁRIO** | Should | A lista mantém no máximo um item; o estado do item dispensado é removido após o tempo de saída recomendado. A implementação atual usa 1.000.000 ms. 🔴 |

## Requisitos Não Funcionais

| Tipo | Requisito observado | Evidência no código | Confiança |
|---|---|---|---|
| Acessibilidade de interação | `Button` define estilos de foco visível e estados desabilitados; wrappers Radix selecionados preservam a primitiva subjacente. | `src/components/ui/button.tsx`, wrappers em `src/components/ui/` | 🟢 **CONFIRMADO** para os estilos e composição observados |

Não foram identificados requisitos explícitos de performance, disponibilidade ou persistência para esta unit. 🟢 **CONFIRMADO** — os wrappers analisados operam no frontend.

## Critérios de Aceitação

```gherkin
Dado que uma tela utiliza Button com asChild e um elemento filho
Quando o componente é renderizado
Então o elemento filho recebe as classes e propriedades configuradas pelo Button

Dado que o estado do toast recebe mais notificações do que o limite configurado
Quando o Toaster renderiza a lista
Então a lista contém no máximo uma notificação

Dado que a tela principal não invoca toast nem monta triggers de tooltip
Quando a página é apresentada
Então os renderizadores globais permanecem disponíveis sem criar conteúdo de toast ou tooltip por conta própria
```

O caso acima descreve o limite de estado configurado, não um tratamento de erro. 🟢 **CONFIRMADO** — `src/hooks/use-toast.ts`.

## Prioridade (MoSCoW)

| Requisito | MoSCoW | Justificativa |
|---|---|---|
| Wrappers usados na tela (`Badge`, `Button`, `Card`) | Must | São dependências diretas do cartão atual. 🟢 |
| Composição de classes e variantes | Must | Implementa a forma compartilhada de aplicar estilos e props visuais. 🟢 |
| Toast Radix e Sonner | Should | O shell os monta globalmente, embora a tela atual não emita notificações. 🟡 |
| Wrappers não usados na tela analisada | Não fazem parte do escopo funcional ativo confirmado | Permanecem no catálogo, sem requisito de produto ou prioridade inferidos. 🟢 |

Prioridades inferidas do uso observado na página principal, não de telemetria de produto. 🟡 **INFERIDO**

## Rastreabilidade de Código

| Arquivo | Função / trecho | Cobertura |
|---|---|---|
| `src/components/ui/` | Catálogo de 48 wrappers TSX | 🟢 |
| `src/lib/utils.ts` | `cn` para composição e merge de classes | 🟢 |
| `src/hooks/use-toast.ts` | Estado, reducer e ações de toast | 🟢 |
| `src/components/ui/button.tsx` | `Button`, variantes, tamanhos e `asChild` | 🟢 |
| `src/components/ui/badge.tsx` | `Badge` e variantes | 🟢 |
| `src/components/ui/card.tsx` | `Card` e subcomponentes | 🟢 |
| `src/components/ui/toaster.tsx` | Renderização do estado Radix toast | 🟢 |
| `src/components/ui/sonner.tsx` | Wrapper Sonner | 🟢 |
| `src/components/ui/tooltip.tsx` | Provider e wrappers de tooltip | 🟢 |
