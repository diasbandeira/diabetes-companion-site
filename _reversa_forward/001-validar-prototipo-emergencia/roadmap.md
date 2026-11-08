# Roadmap: Protótipo navegável para validação de ficha de emergência

> Identificador: `001-validar-prototipo-emergencia`
> Data: `2026-11-08`
> Requirements: `_reversa_forward/001-validar-prototipo-emergencia/requirements.md`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA

## 1. Resumo da abordagem

A feature será implementada e publicada como um protótipo estático independente em um repositório novo, com sua própria configuração GitHub Pages e URL. O repositório atual, o workflow de deploy, a página da Flávia, a URL existente e os QR Codes não serão alterados. O repositório novo deve conter apenas código do protótipo e dados sintéticos, sem copiar o histórico ou os dados do sistema atual.

A decisão foi confirmada: o repositório é público (`diasbandeira/ficha-emergencia-diabetes-demo`) e a URL prevista do Pages é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`. A página também será pública. O `base` do Vite e a navegação serão configurados para esse endereço, sem alterar `vite.config.ts` do projeto antigo. O GitHub Pages ainda precisa ser habilitado e validado no repositório novo antes da publicação.

**Estado de preparação:** o repositório vazio foi clonado em um workspace independente; a documentação da feature foi copiada e o Reversa v1.3.6 foi instalado com suporte a GitHub Copilot, Kiro e Opencode. Nenhum código do protótipo foi implementado ou publicado.

**Gate de implementação:** a configuração local `.reversa/reversa-config.json` está em modo seguro (`allowLegacyEdits: false`, `allowedPaths: []`). Antes de editar arquivos de aplicação fora das pastas próprias do Reversa, André deve ajustar pessoalmente essa configuração para os caminhos necessários. Não copiar o histórico do repositório antigo nem alterar os arquivos do site da Flávia.

## 2. Princípios aplicados

Como não existe `.reversa/principles.md` no repositório atual, a feature não encontra conflito explícito com princípios escritos localmente; o esforço segue o princípio implícito de segurança e de não publicar dados reais documentado em `_reversa_sdd/deployment.md` e `_reversa_sdd/permissions.md`.

| Princípio | Como a feature se relaciona | Status |
|-----------|------------------------------|--------|
| Não publicar dados sensíveis em ambiente público | A feature usa somente dados sintéticos e rótulos visuais de demonstração | respeita |
| Manter o legado estável | O protótipo terá repositório, Pages e workflow próprios, sem alterações no legado | respeita |
| Validar antes de escalar | A primeira entrega busca entender a percepção do usuário, não construir produção | respeita |

## 3. Decisões técnicas

| ID | Decisão | Justificativa | Alternativas descartadas | Confidência |
|----|---------|----------------|--------------------------|-------------|
| D-01 | Implementar o protótipo como SPA estática independente, sem backend e sem banco | O legado mapeado indica que a hipótese pode ser validada com conteúdo sintético e sem persistência | backend próprio, banco, API REST, inclusão do protótipo no site atual | 🟢 |
| D-02 | Separar gestão privada e visualização pública em duas telas/fluxos distintos dentro do mesmo protótipo | A hipótese central é testar se a fronteira público/privado é compreendida; separar os contextos reduz o risco de confusão | uma única tela mista, publicar a tela pública em produção real | 🟢 |
| D-03 | Usar dados fictícios predefinidos e rótulos de demonstração permanentes | A extração reversa documenta que os dados atuais não têm autorização para publicação; a primeira validação deve ser segura por design | uso de dados reais, entrada livre, importação de dados do usuário | 🟢 |
| D-04 | Manter a atualização e a revogação como ações simuladas de UI, não ações de sistema real | O objetivo é testar a compreensão do fluxo, não a operação de produção | autenticação real, API de edição, persistência persistente | 🟡 |
| D-05 | Publicar a SPA de demonstração em um repositório/site GitHub Pages separado | André aceitou manter o site atual e usar uma publicação independente com URL própria | publicar uma branch nova no mesmo repositório Pages, substituir o deploy atual, usar a URL atual | 🟢 |
| D-06 | Não copiar o histórico ou os dados do site atual; usar somente código necessário e conteúdo sintético | O site atual contém dados da Flávia e deve continuar isolado; a demonstração não requer dados ou histórico existentes | fork, clone com histórico, reutilizar `patientData` ou assets da Flávia | 🟢 |
| D-07 | Definir o `base` e a navegação do build conforme o novo repositório Pages | O Vite atual aponta para `/diabetes-companion-site/`; o endereço do novo Pages depende do novo repositório/domínio | alterar o `base` do site atual, presumir que o novo projeto será servido em `/` | 🟢 |
| D-08 | Manter o repositório público e publicar o Pages em URL própria | André confirmou a URL do repositório e aceitou visibilidade pública; GitHub Pages oferece publicação de projetos em repositório público | tornar privado e pressupor Pages público/sem custo, usar a URL do site atual | 🟢 |

## 4. Premissas

| Premissa | Origem (`requirements.md` seção) | Risco se errada |
|----------|----------------------------------|-----------------|
| A operação de manutenção, atualização e revogação em produção será assumida por um responsável humano ou processo definido depois | `## 9. Esclarecimentos` / hipótese de validação | Se a responsabilidade não existir, a solução pode parecer funcional num protótipo e falhar em operação real |
| O repositório público e o Pages podem ser usados para publicar somente a implementação do protótipo e dados sintéticos | `requirements.md` RN-05, RF-09 e RF-10 | O artefato público pode revelar dados/histórico indevido ou configurações sensíveis |

