# Fluxo por função — reducer de toast

```mermaid
flowchart TD
    A[dispatch(action)] --> B[reducer(state, action)]
    B --> C{Tipo}
    C -->|ADD_TOAST| D[Prepend toast e limita a 1]
    C -->|UPDATE_TOAST| E[Atualiza item com mesmo id]
    C -->|DISMISS_TOAST| F[Marca item ou todos como fechados]
    F --> G[Agenda REMOVE_TOAST após TOAST_REMOVE_DELAY]
    C -->|REMOVE_TOAST sem id| H[Limpa fila]
    C -->|REMOVE_TOAST com id| I[Filtra item por id]
    D --> J[Atualiza memoryState]
    E --> J
    F --> J
    H --> J
    I --> J
    J --> K[Notifica listeners registrados]
```

O timeout é deduplicado por `toastId`; após disparar, remove a própria entrada da tabela de timeouts e despacha `REMOVE_TOAST`.

**Confiança:** 🟢 CONFIRMADO — `src/hooks/use-toast.ts`.
