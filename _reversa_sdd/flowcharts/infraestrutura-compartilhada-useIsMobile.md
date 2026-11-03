# Fluxo por função — `useIsMobile`

```mermaid
flowchart TD
    A[Montagem do hook] --> B[Cria MediaQueryList para max-width: 767px]
    B --> C[Registra listener change]
    C --> D[Define estado com window.innerWidth < 768]
    D --> E{Evento change}
    E -->|sim| F[Atualiza estado com largura atual]
    F --> E
    E -->|desmontagem| G[Remove listener]
    D --> H[Retorna booleano]
```

O estado começa como `undefined` e a saída do hook converte esse estado inicial para `false` via coerção booleana.

**Confiança:** 🟢 CONFIRMADO — `src/hooks/use-mobile.tsx`.
