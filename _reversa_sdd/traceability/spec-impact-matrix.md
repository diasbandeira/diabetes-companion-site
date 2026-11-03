# Spec Impact Matrix

| Área alterada | Componentes/fontes impactados | Artefatos de especificação relacionados | Verificação recomendada |
|---|---|---|---|
| Campos ou estrutura de `PatientData` | `src/data/patientData.ts`, `src/pages/Index.tsx`, componentes de paciente | `data-dictionary.md`, `domain.md`, `erd-complete.md`, módulo cartão do paciente | Conferir o contrato e apresentação de cada campo |
| Conteúdo clínico ou medicamentoso | `src/data/patientData.ts`, `HypoglycemiaGuide`, `MedicationList` | `domain.md`, `data-dictionary.md`, ADR-001 | Revisão clínica/proveniência; não há validador automático identificado |
| Rota ou base da aplicação | `src/App.tsx`, `src/main.tsx`, `vite.config.ts`, workflow Pages | C4 Contexto/Containers/Componentes, `deployment.md`, ADR-002 | Conferir rota raiz e subcaminho publicado |
| Componente visual compartilhado | `src/components/ui/*`, `src/lib/utils.ts`, consumidores | C4 Componentes, módulo UI, legacy mapping | Conferir consumidores e estados acessíveis |
| Toasts ou responsividade | `src/hooks/use-toast.ts`, `use-mobile.tsx`, `Toaster`, `Sidebar` | Fluxos de infraestrutura e módulo compartilhado | Conferir transições e listeners; sem cobertura de teste observada |
| Pipeline ou hospedagem | `.github/workflows/deploy.yml`, `vite.config.ts`, assets PWA | `deployment.md`, C4 Contexto/Containers, ADR-002 | Executar build e confirmar assets referenciados/saída |
| Acesso/privacidade do cartão | Configuração do repositório/GitHub Pages e dados do frontend | `permissions.md`, `domain.md`, ADR-001, requirements/tasks do cartão | André informou que não existe autorização para a publicação atual; bloquear o bundle público/remover os dados até autorização. |

## Limites

Esta matriz deriva dos imports e artefatos identificados; não há suite de testes nem cobertura automatizada mapeada. As validações clínicas e de acesso dependem de responsáveis e configurações não presentes neste repositório. 🟡 **INFERIDO** quanto ao impacto futuro; relações entre arquivos existentes são 🟢 **CONFIRMADO**.
