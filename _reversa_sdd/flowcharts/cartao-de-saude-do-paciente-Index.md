# Fluxo por função — `Index`

```mermaid
flowchart TD
    A[Index monta tela] --> B[Usa patientData estático]
    B --> C[Renderiza PatientHeader]
    C --> D[Renderiza ConditionList]
    D --> E[Renderiza HypoglycemiaGuide]
    E --> F[Renderiza MedicationList]
    F --> G[Renderiza texto informativo]
    G --> H[Renderiza EmergencyContact]
```

Não há ramificações de negócio: as seções são sempre renderizadas, e seus itens dependem apenas dos arrays presentes nos dados importados.

**Confiança:** 🟢 CONFIRMADO — `src/pages/Index.tsx`.
