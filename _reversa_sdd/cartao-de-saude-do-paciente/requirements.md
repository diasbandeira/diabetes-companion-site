# Cartão de saúde do paciente — Requisitos

## Visão Geral

Esta unit apresenta uma página de cartão de informações médicas composta por dados estáticos importados pelo frontend. 🟢 **CONFIRMADO** — `src/pages/Index.tsx`, `src/data/patientData.ts`.

O fluxo exibe identificação, condições, orientação para hipoglicemia, medicamentos, insulinas, tabela de correção e um contato telefônico de emergência. 🟢 **CONFIRMADO** — componentes em `src/components/patient/`.

## Responsabilidades

- Exibir identificação e dados demográficos disponíveis no modelo. 🟢 **CONFIRMADO**
- Apresentar condições, orientação e listas de tratamentos sem alterar os dados. 🟢 **CONFIRMADO**
- Apresentar a ação de ligação para o contato configurado. 🟢 **CONFIRMADO**
- Consumir dados definidos no bundle do frontend, sem leitura ou gravação remota identificada. 🟢 **CONFIRMADO**

## Regras de Negócio

- O objeto `patientData` é a fonte dos dados exibidos pela página. 🟢 **CONFIRMADO** — `src/data/patientData.ts`.
- A tela não oferece edição, diagnóstico ou acompanhamento clínico. 🟢 **CONFIRMADO** — `src/pages/Index.tsx` e componentes da unit.
- O guia separa sintomas comuns e graves e exibe a orientação configurada no modelo. 🟢 **CONFIRMADO** — `src/components/patient/HypoglycemiaGuide.tsx`.
- O link telefônico usa `formattedPhone`; o nome é apresentado em telas `sm` ou maiores. O campo `phone` existe no modelo, mas não é renderizado pelo componente. 🟢 **CONFIRMADO** — `src/components/patient/EmergencyContact.tsx`.
- O paciente informa alterações e o desenvolvedor atualiza ou remove os dados quando avisado. 🟢 **CONFIRMADO PELO USUÁRIO**; o prazo para remoção não foi especificado. 🟡.
- O paciente define as alterações do conteúdo clínico; não há revisão independente por profissional de saúde. 🟢 **CONFIRMADO PELO USUÁRIO**. A aplicação não valida a segurança clínica dessas alterações. 🔴 **LACUNA DE CONTROLE**.
- O usuário informou que não há autorização para publicar os dados médicos e de contato no bundle público. 🟢 **CONFIRMADO PELO USUÁRIO**. A implementação atual os importa no frontend; distribuição pública deve ser bloqueada até resolução. 🔴 **BLOQUEIO CRÍTICO**.
- Os dados são esperados como válidos e completos; em falha inesperada deve ser mostrado erro visível, e seções com listas vazias devem ser ocultadas. 🟢 **CONFIRMADO PELO USUÁRIO**; não implementado no legado. 🔴
- Se `tel:` não puder ser usado, `formattedPhone` deve permanecer disponível como texto selecionável/copiável. 🟢 **CONFIRMADO PELO USUÁRIO**; o componente atual só fornece o link. 🔴
- A adequação clínica das orientações e dos valores não é verificada pela aplicação. 🔴 **LACUNA**.

## Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de Aceite |
|---|---|---|---|
| RF-01 | Apresentar identificação, data de nascimento e tipo sanguíneo do modelo. 🟢 | Must | O cabeçalho renderiza os campos disponíveis sem substituir seus valores. |
| RF-02 | Apresentar cada condição de saúde como item visual. 🟢 | Must | A lista contém um item para cada entrada de `conditions`. |
| RF-03 | Apresentar a orientação de hipoglicemia e separar sintomas comuns de sintomas graves. 🟢 | Must | O texto de ação e os itens das duas listas são exibidos em suas respectivas seções. |
| RF-04 | Apresentar medicamentos de uso contínuo, instruções de insulina e tabela de correção. 🟢 | Must | Cada coleção é renderizada conforme seus itens, sem cálculo ou transformação clínica no frontend. |
| RF-05 | Apresentar o contato de emergência e disponibilizar um link `tel:` construído com `formattedPhone`. 🟢 | Must | A ação contém o URI telefônico derivado do campo configurado. |
| RF-06 | Consumir os dados estáticos do frontend, sem persistir alterações na página. 🟢 | Must | A tela renderiza `patientData` importado; não há edição ou sincronização remota neste fluxo. |
| RF-07 | Não publicar dados médicos ou de contato no bundle público sem autorização. 🟢 **REQUISITO CONFIRMADO PELO USUÁRIO** | Must | A publicação desses dados fica bloqueada enquanto não houver autorização; o comportamento atual não satisfaz este requisito. 🔴 |
| RF-08 | Manter `phone` como dado auxiliar, sem exibi-lo no cartão. 🟢 **CONFIRMADO PELO USUÁRIO** | Should | O contato não apresenta o valor de `phone`; o uso auxiliar deve ser documentado. |
| RF-09 | Em falha inesperada de dados, apresentar erro visível e impedir conteúdo enganoso; ocultar seções sem itens. 🟢 **CONFIRMADO PELO USUÁRIO** | Must | Dados válidos são o caso esperado; dados inválidos geram fallback visível e listas vazias não renderizam suas seções. A implementação atual não satisfaz o critério. 🔴 |
| RF-10 | Exibir `formattedPhone` como texto selecionável/copiável quando `tel:` não puder ser usado. 🟢 **CONFIRMADO PELO USUÁRIO** | Should | A ação telefônica tem alternativa legível; o campo `phone` continua sem exibição. O mecanismo de detecção/fallback não existe no código atual. 🔴 |

