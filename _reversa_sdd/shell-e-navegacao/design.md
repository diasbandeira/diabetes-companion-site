# Shell e navegação — Design Técnico

## Interface

| Símbolo | Assinatura | Retorno | Observação |
|---|---|---|---|
| `App` | `()` | `JSX.Element` | Monta providers e rotas. 🟢 |
| `NotFound` | `()` | `JSX.Element` | Usa `useLocation` para exibir/logar a rota. 🟢 |
| Bootstrap | `createRoot(document.getElementById("root")!)` | React root | Entry point em `src/main.tsx`; não há validação explícita do elemento. 🟢 |

Não há endpoints HTTP nesta unit. 🟢 **CONFIRMADO**

## Fluxo Principal

1. `index.html` define `#root` e carrega `src/main.tsx`. 🟢
2. `main.tsx` cria a raiz React e renderiza `App`. 🟢
3. `App` envolve o conteúdo com `QueryClientProvider`, `TooltipProvider`, `Toaster` e `Sonner`. 🟢
4. `BrowserRouter` usa `import.meta.env.BASE_URL` e `Routes` escolhe `Index` para `/`. 🟢
5. A rota curinga escolhe `NotFound`. 🟢

## Fluxos Alternativos

- **Caminho não reconhecido:** `NotFound` lê o pathname, registra uma mensagem por `console.error` quando ele muda e exibe link para `/`. 🟢 — `src/pages/NotFound.tsx:7-15`. André confirmou que o destino esperado é a raiz da aplicação publicada; o href atual não respeita explicitamente o subcaminho. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.
- **Elemento raiz ausente:** `main.tsx` não contém fallback ou validação explícita antes de passar o elemento a `createRoot`. O comportamento esperado confirmado por André é apresentar uma mensagem de erro visível, ainda não implementada. 🔴 **LACUNA**.
- **Subcaminho de publicação:** o basename vem do Vite. Um teste HTTP em 2026-11-02 retornou 200 na raiz publicada e 404 numa subrota inexistente; André confirmou que o 404 do servidor é aceitável para acesso direto. 🟢

## Dependências

- `react` e `react-dom`: montagem e composição React. 🟢
- `react-router-dom`: `BrowserRouter`, `Routes`, `Route` e localização. 🟢
- `@tanstack/react-query`: provider e `QueryClient` criados; não há query usada pela página principal. 🟢
- Componentes UI: `Toaster`, `Sonner` e `TooltipProvider`. 🟢
- `Index`: destino da rota principal; `NotFound`: destino da rota curinga. 🟢

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---|---|---|
| Definir rota explícita para `/` e fallback curinga | `src/App.tsx:17-20` | 🟢 |
| Usar a base de build como basename do roteador | `src/App.tsx:16` | 🟢 |
| Criar um `QueryClient` no escopo do módulo | `src/App.tsx:9` | 🟢 |
| Renderizar dois sistemas de toast globalmente | `src/App.tsx:1-3,13-14` | 🟢 |

## Estado Interno

- A unit não mantém estado de sessão, autenticação ou domínio. 🟢
- O `QueryClient` é instanciado uma vez no escopo do módulo. 🟢
- `NotFound` reage à mudança de `location.pathname` por `useEffect`. 🟢

## Observabilidade

- `NotFound` registra o pathname com `console.error`. 🟢 — `src/pages/NotFound.tsx:7-9`.
- Não foram encontrados logs estruturados, métricas ou traces no shell. 🟢

## Riscos e Lacunas

- 🟢 O 404 do servidor para acesso direto a subrota foi observado e aceito por André; a página `NotFound` só aparece quando a SPA foi carregada.
- 🔴 A aplicação não captura erro se `#root` estiver ausente; o comportamento de falha esperado não está definido.
- 🟡 O provider React Query pode ser infraestrutura não utilizada pela página atual; não há chamada de query no caminho principal.
