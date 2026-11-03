# C4 — Componentes da aplicação web

```mermaid
C4Component
    title Componentes — SPA do Cartão de Saúde
    Container_Boundary(spa, "Aplicação web React") {
        Component(shell, "Shell e roteador", "App.tsx", "Providers globais e escolha da rota.")
        Component(page, "Página do cartão", "pages/Index.tsx", "Compõe a tela e distribui propriedades.")
        Component(data, "Dados do paciente", "data/patientData.ts", "Modelo PatientData e objeto estático.")
        Component(patient, "Componentes de paciente", "components/patient", "Apresentam as seções e ações do cartão.")
        Component(ui, "Biblioteca UI", "components/ui", "Wrappers React/Radix estilizados com Tailwind.")
        Component(shared, "Hooks e utilitários", "hooks e lib", "Mescla classes, detecta viewport e gerencia toasts.")
    }

    Rel(shell, page, "Roteia para /")
    Rel(page, data, "Importa patientData")
    Rel(page, patient, "Compõe e passa props")
    Rel(patient, ui, "Usa Badge, Button e Card")
    Rel(shell, ui, "Monta Toaster, Sonner e TooltipProvider")
    Rel(ui, shared, "Usa cn e useToast")
```

## Observações

- Os componentes de paciente são consumidores; não mantêm o modelo nem o persistem.
- A dependência TanStack Query está montada no shell, mas o fluxo da página não contém query.
- A sidebar e `NavLink` são componentes reutilizáveis sem uso identificado na página principal.
- As relações representam imports/uso observados, não chamadas HTTP.

**Confiança:** 🟢 **CONFIRMADO** — estrutura e imports do caminho principal.
