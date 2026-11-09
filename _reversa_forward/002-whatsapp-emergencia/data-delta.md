# Data Delta: Contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-08`
> Modelo de referência: `_reversa_sdd/data-dictionary.md`

## Resumo

Nenhuma alteração no modelo de dados. A feature reutiliza `PatientData.emergencyContact.formattedPhone`, já consumido pela ação telefônica.

## Comparação conceitual

| Campo | Estado atual | Delta | Persistência |
|-------|--------------|-------|--------------|
| `emergencyContact.formattedPhone` | Telefone internacional formatado, usado como destino de `tel:`. | Reutilizado como origem para o link do WhatsApp, removendo caracteres que não sejam dígitos apenas durante a composição do link. | Nenhuma |
| Outros campos de `emergencyContact` | `name` e `phone` permanecem no contrato atual. | Sem alteração. | Nenhuma |

## Migração

- Novos campos: nenhum.
- Campos removidos: nenhum.
- Tipo ou nulabilidade alterados: nenhum.
- Migração de banco, índice ou armazenamento: não aplicável; o projeto não possui banco de dados identificado.

## Privacidade

Não adicionar mensagem pré-preenchida nem copiar dados clínicos ao destino. O link contém o número do contato, que já é usado no link `tel:`. Não incluir valor literal do telefone em documentação, logs ou evidências.
