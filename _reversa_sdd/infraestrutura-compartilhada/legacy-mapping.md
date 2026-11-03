# Mapeamento do legado — infraestrutura compartilhada

| Arquivo | Responsabilidade | Símbolo/trecho |
|---|---|---|
| `src/lib/utils.ts:4` | Mescla classes CSS/Tailwind | `cn` |
| `src/hooks/use-mobile.tsx:5` | Detecta viewport abaixo de 768 px | `useIsMobile` |
| `src/hooks/use-toast.ts:55` | Agenda remoção após dismiss | `addToRemoveQueue` |
| `src/hooks/use-toast.ts:71` | Aplica transições do estado de toasts | `reducer` |
| `src/hooks/use-toast.ts:128` | Atualiza estado global e notifica listeners | `dispatch` |
| `src/hooks/use-toast.ts:137` | Adiciona toast e expõe `update`/`dismiss` | `toast` |
| `src/hooks/use-toast.ts:166` | Assina o estado em memória para React | `useToast` |
| `src/components/ui/use-toast.ts` | Reexporta a API do hook | `useToast`, `toast` |
| `src/components/NavLink.tsx:11` | Adapta as classes de status do React Router | `NavLink` |
| `src/components/ui/sidebar.tsx` | Consome `useIsMobile`; controla abertura, cookie e atalho | `SidebarProvider`/`Sidebar` |

## Ligações

- `src/components/ui/toaster.tsx` consome `useToast` e renderiza a fila.
- `src/components/ui/sidebar.tsx` usa `useIsMobile`; não há uso da sidebar na tela principal.
- `src/components/NavLink.tsx` depende de `react-router-dom` e `cn`; não há consumidor identificado.

**Confiança:** 🟢 CONFIRMADO — referências e imports observados no código.
