# Requirements: Contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-08`
> Pasta da extração reversa: `_reversa_sdd/`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA / DÚVIDA

## 1. Resumo executivo

A página do cartão deve oferecer, além da ligação já disponível, uma ação para abrir uma conversa no WhatsApp com o contato de emergência configurado. A pessoa que consulta o cartão poderá escolher como iniciar o contato e escrever/enviar a mensagem por conta própria. Esta feature altera o site atual; o protótipo independente da feature `001-validar-prototipo-emergencia` não será implementado neste projeto e permanece fora deste escopo.

## 2. Contexto a partir do legado

| Fonte | Trecho relevante | Confidência |
|-------|------------------|-------------|
| `_reversa_sdd/architecture.md#Integrações` | A página é estática e usa `tel:` para iniciar a ligação; não há API de runtime identificada. | 🟢 |
| `_reversa_sdd/domain.md#Glossário` | O contato de emergência já tem nome e telefone; o telefone formatado é usado na ação de ligação. | 🟢 |
| `_reversa_sdd/domain.md#Regras de negócio observáveis` | A ação atual interpola o telefone formatado em um URI `tel:` e não há edição dos dados na aplicação. | 🟢 |
| `_reversa_sdd/code-analysis.md#Módulos` | O componente `EmergencyContact` apresenta o contato e a ação telefônica; a tela usa dados estáticos. | 🟢 |
| `_reversa_sdd/user-stories/acionar-contato-de-emergencia.md#Critérios de Aceite` | A história existente descreve a ligação para o contato configurado. | 🟢 |

## 3. Personas e cenários de uso

| Persona | Objetivo | Cenário-chave |
|---------|----------|---------------|
| Pessoa que consulta o cartão | Contatar o contato de emergência pelo meio disponível e conveniente. | Na área de contato, escolhe ligar ou abrir uma conversa no WhatsApp com o contato configurado. |

## 4. Regras de negócio novas ou alteradas

1. **RN-01:** A ação de ligação existente deve continuar disponível quando a nova ação de WhatsApp for adicionada. 🟢
   - Origem no legado: `_reversa_sdd/domain.md#Regras de negócio observáveis`.
   - Tipo: alterada
2. **RN-02:** A ação de WhatsApp deve direcionar à conversa com o mesmo contato de emergência configurado no cartão. 🟢
   - Origem no legado: `_reversa_sdd/domain.md#Glossário`.
   - Tipo: nova
3. **RN-03:** Abrir a conversa não envia uma mensagem automaticamente. A pessoa decide o conteúdo e confirma o envio no WhatsApp. 🟢
   - Origem no legado: não aplicável; regra nova para a ação de contato.
   - Tipo: nova
4. **RN-04:** A ação de WhatsApp não deve preencher ou transmitir dados de saúde do cartão como conteúdo da mensagem. 🟡
   - Origem no legado: não aplicável; regra nova para a ação de contato.
   - Tipo: nova

## 5. Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de aceite | Confidência |
|----|-----------|------------|--------------------|-------------|
| RF-01 | Manter a ação de ligação para o contato de emergência. | Must | A área de contato continua oferecendo a ação que inicia uma ligação para o telefone configurado. | 🟢 |
| RF-02 | Adicionar uma ação de WhatsApp que abra uma conversa direcionada ao telefone do contato de emergência configurado. | Must | Ao acionar WhatsApp, o aplicativo ou a versão web do WhatsApp abre uma conversa direcionada ao mesmo contato apresentado no cartão. | 🟢 |
| RF-03 | Exigir ação explícita da pessoa para compor e enviar qualquer mensagem. | Must | A conversa abre sem mensagem enviada automaticamente; a pessoa pode revisar e decidir se envia uma mensagem. | 🟢 |
| RF-04 | Não incluir dados médicos do cartão no link ou em mensagem pré-preenchida. | Must | A ação abre a conversa sem texto pré-preenchido e sem transmitir conteúdo clínico do cartão. | 🟡 |
| RF-05 | Apresentar as ações de ligação e WhatsApp com rótulos compreensíveis e acessíveis em telas pequenas e grandes. | Must | As duas ações permanecem identificáveis e acionáveis em layouts móveis e desktop, inclusive por tecnologia assistiva. | 🟡 |
| RF-06 | Não oferecer um link de WhatsApp inválido se o telefone necessário estiver ausente ou não puder ser usado como destino. | Should | Na ausência de um telefone utilizável para WhatsApp, a ação de WhatsApp não inicia um destino inválido e a ação de ligação continua disponível quando seu telefone estiver configurado. | 🟡 |

