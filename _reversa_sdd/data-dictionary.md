# Dicionário de dados

## `PatientData`

Contrato TypeScript declarado em `src/data/patientData.ts`. Todos os campos da interface são obrigatórios; o objeto exportado é uma constante estática do frontend. Valores pessoais e clínicos não são reproduzidos aqui.

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---:|---|
| `name` | `string` | sim | Nome exibido no cabeçalho |
| `dob` | `string` | sim | Data de nascimento exibida como texto |
| `bloodType` | `string` | sim | Tipo sanguíneo exibido como texto |
| `conditions` | `string[]` | sim | Condições renderizadas como badges |
| `emergencyContact` | objeto | sim | Contato e destino do link telefônico |
| `hypoglycemia` | objeto | sim | Texto de ação e listas de sintomas exibidos pelo guia |
| `medications` | `Array<Medication>` | sim | Medicamentos de uso contínuo exibidos |
| `insulins` | `Array<Insulin>` | sim | Insulinas e instruções de dose exibidas |
| `correctionTable` | `Array<CorrectionEntry>` | sim | Faixas e doses apresentadas na tabela |

### Tipos aninhados

| Tipo/objeto | Campo | Tipo | Obrigatório | Uso |
|---|---|---|---:|---|
| `EmergencyContact` | `name` | `string` | sim | Nome apresentado no contato |
| `EmergencyContact` | `phone` | `string` | sim | Telefone fonte no modelo; não é renderizado pelo componente atual |
| `EmergencyContact` | `formattedPhone` | `string` | sim | Valor interpolado no URI `tel:` |
| `HypoglycemiaGuideData` | `action` | `string` | sim | Texto de orientação mostrado |
| `HypoglycemiaGuideData` | `mildSymptoms` | `string[]` | sim | Itens da lista de sintomas comuns |
| `HypoglycemiaGuideData` | `severeSymptoms` | `string[]` | sim | Itens da lista de sintomas graves |
| `Medication` | `name` | `string` | sim | Nome e apresentação textual do medicamento |
| `Medication` | `dosage` | `string` | sim | Instrução de uso textual |
| `Insulin` | `name` | `string` | sim | Nome da insulina |
| `Insulin` | `dosage` | `string[]` | sim | Instruções de dose textuais |
| `CorrectionEntry` | `range` | `string` | sim | Faixa textual exibida |
| `CorrectionEntry` | `dose` | `string` | sim | Dose textual exibida |

Os nomes acima são rótulos descritivos deste dicionário; no código, os tipos aninhados são declarados inline dentro de `PatientData`, não exportados como interfaces separadas.

## Representação e validação

- `dob`, telefone, faixa e dose são strings; não há tipos refinados, parsing, validação de formato ou cálculo associado no modelo.
- Não há identificadores de registro, chaves relacionais, timestamps de atualização ou metadados de origem.
- A fonte efetiva é o objeto `patientData` em `src/data/patientData.ts`; não há persistência ou sincronização remota identificada.

**Confiança:** 🟢 CONFIRMADO — campos e tipos extraídos de `PatientData`. A origem e o processo de revisão clínica são 🔴 **LACUNA** no código analisado.