## 5. Delta arquitetural

| Componente | Arquivo de origem no legado | Tipo de mudança | Resumo |
|------------|------------------------------|-----------------|--------|
| Nova SPA de demonstração | `_reversa_sdd/architecture.md#Shell e navegação` | componente-novo | Criar shell, páginas e navegação no repositório novo; nenhum arquivo de runtime do site atual é alterado. |
| Dados sintéticos | `_reversa_sdd/architecture.md#Dados do paciente` | componente-novo | Criar um modelo e dados exclusivamente sintéticos, sem importar/copiar `patientData` do site atual. |
| Hospedagem independente | `_reversa_sdd/architecture.md#Hospedagem` | componente-novo | Configurar GitHub Pages e workflow no repositório novo, com URL separada e `base` do Vite próprio. |

## 6. Delta no modelo de dados

- Resumo das mudanças: o legado usa um `patientData` estático em TypeScript; a feature acrescenta um estado de demonstração com campos de visibilidade, origem sintética e sinalização de conteúdo fictício. Não há banco nem migração de dados.
- Detalhe completo em: `_reversa_forward/001-validar-prototipo-emergencia/data-delta.md`

## 7. Delta de contratos externos

| Contrato | Tipo | Arquivo de detalhe |
|----------|------|--------------------|
| nenhum | n/a | n/a |

## 8. Plano de migração

1. Usar o repositório público já criado e clonado, sem fork ou histórico do site atual.
2. Implementar a SPA demonstrativa com modelo/dados sintéticos e configuração `base` adequada à URL `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`.
3. Implementar gestão, atualização/revogação simuladas e visualização emergencial com aviso persistente de demonstração.
4. Habilitar e configurar Actions/Pages somente no repositório novo; nenhum workflow do projeto antigo publica o protótipo.
5. Inspecionar o código e o artefato público para confirmar ausência de dados reais, histórico legado e segredos.
6. Testar build e navegação direta/reload no ambiente Pages novo.
7. Confirmar que a URL antiga e os QR Codes continuam funcionando, sem qualquer alteração no deployment antigo.
8. Validar a jornada com pacientes/cuidadores e socorristas, registrando dúvidas e erros sem coletar dados pessoais.

## 9. Riscos e mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|-------|---------|---------------|-----------|
| Confusão entre área privada e pública | alto | médio | usar rótulos visuais permanentes, separar roteamento, reforçar a fronteira em cada tela |
| Interpretação do protótipo como serviço real | alto | médio | exibir avisos claros de demonstração e evitar qualquer ligação funcional real |
| Exposição acidental de dados reais | crítico | baixo | manter somente conteúdo sintético e bloquear qualquer publicação fora do ambiente de validação |
| Impacto acidental no site atual durante publicação do protótipo | crítico | baixo | usar repositório, Pages e workflow independentes; não alterar o repositório ou workflow atual; verificar que URL/QR antigos continuam funcionando |
| Repositório público revela histórico ou dados do site da Flávia | crítico | médio | criar repositório limpo (não fork); incluir apenas implementação nova e dados sintéticos; inspecionar fontes, histórico e artefato antes de habilitar Pages |
| Conta/plano não permite Pages com a visibilidade desejada | médio | médio | confirmar previamente a elegibilidade do plano; se não for possível publicar publicamente, parar e escolher hospedagem/conta autorizada |
| Acesso direto ou refresh de uma tela retorna 404 no GitHub Pages novo | alto | médio | validar navegação direta e reload na URL do Pages novo; definir hash routing ou fallback compatível com hospedagem estática |
| Dúvida operacional de manutenção | médio | médio | documentar a hipótese de responsabilidade e registrar a premissa para reavaliação em /reversa-clarify |

## 10. Critério de pronto

- [ ] A jornada de gestão e a visualização pública funcionam com dados sintéticos e sem entrada livre.
- [ ] A área pública deixa claro que é uma demonstração e não um canal real de socorro.
- [ ] A pessoa participante consegue distinguir entre informações privadas e públicas.
- [ ] A atualização e a retirada de compartilhamento podem ser simuladas sem quebrar a experiência.
- [ ] O roteir de validação foi preparado com perfis de paciente/cuidador e socorrista.
- [ ] Os resultados de validação são registrados sem dados pessoais ou de saúde.
- [ ] O protótipo está em repositório e site Pages independentes, com URL própria.
- [ ] O repositório e o artefato contêm somente código da demonstração e dados sintéticos, sem histórico/dados do site da Flávia.
- [ ] Nenhum arquivo, workflow, branch ou configuração de publicação do site atual foi alterado.
- [ ] O build e o acesso direto/reload funcionam no Pages novo; a URL e QR Codes existentes continuam funcionando no site antigo.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-11-08 | Versão inicial gerada por `/reversa-plan` após a escolha de premissa explícita para a última dúvida | reversa |
| 2026-11-08 | Registradas as restrições de preservação do site, dos dados e dos QR Codes existentes. | André/Reversa |
| 2026-11-08 | Estratégia atualizada para repositório GitHub Pages separado, sem alterações no site ou workflow atuais. | André/Reversa |
| 2026-11-08 | Registrados repositório público, URLs e clone local; removido o bloqueio de decisão de visibilidade e mantido o gate de habilitação do Pages. | André/Reversa |