## Requisitos Não Funcionais

| Tipo | Requisito observado | Evidência no código | Confiança |
|---|---|---|---|
| Segurança e privacidade | Os dados são importados no frontend; não foi identificado controle de acesso nesta unit. Quem acessa a aplicação publicada pode inspecionar dados incluídos no bundle. | `src/data/patientData.ts`; `src/pages/Index.tsx` | 🟢 **CONFIRMADO** |
| Autorização de publicação | O usuário informou que não há autorização para publicar esses dados no bundle público; não publicar até obter autorização ou remover os dados da publicação. | Confirmação do usuário; implementação observada em `src/data/patientData.ts` e `src/pages/Index.tsx` | 🔴 **BLOQUEIO CRÍTICO** |

Não foram identificados requisitos explícitos de timeout, retry, disponibilidade ou persistência para esta unit. 🟢 **CONFIRMADO** — o fluxo analisado não realiza chamadas remotas.

## Critérios de Aceitação

```gherkin
Dado que o bundle contém um objeto patientData válido
Quando a pessoa abre a página principal do cartão
Então a página apresenta identificação, condições, orientação, tratamentos e contato do modelo

Dado que o objeto contém itens nas listas de sintomas, medicamentos, insulinas e correção
Quando o cartão é renderizado
Então cada item é apresentado em sua seção sem cálculo ou edição dos valores

Dado que o objeto não contém um campo obrigatório ou contém um telefone inválido
Quando a página é renderizada ou a ação telefônica é acionada
Então deve ser apresentado erro visível sem conteúdo enganoso e a ação telefônica inválida não deve ser oferecida

Dado que não há autorização para publicar os dados médicos e de contato
Quando o workflow prepara o bundle público
Então esses dados não devem ser incluídos nem publicados

Dado que um campo obrigatório está ausente ou incompatível em runtime
Quando a página tenta renderizar o cartão
Então deve exibir erro visível e impedir conteúdo enganoso

Dado que uma coleção não tem itens
Quando a seção correspondente é renderizada
Então a seção é ocultada
```

Os comportamentos para dados inválidos e listas vazias foram confirmados por André, mas não estão implementados; as seções atuais permanecem renderizadas. 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/data/patientData.ts` e componentes da unit. O cenário de autorização é um requisito confirmado que a publicação atual não atende. 🔴 **BLOQUEIO CRÍTICO**.

## Prioridade (MoSCoW)

| Requisito | MoSCoW | Justificativa |
|---|---|---|
| Apresentar as informações médicas do cartão | Must | É o propósito principal da tela. 🟢 |
| Disponibilizar a ação telefônica de emergência | Must | A ação está sempre presente no componente do cartão. 🟢 |
| Aplicar o fluxo informado de atualização e impedir publicação pública sem autorização | Must | O paciente comunica alterações, o desenvolvedor atualiza/remove e a publicação exige autorização; o comportamento atual não cumpre o bloqueio. 🔴 |

As prioridades refletem a estrutura e a chamada direta dos componentes; não há telemetria de uso. 🟡 **INFERIDO**.

## Rastreabilidade de Código

| Arquivo | Função / trecho | Cobertura |
|---|---|---|
| `src/data/patientData.ts` | `PatientData` e objeto estático consumido pela tela | 🟢 |
| `src/pages/Index.tsx` | Composição do cartão e distribuição dos dados | 🟢 |
| `src/components/patient/PatientHeader.tsx` | Identificação e dados demográficos | 🟢 |
| `src/components/patient/ConditionList.tsx` | Apresentação das condições | 🟢 |
| `src/components/patient/HypoglycemiaGuide.tsx` | Orientação e listas de sintomas | 🟢 |
| `src/components/patient/MedicationList.tsx` | Medicamentos, insulinas e tabela de correção | 🟢 |
| `src/components/patient/EmergencyContact.tsx` | Identificação do contato e link `tel:` | 🟢 |
