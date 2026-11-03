# Mapeamento do legado — componentes de interface

## Composição compartilhada

- `src/lib/utils.ts:4` — `cn`, combina classes condicionais (`clsx`) e mescla conflitos Tailwind.
- `src/components/ui/` — 48 componentes `.tsx`; a maioria é uma camada de composição/estilo sobre Radix UI.
- `src/hooks/use-toast.ts` — estado e ações do toast consumidos por `src/components/ui/toaster.tsx`.
- `src/components/ui/sonner.tsx` — wrapper da biblioteca Sonner, tematizado por `next-themes`.

## Componentes ligados à tela atual

| Arquivo | Uso/consumidor |
|---|---|
| `src/components/ui/button.tsx:39` | `EmergencyContact`; variante e tamanho por CVA; `asChild` usa `Slot` |
| `src/components/ui/badge.tsx:25` | `ConditionList` |
| `src/components/ui/card.tsx:5` | `MedicationList` usa `Card` e `CardContent` |
| `src/components/ui/separator.tsx` | Importado por `MedicationList`, sem uso no JSX observado |
| `src/components/ui/toaster.tsx:4` | Montado globalmente em `App`; apresenta o estado de `use-toast` |
| `src/components/ui/sonner.tsx:7` | Montado globalmente em `App` |
| `src/components/ui/tooltip.tsx:7` | `TooltipProvider` montado globalmente em `App` |

## Outros wrappers disponíveis

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `breadcrumb`, `calendar`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input`, `input-otp`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `sheet`, `sidebar`, `skeleton`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toast`, `toggle`, `toggle-group`.

**Confiança:** 🟢 CONFIRMADO — imports e implementações dos wrappers centrais verificados.
