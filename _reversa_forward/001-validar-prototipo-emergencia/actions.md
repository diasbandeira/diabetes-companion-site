# Actions: Protótipo navegável para validação de ficha de emergência

> Identificador: `001-validar-prototipo-emergencia`
> Data: `2026-11-08`
> Roadmap: `_reversa_forward/001-validar-prototipo-emergencia/roadmap.md`

## Resumo

| Métrica | Valor |
|---------|-------|
| Total de ações | 11 |
| Paralelizáveis (`[//]`) | 2 |
| Maior cadeia de dependência | 7 |
| Concluídas | 2 |

## Fase 1, Preparação

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T001 | Confirmar decisão de visibilidade, nome e URLs próprios, e registrar que o Pages público aceitará somente conteúdo sintético | - | - | `requirements.md` | 🟢 | `[X]` |
| T002 | Clonar o repositório vazio como workspace independente, sem fork, histórico, dados ou assets do site atual; instalar o Reversa | T001 | - | workspace independente, `.reversa/` | 🟢 | `[X]` |
| [//] T003 | Definir cenários de validação e critérios de aceite para paciente/cuidador e socorrista | - | `[//]` | `onboarding.md` | 🟢 | `[ ]` |

## Fase 2, Base independente

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T004 | Criar a SPA estática e configurar o `base`, a navegação compatível com GitHub Pages e o workflow Pages somente no repositório novo | T002 | - | `<prototype-repo>/vite.config.ts`, `<prototype-repo>/.github/workflows/` | 🟡 | `[ ]` |
| T005 | Criar modelo e dados sintéticos de demonstração, com rótulos e visibilidade por bloco, sem importar conteúdo do site atual | T002 | - | `<prototype-repo>/src/data/emergencyDemoData.ts` | 🟢 | `[ ]` |

## Fase 3, Núcleo demonstrativo

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T006 | Implementar a gestão demonstrativa de perfil e consentimentos com dados sintéticos | T004, T005 | - | `<prototype-repo>/src/pages/EmergencyDemo.tsx` | 🟢 | `[ ]` |
| T007 | Implementar visualização emergencial de demonstração, incluindo QR/link apenas demonstrativo, sem expor dados reais | T004, T005, T006 | - | `<prototype-repo>/src/components/emergency-demo/EmergencyView.tsx` | 🟡 | `[ ]` |
| T008 | Implementar simulação em memória de atualização e revogação do compartilhamento com feedback visível | T006, T007 | - | `<prototype-repo>/src/components/emergency-demo/` | 🟡 | `[ ]` |

## Fase 4, Validação

| ID | Descrição | Dependências | Paralelismo | Arquivo alvo | Confidência | Status |
|----|-----------|--------------|-------------|--------------|-------------|--------|
| T009 | Integrar o roteiro de validação e registro de observações sem coletar dados pessoais | T003, T006, T007, T008 | - | `<prototype-repo>/src/pages/EmergencyDemo.tsx`, `onboarding.md` | 🟡 | `[ ]` |
| [//] T010 | Revisar textos, avisos persistentes de demonstração, labels e bloqueios contra interpretação como serviço real | T006, T007, T008 | `[//]` | `<prototype-repo>/src/` | 🟢 | `[ ]` |
| T011 | Executar build, verificar artefato e navegação no Pages novo e confirmar que URL/QR Codes antigos continuam funcionando sem alteração no deploy atual | T004, T009, T010 | - | `<prototype-repo>/`, `onboarding.md` | 🟢 | `[ ]` |

## Notas de execução

- T001 e T002 foram concluídas: o repositório público `diasbandeira/ficha-emergencia-diabetes-demo` existe e está clonado em workspace independente; a URL prevista do Pages é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`.
- O GitHub Pages ainda não foi configurado/validado. A página publicada será pública e só poderá conter código necessário ao protótipo e dados sintéticos.
- A configuração local `.reversa/reversa-config.json` bloqueia alterações em arquivos de aplicação; André deve autorizar pessoalmente os caminhos de código antes da implementação.
- O `base` do Vite, URL e workflow do site atual não podem ser alterados. O Pages e seu workflow pertencem somente ao repositório novo.
- O QR/link gerado durante a demonstração deve apontar somente para uma visualização demonstrativa e não carregar informação pessoal.
- O estado de atualização/revogação é local e não representa persistência ou revogação real.
- Se não houver runner de testes no repositório novo, validar build e navegação com comandos disponíveis e executar o roteiro manual de `onboarding.md`; não presumir a existência de infraestrutura de testes.

## Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-11-08 | Versão inicial gerada por `/reversa-to-do` | reversa |
| 2026-11-08 | Replanejado para repositório GitHub Pages limpo e independente, com bloqueio de provisionamento até decisão de visibilidade/nome/URL. | André/Reversa |
| 2026-11-08 | Confirmados repositório público, URL e clone local; T001/T002 concluídas e Reversa instalado no workspace novo. | André/Reversa |
