# Componentes de interface — Design Técnico

## Interface

| Símbolo | Entrada | Saída | Observação |
|---|---|---|---|
| `cn(...inputs: ClassValue[])` | Valores/classes condicionais | `string` | Executa `clsx` e depois `twMerge`. 🟢 |
| `Button` | Props nativas de botão, variantes CVA, `className`, `asChild` | Elemento renderizado via `forwardRef` | `asChild` escolhe `Slot`; caso contrário, renderiza `button`. 🟢 |
| `Badge` | Atributos de `div`, variante e classe | `div` estilizada | Variantes `default`, `secondary`, `destructive`, `outline`. 🟢 |
| `Card` e subcomponentes | Atributos HTML e `className` | Elementos `div`, `h3` ou `p` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. 🟢 |
| `toast(props)` | Conteúdo e props de toast, sem `id` | `{ id, dismiss, update }` | Adiciona item ao estado em memória e retorna ações. 🟢 |
| `useToast()` | Nenhuma entrada | Estado `toasts`, `toast`, `dismiss` | Assina o estado compartilhado mantido no módulo. 🟢 |
| `Toaster` | Estado obtido por `useToast` | Lista Radix de toasts e viewport | Renderiza título, descrição, ação e fechamento quando fornecidos. 🟢 |
| `Sonner Toaster` | Props Sonner | Renderizador Sonner | Obtém tema por `useTheme` e aplica classes de toast. 🟢 |
| `TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent` | Props das primitivas Radix | Wrappers de tooltip | `TooltipContent` aplica `sideOffset` padrão de 4 e classes visuais. 🟢 |

## Fluxo Principal

1. Componentes consumidores importam wrappers de `src/components/ui/`. 🟢
2. O wrapper combina classes base, variantes e `className` por meio de `cn`. 🟢
3. `cn` resolve classes condicionais com `clsx` e conflitos Tailwind com `tailwind-merge`. 🟢
4. Ao chamar `toast`, o módulo cria um identificador e despacha `ADD_TOAST`; listeners recebem o estado atualizado. 🟢 — `src/hooks/use-toast.ts`.
5. `Toaster` lê `toasts`, renderiza cada item e monta `ToastViewport`. 🟢 — `src/components/ui/toaster.tsx`.
6. O shell também monta Sonner e `TooltipProvider`. 🟢 — `src/App.tsx`.

## Fluxos Alternativos

- **`Button` como filho:** com `asChild`, o wrapper usa Radix `Slot` em vez de criar um elemento `button`. 🟢 — `src/components/ui/button.tsx`.
- **Limite de toast excedido:** o reducer mantém apenas o item mais recente, aplicando `slice(0, TOAST_LIMIT)` com `TOAST_LIMIT = 1`. 🟢 — `src/hooks/use-toast.ts`.
- **Toast dispensado:** atualmente o estado recebe `open: false` e a remoção é agendada após `TOAST_REMOVE_DELAY` de 1.000.000 ms. 🟢 — `src/hooks/use-toast.ts`. André aprovou reduzir o alvo para 1.000 ms após dispensar, como recomendação para preservar a animação de saída; essa alteração ainda não foi feita. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.
- **Tela principal sem toast/tooltip:** os renderizadores globais permanecem montados, mas não há chamada a `toast()` ou trigger de tooltip identificada nessa tela. 🟢 — `src/pages/Index.tsx`.
- **Separador importado sem renderização:** `MedicationList` importa `Separator`, mas não o usa em seu JSX. 🟢 — `src/components/patient/MedicationList.tsx`.

## Dependências

- React: composição, estado e `forwardRef`. 🟢
- Radix UI: primitivas para os wrappers; `Slot` permite composição de botão. 🟢
- `class-variance-authority`: variantes tipadas de componentes como Button e Badge. 🟢
- `clsx` e `tailwind-merge`: composição e resolução de classes. 🟢
- `sonner` e `next-themes`: notificação Sonner e leitura do tema pelo wrapper. 🟢
- `src/hooks/use-toast.ts`: estado em memória e API do toast Radix. 🟢

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---|---|---|
| Manter wrappers locais de composição/estilo em vez de importar cada primitiva diretamente nas telas | `src/components/ui/` | 🟢 |
| Centralizar a fusão de classes em `cn` | `src/lib/utils.ts` | 🟢 |
| Definir variantes de componentes por CVA | `src/components/ui/button.tsx`, `src/components/ui/badge.tsx` | 🟢 |
| Compartilhar estado do toast por memória de módulo e listeners | `src/hooks/use-toast.ts` | 🟢 |
| Montar os renderizadores de notificação e tooltip no shell | `src/App.tsx` | 🟢 |
| Substituir o toast anterior ao receber outro e remover itens dispensados após 1.000 ms | Decisão de produto confirmada; `src/hooks/use-toast.ts` | 🟢 para o requisito; 🔴 para implementação |

## Estado Interno

- O estado de toast (`memoryState`), listeners, contador de IDs e timers são mantidos no escopo do módulo. 🟢 **CONFIRMADO** — `src/hooks/use-toast.ts`.
- `Badge`, `Button` e `Card` não mantêm estado próprio; wrappers interativos delegam comportamento às primitivas subjacentes quando aplicável. O catálogo também inclui `SidebarProvider`, que mantém estado compartilhado. 🟢 **CONFIRMADO** — componentes e `src/components/ui/sidebar.tsx`.

## Observabilidade

- Não foram identificados logs, métricas ou traces emitidos pelos wrappers analisados. 🟢 **CONFIRMADO**.
- Toasts são apresentados visualmente; não foi identificada telemetria de exibição ou interação. 🟢 **CONFIRMADO** no código analisado.

## Riscos e Lacunas

- 🔴 Não foram encontrados testes automatizados para validar wrappers, variantes ou o ciclo do toast.
- 🔴 O atraso atual de 1.000.000 ms contraria o alvo confirmado de 1.000 ms após dispensar.
- 🟡 A maioria do catálogo não tem consumidor identificado na tela principal; o usuário confirmou que apenas wrappers usados pelo cartão fazem parte do escopo ativo.
