# Mapeamento do legado — cartão de saúde do paciente

## Arquivos que compõem o módulo

| Arquivo | Responsabilidade | Símbolo/trecho |
|---|---|---|
| `src/data/patientData.ts` | Interface do modelo e objeto estático consumido pela tela | `PatientData` (linha 1), `patientData` (linha 30) |
| `src/pages/Index.tsx` | Composição da tela e distribuição das props | `Index` (linha 8) |
| `src/components/patient/PatientHeader.tsx` | Exibição de identificação e dados demográficos | `PatientHeader` (linha 4) |
| `src/components/patient/ConditionList.tsx` | Lista de condições como badges | `ConditionList` (linha 3) |
| `src/components/patient/HypoglycemiaGuide.tsx` | Exibição de ação e listas de sintomas | `HypoglycemiaGuide` (linha 11) |
| `src/components/patient/MedicationList.tsx` | Exibição de medicamentos, insulinas, doses e tabela | `MedicationList` (linha 11) |
| `src/components/patient/EmergencyContact.tsx` | Contato e ação de ligação por `tel:` | `EmergencyContact` (linha 12) |

## Acoplamentos observados

- `Index` importa o modelo de `data/` e todos os componentes de `components/patient/`.
- `ConditionList`, `MedicationList` e `EmergencyContact` reutilizam componentes visuais de `components/ui/`.
- Os dados estão acoplados à compilação do frontend por import estático; não há contrato de serviço identificado.

**Confiança:** 🟢 CONFIRMADO — caminhos e símbolos verificados no código.
