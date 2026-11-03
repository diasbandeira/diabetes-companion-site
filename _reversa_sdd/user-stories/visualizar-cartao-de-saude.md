# User Story — Visualizar cartão de saúde

## História

🟡 **INFERIDO** — Como pessoa que consulta o cartão, quero ver as informações médicas disponibilizadas em uma única página, para poder consultá-las quando necessário.

O perfil de usuário e a finalidade operacional não estão especificados no código. 🔴 **LACUNA**.

## Critérios de Aceite

```gherkin
Dado que a aplicação foi carregada e há dados autorizados disponíveis no bundle
Quando a pessoa abre a rota principal
Então são apresentadas identificação, condições, orientação, tratamentos e contato do cartão

Dado que os dados incluem coleções com itens
Quando a página é renderizada
Então cada item aparece na seção correspondente, sem cálculo clínico ou edição pela interface

Dado que uma coleção está vazia
Quando a página é renderizada
Então a seção correspondente é ocultada

Dado que ocorre uma falha inesperada nos dados
Quando a página tenta renderizar o cartão
Então mostra erro visível e impede conteúdo enganoso

Dado que não existe autorização para publicar dados médicos/de contato
Quando o bundle público é preparado
Então os dados não são incluídos nem publicados
```

Os cenários de apresentação inicial são observados; ocultar seções vazias e tratar falhas inesperadas como erro visível são requisitos confirmados por André, ainda não implementados. 🟢 para o fluxo observado e a decisão; 🔴 **LACUNA DE IMPLEMENTAÇÃO** — componentes em `src/components/patient/`.

## Fora de Escopo Observado

- Edição, persistência ou sincronização dos dados. 🟢 **CONFIRMADO**.
- Diagnóstico, interpretação clínica ou cálculo de dose. 🟢 **CONFIRMADO**.
- Autorização para publicação: André confirmou que não existe atualmente, portanto a publicação pública deve ser bloqueada. 🔴 **BLOQUEIO CRÍTICO**.
- Revisão clínica independente: o usuário definiu que o paciente determina alterações; não há revisão profissional independente. 🔴 **LACUNA DE CONTROLE**.

## Rastreabilidade

- Requisitos: `_reversa_sdd/cartao-de-saude-do-paciente/requirements.md`.
- Design: `_reversa_sdd/cartao-de-saude-do-paciente/design.md`.
- Implementação observada: `src/pages/Index.tsx`, `src/data/patientData.ts`, `src/components/patient/`.
