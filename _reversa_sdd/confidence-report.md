# Relatório de Confiança — diabetes-companion-site

> Revisão detalhada do Reversa, concluída em 2026-11-03.
> Contagem de ocorrências explícitas de marcadores de confiança nos arquivos Markdown das quatro units; `questions.md` foi excluído da contagem.

## Resumo Geral

| Nível | Quantidade | Percentual |
|---|---:|---:|
| 🟢 CONFIRMADO | 324 | 77,1% |
| 🟡 INFERIDO | 20 | 4,8% |
| 🔴 LACUNA | 76 | 18,1% |
| **Total** | **420** | **100%** |

**Confiança geral:** **79,5%** — `(324 + 20 × 0,5) / 420`.

Os totais representam marcações explícitas nos documentos das units, não requisitos únicos; alguns achados aparecem em mais de um artefato para manter rastreabilidade entre requisitos, design, tarefas e casos extremos.

## Por Spec

| Spec | 🟢 | 🟡 | 🔴 | Confiança |
|---|---:|---:|---:|---:|
| `shell-e-navegacao/` | 62 | 4 | 12 | 82,1% |
| `cartao-de-saude-do-paciente/` | 82 | 4 | 35 | 69,4% |
| `componentes-de-interface/` | 88 | 6 | 10 | 87,5% |
| `infraestrutura-compartilhada/` | 92 | 6 | 19 | 81,2% |

## Lacunas Pendentes 🔴

### Cartão de saúde do paciente

- **Bloqueio crítico:** não há autorização para publicar dados médicos/de contato, mas o código os inclui no bundle público.
- **Risco crítico de segurança clínica:** alterações são definidas pelo paciente, sem revisão profissional independente ou validação clínica na aplicação.
- Falta validação/fallback de runtime, ocultação de seções vazias e alternativa copiável ao link `tel:`.

### Shell e navegação

- O link de retorno usa `/` em vez de respeitar o subcaminho publicado.
- O bootstrap não mostra erro quando `#root` está ausente.

### Infraestrutura compartilhada

- O workflow não executa lint/testes; o gate e a stack aprovados ainda não foram implementados.
- Os ícones PWA referenciados não existem em `public/`.
- `bun.lockb` permanece embora npm seja o único gerenciador oficial escolhido.

### Componentes de interface

- O delay de remoção de toast permanece em 1.000.000 ms, divergindo do alvo confirmado de 1.000 ms.

Os detalhes, ações e severidades estão em [`gaps.md`](./gaps.md). As perguntas humanas consolidadas foram respondidas; as lacunas acima são principalmente divergências entre requisitos confirmados e implementação.

## Recomendações

- [ ] Bloquear a publicação do bundle atual até remover os dados sem autorização ou obter autorização explícita.
- [ ] Definir salvaguardas adequadas para conteúdo clínico sem revisão profissional independente.
- [ ] Implementar os comportamentos confirmados de shell, cartão, toast e CI.
- [ ] Fornecer os assets PWA e remover o lockfile Bun em manutenção autorizada.

## Histórico de Reclassificações

| De | Para | Afirmação | Evidência |
|---|---|---|---|
| 🔴 | 🟢 | 404 do servidor em acesso direto a subrota é aceitável | Teste HTTP e confirmação de André |
| 🔴 | 🟢 | Registrar apenas `pathname` com `console.error` | Confirmação de André |
| 🔴 | 🟢 | O link de retorno deve levar à raiz da aplicação publicada | Confirmação de André; a implementação permanece como lacuna |
| 🔴 | 🟢 | CI deve exigir lint e testes antes do deployment | Confirmação de André; stack e thresholds aprovados |
| 🔴 | 🟢 | Toast novo substitui o anterior; remoção após dismiss deve ser 1.000 ms | Confirmação de André; delay atual permanece divergente |
| 🔴 | 🟢 | npm é o único gerenciador oficial e os assets PWA devem ser mantidos | Confirmação de André; Bun lockfile e assets ainda pendentes |

## Revisão

- Units revisadas: 4.
- Perguntas consolidadas: 16; respondidas e propagadas: 16.
- Código legado alterado: não.
