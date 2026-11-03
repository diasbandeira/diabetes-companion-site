# Cartão de saúde do paciente — Design Técnico

## Interface

| Símbolo | Entrada | Saída | Observação |
|---|---|---|---|
| `patientData` | Objeto `PatientData` estático | Dados consumidos pelo cartão | Identificação, condições, contato, guia, medicamentos, insulinas e faixas/doses textuais. 🟢 |
| `Index` | Nenhuma prop | `JSX.Element` | Importa `patientData` e compõe os componentes do cartão. 🟢 |
| `PatientHeader` | `{ data: PatientData }` | `JSX.Element` | Exibe identificação e dados demográficos. 🟢 |
| `ConditionList` | `{ conditions: string[] }` | `JSX.Element` | Renderiza um badge por condição. 🟢 |
| `HypoglycemiaGuide` | `{ action: string; mildSymptoms: string[]; severeSymptoms: string[] }` | `JSX.Element` | Separa orientação, sintomas comuns e graves. 🟢 |
| `MedicationList` | Medicamentos, insulinas e tabela de correção | `JSX.Element` | Todos os nomes, instruções, faixas e doses são strings de apresentação. 🟢 |
| `EmergencyContact` | `{ name: string; phone: string; formattedPhone: string }` | `JSX.Element` | O nome é apresentado em telas `sm` ou maiores; o link usa `formattedPhone`; `phone` não é renderizado. 🟢 |

André confirmou que `phone` deve permanecer como dado auxiliar, sem exibição no cartão. 🟢 **CONFIRMADO PELO USUÁRIO**.

O tipo `PatientData` torna todos os campos obrigatórios em TypeScript; não há validação de runtime ou tipos refinados identificados. 🟢 **CONFIRMADO** — `src/data/patientData.ts`.

## Fluxo Principal

1. `Index` importa `patientData` e os componentes da pasta `components/patient/`. 🟢 — `src/pages/Index.tsx`.
2. `PatientHeader` recebe os dados de identificação; `ConditionList` recebe as condições. 🟢 — `src/pages/Index.tsx`.
3. `HypoglycemiaGuide` recebe orientação e listas de sintomas; `MedicationList` recebe medicamentos, insulinas e tabela de correção. 🟢 — `src/pages/Index.tsx`.
4. `EmergencyContact` recebe os dados do contato fora do contêiner principal do cartão. 🟢 — `src/pages/Index.tsx`.
5. A interface renderiza cada coleção por `map`; não executa cálculos clínicos nem altera os valores recebidos. 🟢 — componentes em `src/components/patient/`.
6. A ação de emergência gera um link `tel:` com o campo `formattedPhone`. 🟢 — `src/components/patient/EmergencyContact.tsx`.

## Fluxos Alternativos

- **Coleção vazia:** atualmente o componente mantém a seção e não renderiza itens; André confirmou que o comportamento esperado é ocultar a seção. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.
- **Campo obrigatório ausente ou dado de runtime incompatível:** não há validação ou fallback explícito; o comportamento esperado confirmado é exibir erro visível e impedir conteúdo enganoso. 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/data/patientData.ts`.
- **Ambiente sem suporte a `tel:`:** o comportamento de ativação depende do navegador/dispositivo; André confirmou que `formattedPhone` deve estar disponível como texto selecionável/copiável. O código atual não mostra essa alternativa. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.

## Dependências

- `src/data/patientData.ts`: contrato `PatientData` e fonte estática importada pela tela. 🟢
- `src/pages/Index.tsx`: compõe os elementos e encaminha os dados. 🟢
- `components/ui/badge`, `components/ui/card` e `components/ui/button`: elementos visuais usados nas listas e na ação telefônica. 🟢
- `components/ui/separator`: importado por `MedicationList`, mas não usado no JSX observado. 🟢
- `lucide-react`: ícones apresentados no cabeçalho, guia, listas e contato. 🟢
- Nenhum endpoint, serviço remoto ou armazenamento persistente é utilizado pelo fluxo analisado. 🟢 **CONFIRMADO** — `src/pages/Index.tsx` e `src/data/patientData.ts`.

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---|---|---|
| Manter o conteúdo médico em objeto estático importado pelo frontend | `src/data/patientData.ts`, `src/pages/Index.tsx` | 🟢 |
| Separar a tela em componentes de apresentação por seção do cartão | `src/pages/Index.tsx`, `src/components/patient/` | 🟢 |
| Representar instruções, faixas e doses como texto, sem cálculo no frontend | `src/data/patientData.ts`, `src/components/patient/MedicationList.tsx` | 🟢 |
| Usar URI `tel:` para iniciar a ação de contato | `src/components/patient/EmergencyContact.tsx` | 🟢 |

## Estado Interno

- A unit não declara estado React próprio; os componentes recebem props e renderizam os dados fornecidos. 🟢 **CONFIRMADO** — componentes em `src/components/patient/`.
- A fonte de dados é uma constante do módulo, sem edição ou sincronização remota identificada. 🟢 **CONFIRMADO** — `src/data/patientData.ts`.
- O fluxo operacional informado é: paciente comunica alterações e desenvolvedor ajusta a fonte estática. 🟢 **CONFIRMADO PELO USUÁRIO**; não há fluxo equivalente identificado no código.
- Não há autorização para distribuir os dados médicos e de contato no bundle público. 🟢 **CONFIRMADO PELO USUÁRIO**; a configuração atual os inclui no frontend, configurando bloqueio crítico de publicação. 🔴

## Observabilidade

- Não foram identificados logs, métricas ou traces emitidos pela unit. 🟢 **CONFIRMADO** — arquivos da unit analisados.

## Riscos e Lacunas

- 🔴 A atualização foi descrita pelo usuário (paciente informa; desenvolvedor atualiza ou remove), mas não há fluxo automatizado no código nem prazo de remoção; não existe revisão clínica independente conforme decisão informada.
- 🔴 **Bloqueio crítico:** não há autorização para publicação pública dos dados; a aplicação atual os importa no bundle servido ao cliente.
- 🔴 Não há validação de runtime para campos obrigatórios, formato de telefone ou consistência das coleções; o usuário espera erro visível para falhas inesperadas e ocultação de seções vazias.
- 🔴 Não há alternativa selecionável/copiável para `formattedPhone` caso o protocolo `tel:` não funcione.
- 🟡 Os dados são enviados ao cliente no bundle estático; o controle de acesso e a adequação da publicação para informações médicas precisam ser validados pelo responsável pelo produto.
