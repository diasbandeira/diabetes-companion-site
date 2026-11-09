# Actions: Contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-09`
> Roadmap: `_reversa_forward/002-whatsapp-emergencia/roadmap.md`

## Resumo

| Métrica | Valor |
|---------|-------|
| Total de ações | 4 |
| Paralelizáveis (`[//]`) | 1 |
| Maior cadeia de dependência | 3 |

## Fase 1, Preparação

Não há scaffolding, configuração, migração ou dependência nova prevista.

## Fase 2, Testes

O inventário não identificou infraestrutura nem script de testes automatizados. A validação manual e o build ficam na fase de integração; não se cria uma suíte de testes sem decisão técnica adicional.

## Fase 3, Núcleo

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T001 | Derivar o número do WhatsApp de `formattedPhone` removendo caracteres não numéricos e não produzir destino quando o resultado estiver vazio | - | - | `src/components/patient/EmergencyContact.tsx` | 🟢 | `[ ]` |
| T002 | Adicionar a ação de WhatsApp com rótulo acessível usando o destino derivado, sem mensagem pré-preenchida e preservando a ação `tel:` existente | T001 | - | `src/components/patient/EmergencyContact.tsx` | 🟢 | `[ ]` |

## Fase 4, Integração

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T003 | Executar o build e verificar localmente as ações de ligação e WhatsApp, incluindo layout móvel/desktop, destino construído com número sintético, ausência de texto pré-preenchido e estado sem telefone utilizável; não navegar para o contato real nem publicar o site | T002, T004 | - | aplicação local e `onboarding.md` | 🟡 | `[ ]` |

## Fase 5, Polimento

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| [//] T004 | Ajustar o roteiro para validar o destino com número sintético sem abrir conversa com o contato real, sem enviar mensagem e sem publicar dados existentes | - | `[//]` | `_reversa_forward/002-whatsapp-emergencia/onboarding.md` | 🟢 | `[ ]` |

## Notas de execução

- A publicação pública continua bloqueada enquanto a autorização para publicar os dados médicos e de contato existentes estiver pendente.
- A validação da URL deve usar somente número sintético; não registrar o telefone real em logs, screenshots ou documentação.

## Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-11-09 | Versão inicial gerada por `/reversa-to-do` | reversa |
