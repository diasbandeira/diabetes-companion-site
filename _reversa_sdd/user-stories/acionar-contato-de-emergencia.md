# User Story — Acionar contato de emergência

## História

🟡 **INFERIDO** — Como pessoa que consulta o cartão, quero iniciar uma ligação para o contato configurado, para poder tentar contatá-lo quando necessário.

O perfil de usuário, a finalidade do contato e o comportamento em dispositivos sem discagem não são especificados no código. 🔴 **LACUNA**.

## Critérios de Aceite

```gherkin
Dado que a página do cartão foi carregada com um contato configurado
Quando a pessoa ativa a ação de ligação
Então a ação está associada a um link tel: construído com formattedPhone

Dado que o dispositivo ou navegador não oferece suporte à ação tel:
Quando a pessoa ativa o link
Então `formattedPhone` fica disponível como texto selecionável/copiável
```

A geração do link é observada no componente; o texto alternativo é requisito confirmado, mas não está implementado. 🟢 **CONFIRMADO** para o link e 🔴 **LACUNA DE IMPLEMENTAÇÃO** para o fallback — `src/components/patient/EmergencyContact.tsx`.

## Fora de Escopo Observado

- Validar que o contato atende, recebe ou está disponível. 🟢 **CONFIRMADO** — não há integração de telefonia.
- Registrar chamadas ou persistir o resultado da ação. 🟢 **CONFIRMADO** — não há esse fluxo identificado.
- Não publicar dados médicos/de contato sem autorização; André informou que não há autorização atual. 🔴 **BLOQUEIO CRÍTICO**.

## Rastreabilidade

- Requisitos: `_reversa_sdd/cartao-de-saude-do-paciente/requirements.md`.
- Casos extremos: `_reversa_sdd/cartao-de-saude-do-paciente/edge-cases.md`.
- Implementação observada: `src/components/patient/EmergencyContact.tsx`, `src/data/patientData.ts`.
