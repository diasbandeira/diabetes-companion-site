# Domínio — cartão de saúde

## Propósito observado

A aplicação apresenta um cartão de informações médicas em uma página web: identificação do paciente, condições, orientação para hipoglicemia, medicamentos/insulinas e contato de emergência. O código analisado é de apresentação; não há diagnóstico, acompanhamento clínico ou edição dos dados.

## Glossário

| Termo | Significado no código | Confiança |
|---|---|---|
| Cartão de saúde | Tela única composta por `src/pages/Index.tsx` | 🟢 **CONFIRMADO** |
| Paciente | Registro estático tipado por `PatientData` | 🟢 **CONFIRMADO** |
| Condição de saúde | Texto em `conditions`, renderizado como badge | 🟢 **CONFIRMADO** |
| Guia de hipoglicemia | Texto de ação e listas separadas entre sintomas comuns e graves | 🟢 **CONFIRMADO** |
| Medicamento | Nome e instrução textual de uso | 🟢 **CONFIRMADO** |
| Insulina | Nome e lista de instruções textuais | 🟢 **CONFIRMADO** |
| Tabela de correção | Lista de faixas e doses textuais apresentada sem cálculo | 🟢 **CONFIRMADO** |
| Contato de emergência | Nome apresentado; `formattedPhone` usado no link `tel:`. O campo `phone` existe no modelo, mas não é renderizado pelo componente atual. | 🟢 **CONFIRMADO** |

## Regras de negócio observáveis

1. A página usa o objeto estático `patientData` como fonte dos dados apresentados (`src/data/patientData.ts`). 🟢 **CONFIRMADO**
2. A página renderiza todas as seções de conteúdo; arrays são percorridos para criar os respectivos itens visuais. 🟢 **CONFIRMADO**
3. O conteúdo de medicamentos, doses e tabela é apresentado como texto; o frontend não calcula nem valida doses. 🟢 **CONFIRMADO**
4. A ação de contato interpola `formattedPhone` em um URI `tel:`. 🟢 **CONFIRMADO**
5. Não foram encontrados papéis, contas, permissões ou fluxo de atualização dos dados na aplicação. 🟢 **CONFIRMADO** quanto ao código analisado; regras de acesso no serviço de hospedagem são externas a este repositório.

## Histórico relevante

- `b724dfc` (2025-12-14): adicionou uma página estática do cartão.
- `4d8d0d0` (2026-01-18): alterou a apresentação do conteúdo de hipoglicemia.
- `c9791b6` e `5b5a430` (2026-04-12): registram alterações de conteúdo médico/medicamentoso e padronização textual. Os commits não documentam aprovação clínica.
- `f3a30f1` (2026-04-13): refatorou o cartão para módulos React/Vite e adicionou preparação de publicação no GitHub Pages.

As mensagens de commit demonstram que o conteúdo clínico mudou, mas não registram fonte, responsável pela validação clínica ou processo de revisão. 🔴 **LACUNA**

## Limites e lacunas

- 🔴 **LACUNA:** origem, atualização e aprovação clínica dos dados não estão documentadas no código.
- 🔴 **LACUNA:** não há especificação de público-alvo nem de controle de acesso fora do frontend.
- 🟡 **INFERIDO:** a apresentação em página estática sugere uso como referência rápida, mas essa finalidade operacional não é explicitada em documentação técnica.

Os valores pessoais e clínicos concretos não são reproduzidos neste documento.
