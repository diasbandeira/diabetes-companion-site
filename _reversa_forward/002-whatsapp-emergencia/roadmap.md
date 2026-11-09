# Roadmap: Contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-08`
> Requirements: `_reversa_forward/002-whatsapp-emergencia/requirements.md`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA

## 1. Resumo da abordagem

Adicionar uma segunda ação de contato ao componente `EmergencyContact`, mantendo a ação `tel:` existente. A conversa será aberta por um link oficial de clique para conversar do WhatsApp, usando o telefone configurado em `formattedPhone` normalizado para dígitos no formato internacional. O link não terá mensagem pré-preenchida. Não são necessários novos campos, APIs, persistência ou dependências.

## 2. Princípios aplicados

`.reversa/principles.md` não existe neste projeto; não há princípios formais adicionais para avaliar.

| Princípio | Como a feature se relaciona | Status |
|-----------|------------------------------|--------|
| Privacidade dos dados do cartão, conforme RF-04 | O link inclui somente o número de destino e não preenche uma mensagem com dados clínicos. O telefone continua sendo dado público no frontend, como já ocorre no destino `tel:`. | respeita; não amplia o conteúdo clínico exposto |
| Preservação do contato telefônico existente | A ligação permanece disponível como ação independente. | respeita |

## 3. Decisões técnicas

| ID | Decisão | Justificativa | Alternativas descartadas | Confidência |
|----|---------|----------------|--------------------------|-------------|
| D-01 | Construir o destino de conversa como `https://wa.me/<telefone>` a partir de `formattedPhone`, removendo caracteres não numéricos. | O valor atual já está em formato internacional; a documentação oficial do WhatsApp requer o número completo sem `+`, espaços, parênteses ou hífens. | Criar um novo campo no modelo; usar o campo local `phone` sem formato internacional. | 🟢 |
| D-02 | Não incluir parâmetro de mensagem no link. | A pessoa deve escolher, revisar e enviar qualquer mensagem explicitamente, sem transmitir conteúdo clínico pelo site. | Mensagem automática ou pré-preenchida. | 🟢 |
| D-03 | Manter `tel:` e adicionar uma ação visual separada de WhatsApp no `EmergencyContact`. | As duas ações atendem preferências e capacidades diferentes; o componente já concentra o contato de emergência. | Substituir a ligação ou criar uma nova página/rota. | 🟢 |
| D-04 | Se o destino normalizado estiver vazio, não renderizar a ação do WhatsApp; preservar a ação telefônica existente. | Evita um link inválido e mantém independência entre os dois meios. | Link `wa.me` sem destino ou fallback silencioso para outro número. | 🟡 |
| D-05 | Usar link externo sem construir integração de API ou estado de aplicação. | O WhatsApp recebe a navegação no dispositivo/navegador e conduz a conversa fora do site. | SDK, API de mensagens, backend ou registro de envio. | 🟢 |

## 4. Premissas

| Premissa | Origem (`requirements.md` seção) | Risco se errada |
|----------|----------------------------------|-----------------|
| O número do contato de emergência é o destino desejado no WhatsApp e está registrado em formato internacional em `formattedPhone`. | Seção 5, RF-02; confirmado pelo pedido e observado em `src/data/patientData.ts`. | A conversa pode abrir para o número errado ou não abrir caso o cadastro não corresponda a uma conta WhatsApp ativa. |
| O dispositivo ou navegador pode encaminhar o link para o WhatsApp ou WhatsApp Web; o site não controla a disponibilidade do aplicativo ou a autenticação. | Seção 6, Compatibilidade. | A pessoa pode precisar escolher outro aplicativo ou não conseguir prosseguir. |

## 5. Delta arquitetural

| Componente | Arquivo de origem no legado | Tipo de mudança | Resumo |
|------------|------------------------------|-----------------|--------|
| Componentes de paciente / `EmergencyContact` | `_reversa_sdd/code-analysis.md#2. Cartão de saúde do paciente`; `src/components/patient/EmergencyContact.tsx` | regra-alterada | Acrescentar ação externa de WhatsApp ao lado da ação `tel:` existente. |
| Dados do paciente / `PatientData.emergencyContact` | `_reversa_sdd/code-analysis.md#2. Cartão de saúde do paciente`; `src/data/patientData.ts` | sem alteração de contrato | Reutilizar `formattedPhone`; não adicionar nem persistir campos. |
| Aplicativo de telefone e WhatsApp | `_reversa_sdd/c4-context.md#Limites de contexto` | contrato externo novo | O navegador encaminha a pessoa para o link de clique para conversar do WhatsApp; não há API de runtime chamada pelo cartão. |

## 6. Delta no modelo de dados

- Resumo das mudanças: nenhuma. A ação reutiliza `PatientData.emergencyContact.formattedPhone`; não há alteração de schema, persistência ou migração.
- Detalhe completo em: `_reversa_forward/002-whatsapp-emergencia/data-delta.md`

## 7. Delta de contratos externos

| Contrato | Tipo | Arquivo de detalhe |
|----------|------|--------------------|
| Link web de clique para conversar do WhatsApp (`https://wa.me/<telefone>`) | navegação externa, não API de aplicação | n/a |

Não há contrato HTTP de backend, fila, gRPC ou GraphQL a documentar em `interfaces/`.

## 8. Plano de migração

1. n/a — não há migração de dados nem alteração de armazenamento.
2. Preservar a ação `tel:` durante a alteração da interface.
3. Não publicar o build enquanto a autorização de publicação dos dados médicos e de contato existentes continuar pendente; validar localmente até essa condição ser resolvida.

## 9. Riscos e mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|-------|---------|---------------|-----------|
| Telefone ausente, inválido ou não associado a uma conta WhatsApp. | médio | médio | Normalizar somente caracteres não numéricos, não renderizar destino vazio e testar o formato sem registrar o número em evidências. |
| A pessoa interpretar o link como envio automático de mensagem ou como garantia de atendimento. | médio | baixo | Rotular a ação como abrir conversa no WhatsApp, não preencher texto e manter explícita a ação separada de ligação. |
| O WhatsApp não estar instalado, autenticado ou disponível no dispositivo. | médio | médio | Manter a ação `tel:` e permitir que o navegador use a navegação web do WhatsApp quando disponível; não prometer conclusão da conversa. |
| Publicar novamente dados de saúde e contato sem autorização. | alto | médio | Não alterar nem acionar o workflow de publicação nesta feature; validar localmente e bloquear publicação até a autorização ou remoção dos dados ser resolvida. |
| Link externo com alvo em nova aba sem proteção apropriada, se essa opção de UX for adotada. | baixo | baixo | Se a implementação usar `target="_blank"`, incluir `rel="noopener noreferrer"`; caso contrário, navegar sem abrir contexto adicional. |

## 10. Critério de pronto

- [ ] Todas as ações de `actions.md` marcadas `[X]`.
- [ ] A ação `tel:` existente continua funcionando.
- [ ] O link `wa.me` usa somente o telefone normalizado, sem mensagem pré-preenchida ou conteúdo clínico.
- [ ] O destino vazio não produz link inválido.
- [ ] As duas ações têm nomes visíveis e acessíveis em layouts móveis e desktop.
- [ ] `cross-check.md` (se executado) sem CRITICAL nem HIGH.
- [ ] `regression-watch.md` gerado.
- [ ] Publicação pública não realizada enquanto a autorização de dados existentes estiver pendente.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-11-08 | Versão inicial gerada por `/reversa-plan`. | reversa |
