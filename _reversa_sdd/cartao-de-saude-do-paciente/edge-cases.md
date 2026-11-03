# Cartão de saúde do paciente — Casos extremos

| ID | Cenário | Comportamento observado / risco | Validação necessária | Confiança |
|---|---|---|---|---|
| EC-01 | Um campo obrigatório está ausente ou tem tipo incompatível em runtime. | Os dados são esperados como válidos e completos, mas o código não tem validação de runtime ou fallback; André confirmou erro visível e bloqueio de conteúdo enganoso em falhas inesperadas. | Implementar validação e fallback visível, sem apresentar dados potencialmente incorretos. | 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/data/patientData.ts` |
| EC-02 | Uma ou mais coleções estão vazias. | Os componentes continuam exibindo suas seções e os `map` não produzem itens; André confirmou que a seção vazia deve ser ocultada. | Ocultar a seção correspondente ao receber coleção vazia. | 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/components/patient/ConditionList.tsx`, `src/components/patient/HypoglycemiaGuide.tsx`, `src/components/patient/MedicationList.tsx` |
| EC-03 | `formattedPhone` está vazio, malformado ou `tel:` não pode ser usado. | O componente atual compõe um `href` `tel:` sem validação e não mostra número alternativo. André definiu 11 dígitos e texto selecionável/copiável como fallback. | Validar o formato e fornecer o texto selecionável/copiável como alternativa. | 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/components/patient/EmergencyContact.tsx` |
| EC-04 | A lista de condições contém valores duplicados. | `ConditionList` usa o texto da condição como `key`; duplicatas podem produzir chaves React não únicas. | Confirmar se duplicatas devem ser rejeitadas, deduplicadas ou identificadas por chave própria. | 🟡 **INFERIDO** — `src/components/patient/ConditionList.tsx` |
| EC-05 | Os dados estáticos estão desatualizados ou clinicamente inconsistentes. | O paciente comunica mudanças e o desenvolvedor atualiza/remove os dados; não há revisão independente por profissional de saúde nem detecção automática de inconsistências. | Manter o fluxo de atualização informado e registrar explicitamente o risco de conteúdo sem revisão clínica independente; bloquear publicação sem autorização. | 🔴 **LACUNA DE CONTROLE** — `src/data/patientData.ts` |
| EC-06 | Dados médicos são publicados no bundle do frontend. | O objeto é importado pela página e distribuído ao cliente; André informou que não há autorização para publicação pública. | Bloquear a publicação dos dados até obter autorização ou removê-los do bundle público. | 🔴 **BLOQUEIO CRÍTICO** — confirmação do usuário e `src/data/patientData.ts`, `src/pages/Index.tsx` |

## Resumo

- Não há validação de runtime, ocultação de listas vazias ou fallback telefônico explícitos. 🟢 **CONFIRMADO** pela implementação analisada.
- Atualização é conduzida conforme orientação do paciente; a aplicação não valida consistência clínica nem há revisão independente. 🔴 **LACUNA DE CONTROLE**.
- Nenhum valor pessoal ou clínico específico é reproduzido neste documento. 🟢