## 6. Requisitos Não Funcionais

| Tipo | Requisito | Evidência ou justificativa | Confidência |
|------|-----------|----------------------------|-------------|
| Privacidade | A ação não deve acrescentar persistência, telemetria ou transmissão de dados clínicos; o destino externo recebe somente o número necessário para abrir a conversa. | O legado é uma SPA estática sem API de runtime; a conversa é conduzida fora do site. | 🟡 |
| Acessibilidade | Os dois meios de contato devem ter nomes acessíveis e estados acionáveis claros. | A página é usada em dispositivos móveis e a ação deve ser identificável sem depender apenas de ícone ou cor. | 🟡 |
| Compatibilidade | O destino deve permitir que o dispositivo ou navegador encaminhe a pessoa ao WhatsApp disponível, mantendo a ligação como alternativa. | O legado já usa URI `tel:`; a disponibilidade do aplicativo ou sessão web depende do ambiente do usuário. | 🟡 |

## 7. Critérios de Aceitação

```gherkin
Cenário: Abrir conversa no WhatsApp
  Dado que o cartão apresenta um contato de emergência com telefone configurado
  Quando a pessoa aciona a opção WhatsApp
  Então o dispositivo ou navegador abre uma conversa direcionada ao telefone desse contato
  E nenhuma mensagem é enviada automaticamente

Cenário: Manter a ligação como opção
  Dado que o cartão apresenta o contato de emergência
  Quando a pessoa consulta as ações de contato
  Então a ação de ligação continua disponível junto à opção WhatsApp

Cenário: Não incluir dados clínicos na conversa
  Dado que a pessoa aciona a opção WhatsApp
  Quando a conversa é aberta
  Então nenhum dado médico do cartão é incluído no destino ou em uma mensagem pré-preenchida

Cenário: Telefone indisponível para WhatsApp
  Dado que não há telefone utilizável para abrir uma conversa
  Quando a área de contato é apresentada
  Então a opção WhatsApp não conduz a um destino inválido
  E a ação de ligação permanece disponível se houver telefone configurado para ela
```

## 8. Prioridade MoSCoW

| Item | MoSCoW | Justificativa |
|------|--------|---------------|
| RF-01 | Must | A nova opção é complementar e não deve remover a ligação já existente. |
| RF-02 | Must | É o objetivo principal da feature. |
| RF-03 | Must | A pessoa deve controlar o envio da mensagem. |
| RF-04 | Must | Evita incluir informação médica no conteúdo encaminhado ao serviço externo. |
| RF-05 | Must | As duas opções precisam ser utilizáveis na superfície móvel e desktop. |
| RF-06 | Should | Evita apresentar uma ação que não pode cumprir sua finalidade. |

## 9. Esclarecimentos

> Nenhuma sessão de dúvidas registrada ainda. Rode `/reversa-clarify` se surgir algum ponto em aberto.

## 10. Lacunas

- Nenhuma lacuna bloqueante identificada para definir o escopo inicial. A feature considera o telefone do contato de emergência como destino do WhatsApp, conforme o pedido; detalhes de implementação serão definidos no plano.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-11-08 | Versão inicial dos requisitos para contato por WhatsApp; registrado que o protótipo independente anterior não será implementado neste projeto. | Reversa |