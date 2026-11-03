# Cartão de saúde do paciente — Questões pendentes

Respostas do usuário processadas pelo Revisor. O bloqueio crítico de publicação e as lacunas de implementação continuam documentados abaixo; nenhum dado pessoal ou clínico específico é incluído.

| ID | Pergunta | Por que precisa de resposta | Responsável sugerido | Estado |
|---|---|---|---|---|
| Q-01 | Quem é o responsável pela origem e pela atualização dos dados exibidos no cartão? | O paciente informa mudanças; o desenvolvedor atualiza ou remove os dados quando avisado. O prazo não foi especificado. | Responsável pelo produto/dados | ✅ **RESPONDIDA** |
| Q-02 | Qual processo de revisão clínica aprova orientações, sintomas e instruções antes da publicação? | O usuário definiu que somente o paciente determina as alterações; não há revisão independente por profissional de saúde. | Responsável clínico | ✅ **RESPONDIDA** — decisão informada; risco clínico permanece |
| Q-03 | Há autorização para incluir os dados médicos e de contato no bundle público do frontend? | O usuário informou que não há autorização; os dados estáticos são importados pela página e entregues ao cliente sem controle de acesso. | Responsável pelo produto/privacidade | ✅ **RESPONDIDA** — não há autorização; 🔴 **BLOQUEIO CRÍTICO** |
| Q-04 | Qual deve ser o comportamento quando faltar um campo obrigatório, houver conteúdo inválido ou uma lista estiver vazia? | Dados válidos/completos são esperados; falha inesperada deve produzir erro visível e seção vazia deve ser ocultada. | Responsável pelo produto | ✅ **RESPONDIDA** — comportamento esperado definido; não implementado |
| Q-05 | Qual formato de telefone deve ser aceito e qual alternativa oferecer quando `tel:` não puder ser usado? | Formato de 11 dígitos; apresentar `formattedPhone` selecionável/copiável quando `tel:` não puder ser usado. | Responsável pelo produto | ✅ **RESPONDIDA** |
| Q-06 | Como deve ser conduzida a atualização ou remoção dos dados quando houver mudança de responsável, autorização ou conteúdo? | O paciente informa mudanças e o desenvolvedor atualiza ou remove os dados quando avisado; o prazo não foi especificado. | Responsável pelo produto/privacidade | ✅ **RESPONDIDA** |
| Q-07 | O campo `phone`, atualmente não renderizado, deve permanecer apenas como dado auxiliar ou também aparecer no cartão? | O usuário confirmou que `phone` é apenas auxiliar; o modelo declara o campo, mas o componente não o apresenta. | Responsável pelo produto | ✅ **RESPONDIDA** — manter auxiliar |

## Evidências

- Fonte estática e contrato: `src/data/patientData.ts`.
- Composição da tela e encaminhamento dos dados: `src/pages/Index.tsx`.
- Link de contato telefônico: `src/components/patient/EmergencyContact.tsx`.
