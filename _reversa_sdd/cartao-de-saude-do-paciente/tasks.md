# Cartão de saúde do paciente — Tarefas de Implementação

## Pré-requisitos

- [ ] Disponibilizar as dependências de React e dos componentes listados em `design.md`. 🟢
- [ ] **BLOQUEIO CRÍTICO — Não publicar dados médicos/de contato no bundle público sem autorização.** André informou que não há autorização atualmente. 🔴
- [ ] Registrar o fluxo informado: paciente comunica alterações ou ausência de autorização; desenvolvedor atualiza ou remove os dados. Não há revisão clínica independente. 🟢 **DECISÃO CONFIRMADA**; documentar controles/limites dessa responsabilidade. 🔴
- [ ] Banco de dados, API e variáveis de ambiente não são necessários no fluxo legado observado. 🟢

## Tarefas

- [ ] T-01 — Definir o contrato `PatientData` e a fonte de dados do cartão, sem incluir valores pessoais ou clínicos nas specs.
  - Origem no legado: `src/data/patientData.ts:1-29`
  - Critério de pronto: todos os campos consumidos pela tela têm tipos documentados; o paciente comunica mudanças e o desenvolvedor atualiza/remove os dados quando avisado; a publicação pública exige autorização.
  - Confiança: 🟢 para o contrato e fluxo confirmado; 🔴 para autorização de publicação.
- [ ] T-02 — Compor a tela e encaminhar os dados para as seções de identificação, condições, orientação, tratamentos e contato.
  - Origem no legado: `src/pages/Index.tsx:8-31`
  - Critério de pronto: a página renderiza todas as seções com os dados recebidos.
  - Confiança: 🟢
- [ ] T-03 — Renderizar identificação, condições, orientação de hipoglicemia e suas listas separadas.
  - Origem no legado: `src/components/patient/PatientHeader.tsx:4-25`, `src/components/patient/ConditionList.tsx:3-16`, `src/components/patient/HypoglycemiaGuide.tsx:11-49`
  - Critério de pronto: os campos são apresentados nas seções corretas, sem cálculos ou substituição de conteúdo.
  - Confiança: 🟢
- [ ] T-04 — Renderizar medicamentos, instruções de insulina e faixas/doses da tabela de correção.
  - Origem no legado: `src/components/patient/MedicationList.tsx:11-60`
  - Critério de pronto: cada entrada das coleções é exibida em sua seção sem transformação clínica.
  - Confiança: 🟢
- [ ] T-05 — Apresentar o contato e gerar a ação de ligação com `formattedPhone`.
  - Origem no legado: `src/components/patient/EmergencyContact.tsx:12-28`
  - Critério de pronto: validar o formato de 11 dígitos, usar o link `tel:` e fornecer `formattedPhone` como texto selecionável/copiável quando o protocolo não puder ser usado. O campo `phone` permanece auxiliar.
  - Confiança: 🟢 para a decisão; 🔴 — fallback e validação não implementados.
- [ ] T-06 — Revisar privacidade, autorização e segurança da publicação dos dados clínicos no bundle do frontend.
  - Origem no legado: `src/data/patientData.ts:30-78`
  - Critério de pronto: dados médicos e de contato não são incluídos em publicação pública até existir autorização explícita; ao ser avisado da ausência/revogação, o desenvolvedor remove os dados e documenta a alteração.
  - Confiança: 🔴 **BLOQUEIO CRÍTICO** — o usuário informou que não há autorização, mas o legado inclui os dados no bundle.

## Tarefas de Teste

- [ ] TT-01 — Testar o cartão completo com fixture sintética, sem reproduzir dados pessoais ou clínicos reais.
  - Origem no legado: `src/pages/Index.tsx:8-31`
  - Critério de pronto: as seções principais renderizam com dados válidos.
  - Confiança: 🟢 para o fluxo; não há testes automatizados legados identificados.
- [ ] TT-02 — Testar coleções vazias e itens múltiplos nas listas.
  - Origem no legado: `src/components/patient/ConditionList.tsx:10-14`, `src/components/patient/HypoglycemiaGuide.tsx:32-45`, `src/components/patient/MedicationList.tsx:20-58`
  - Critério de pronto: coleções vazias ocultam a seção; coleções preenchidas exibem todos os elementos.
  - Confiança: 🟢 para a decisão; 🔴 — o legado não oculta as seções vazias.
- [ ] TT-03 — Testar o valor do `href` telefônico sem expor o número real nos snapshots ou logs de teste.
  - Origem no legado: `src/components/patient/EmergencyContact.tsx:26`
  - Critério de pronto: o link aplica o prefixo `tel:` ao valor de fixture autorizado.
  - Confiança: 🟢 para a construção observada.
- [ ] TT-04 — Testar dados inválidos, telefone e bloqueio de publicação não autorizada.
  - Origem no legado: `src/data/patientData.ts:1-29`, `src/components/patient/EmergencyContact.tsx:26`
  - Critério de pronto: dados incompletos/inválidos produzem erro visível sem conteúdo enganoso; telefone segue o formato acordado; publicação pública permanece bloqueada sem autorização.
  - Confiança: 🟢 para os comportamentos definidos; 🔴 — validação e bloqueio não implementados.

## Tarefas de Migração de Dados

Não há migração para banco ou serviço remoto no fluxo legado. 🟢 **CONFIRMADO** — `src/data/patientData.ts`. Se a fonte mudar, o processo de transferência e autorização dos dados precisa ser definido pelo responsável. 🔴 **LACUNA**.

## Ordem Sugerida

1. Resolver origem, autorização, revisão clínica e política de publicação dos dados.
2. Implementar o contrato e a composição da tela.
3. Implementar as seções e a ação telefônica.
4. Executar os testes com fixtures sintéticas e validar a publicação.

## Lacunas Pendentes (🔴)

- Identificar o responsável e a origem oficial dos dados médicos e de contato.
- Definir o processo de revisão clínica e de atualização.
- Implementar erro visível para dados inválidos, ocultar seções vazias e oferecer fallback copiável para o telefone.
- **Bloqueio crítico:** não há autorização para publicar os dados; a aplicação atual os inclui no bundle público.
- Definir como mitigar a ausência de revisão clínica independente; o paciente determina mudanças e o desenvolvedor as implementa.
- Confirmar comportamento da ação telefônica em navegadores/dispositivos sem suporte a `tel:`.
