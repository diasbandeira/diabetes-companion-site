# Requirements: Protótipo navegável para validação de ficha de emergência

> Identificador: `001-validar-prototipo-emergencia`
> Data: `2026-11-03`
> Pasta da extração reversa: `_reversa_sdd/`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA / DÚVIDA

## 1. Resumo executivo

🟡 Esta feature entrega um protótipo navegável da jornada de cadastro e gestão de uma ficha de emergência e da visualização que um socorrista poderia consultar. Pacientes ou cuidadores e pessoas que prestam primeiros socorros usarão o protótipo com dados inteiramente fictícios. O objetivo é observar se compreendem quais informações seriam compartilhadas e como atualizá-las ou retirar o acesso, antes de qualquer decisão de construir a plataforma.

## 2. Contexto a partir do legado

| Fonte | Trecho relevante | Confidência |
|-------|------------------|-------------|
| `_reversa_sdd/brainstorms/001-plataforma-emergencia-diabetes/pre-spec.md#Escopo mínimo da primeira entrega` | A primeira fatia é um protótipo navegável de cadastro/gestão e visualização emergencial, testado com dados fictícios. | 🟢 |
| `_reversa_sdd/architecture.md#Resumo` | O legado é uma aplicação de página única (SPA) estática; não foram identificados backend, banco de dados ou APIs consumidas. | 🟢 |
| `_reversa_sdd/code-analysis.md#2. Cartão de saúde do paciente` | A tela atual apresenta dados estáticos; não há formulários, persistência ou validação de domínio. | 🟢 |
| `_reversa_sdd/domain.md#Regras de negócio observáveis` | A aplicação atual usa um objeto estático e não possui fluxo de atualização. | 🟢 |
| `_reversa_sdd/permissions.md#Controles encontrados` | Não foram identificados login, papéis ou verificações de autorização na aplicação. | 🟢 |
| `_reversa_sdd/deployment.md#Pipeline configurado` | A extração anterior registrou uma pendência de autorização para publicação. André confirmou que o site atual com os dados de Flávia está em produção e precisa ser preservado; esta feature não deve alterar esses dados nem a experiência existente. | 🟢 |
| `_reversa_sdd/inventory.md#Persistência, integrações e testes` | Não foi identificado banco de dados, API de runtime ou infraestrutura de testes no projeto analisado. | 🟢 |

## 3. Personas e cenários de uso

| Persona | Objetivo | Cenário-chave |
|---------|----------|---------------|
| Pessoa com diabetes ou cuidador | Entender e controlar quais informações fictícias seriam compartilhadas em uma emergência. | Percorre a gestão da ficha de demonstração, identifica o que ficaria visível ao público e simula uma atualização ou retirada de acesso. |
| Pessoa que presta primeiros socorros | Localizar e interpretar a informação de demonstração disponibilizada para uma emergência. | Abre a visualização emergencial sem login e informa o que entendeu e quais dúvidas teve, sem receber orientação clínica real. |
| Facilitador da validação | Observar a compreensão e registrar dúvidas ou falhas do protótipo. | Conduz as tarefas de teste e registra resultados sem coletar dados pessoais ou de saúde dos participantes. |

## 4. Regras de negócio novas ou alteradas

1. **RN-01:** A primeira entrega destina-se a validar uma hipótese de produto; não representa uma plataforma de emergência pronta para uso real. 🟢
   - Origem no legado: não aplicável; escopo confirmado no `_reversa_sdd/brainstorms/001-plataforma-emergencia-diabetes/pre-spec.md#Escopo mínimo da primeira entrega`.
   - Tipo: nova
2. **RN-02:** Todo conteúdo de paciente usado no protótipo deve ser fictício, visivelmente identificado como demonstração e incapaz de ser confundido com uma ficha real. 🟢
   - Origem no legado: `_reversa_sdd/deployment.md#Pipeline configurado` registra que não há autorização para publicar os dados médicos/de contato do bundle atual.
   - Tipo: nova
3. **RN-03:** O protótipo não deve armazenar nem publicar dados reais de saúde ou contato, nem apresentar dose, diagnóstico ou instrução clínica como orientação válida. 🟡
   - Origem no legado: `_reversa_sdd/domain.md#Limites e lacunas` registra que a origem e a aprovação clínica dos dados não estão documentadas.
   - Tipo: nova
4. **RN-04:** O site atual da Flávia, sua rota principal e sua URL-base em produção devem permanecer preservados e disponíveis; QR Codes existentes devem continuar abrindo a mesma experiência. 🟢
   - Origem: confirmação de André de que o site está em produção e já possui QR Codes distribuídos.
   - Tipo: restrição de operação
5. **RN-05:** O protótipo deve ser mantido em um repositório separado, com uma publicação GitHub Pages própria e URL distinta; o repositório e o deploy atuais da Flávia não devem ser usados nem alterados por esta feature. 🟢
   - Origem: André aceitou a recomendação de publicar o protótipo em um repositório separado para preservar o site e os QR Codes atuais.
   - Tipo: nova
6. **RN-06:** O código-fonte do repositório e o site GitHub Pages serão públicos; qualquer conteúdo publicado deve ser sintético e não pode incluir dados pessoais, dados do site da Flávia ou segredos. 🟢
   - Origem: André confirmou que o repositório `diasbandeira/ficha-emergencia-diabetes-demo` será público.
   - Tipo: nova

## 5. Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de aceite | Confidência |
|----|-----------|------------|--------------------|-------------|
| RF-01 | O protótipo deve permitir percorrer uma jornada demonstrativa de cadastro e gestão de uma ficha fictícia usando apenas conteúdo e escolhas predefinidos. | Must | Um participante consegue percorrer as etapas demonstrativas de cadastro e gestão sem inserir texto ou dados pessoais. | 🟢 |
| RF-02 | O protótipo deve deixar explícito quais informações da ficha fictícia seriam visíveis na visualização emergencial e permitir ao participante simular a decisão de compartilhá-las. | Must | O participante consegue apontar, antes da visualização emergencial, quais informações seriam compartilhadas e quais permaneceriam privadas. | 🟡 |
| RF-03 | O protótipo deve apresentar uma visualização emergencial de demonstração acessível sem login do socorrista, identificada de forma persistente como fictícia. | Must | Uma pessoa abre a visualização sem autenticação e identifica que o conteúdo é uma demonstração, não uma ficha para uso real. | 🟢 |
| RF-04 | O protótipo deve permitir simular, com conteúdo fictício predefinido, a atualização de informações e a retirada do compartilhamento, refletindo cada ação na visualização emergencial. | Must | Após cada ação demonstrativa, a visualização apresenta o conteúdo fictício atualizado ou informa que o acesso foi retirado, sem entrada de texto livre. | 🟡 |
| RF-05 | A validação deve permitir observar participantes com perfil de paciente/cuidador e de socorrista realizando tarefas da jornada. | Must | O roteiro permite executar as tarefas de gestão e de consulta emergencial e registrar dúvidas, erros de interpretação e bloqueios observados. | 🟢 |
| RF-06 | O protótipo e seus materiais de validação devem usar apenas conteúdo fictício predefinido e não oferecer entrada livre, persistência ou publicação de dados de saúde ou contato. | Must | A inspeção confirma que as telas usam dados fictícios, não aceitam texto livre para preencher a ficha e não enviam, persistem ou publicam dados. | 🟢 |
| RF-07 | O protótipo não deve apresentar conteúdo de demonstração como orientação clínica, diagnóstico ou instrução de tratamento válida. | Must | A visualização distingue dados fictícios e não fornece orientação clínica acionável como se fosse conteúdo aprovado para uso real. | 🟡 |
| RF-08 | A implementação deve preservar a página atual da Flávia, a rota principal e a URL-base pública usada pelos QR Codes existentes. | Must | A rota/URL atual continua exibindo a mesma experiência e os QR Codes existentes continuam apontando para ela, sem redirecionamento para a nova feature. | 🟢 |
| RF-09 | O protótipo deve ser publicado em um site GitHub Pages público e independente, associado a um repositório público separado do site atual. | Must | A URL prevista é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`; a publicação não altera configurações, branch, workflow, conteúdo ou disponibilidade do site atual da Flávia. | 🟢 |
| RF-10 | O repositório e o site público do protótipo devem conter somente a implementação de demonstração e dados sintéticos, sem histórico ou conteúdo real do site da Flávia. | Must | Uma inspeção do repositório e do artefato publicado não encontra dados reais, assets privados, histórico copiado, segredos ou referências que revelem dados do site atual. | 🟢 |

## 6. Requisitos Não Funcionais

| Tipo | Requisito | Evidência ou justificativa | Confidência |
|------|-----------|----------------------------|-------------|
| Privacidade | Usar somente dados sintéticos e não coletar dados identificáveis de participantes durante a validação. | O pre-spec proíbe dados reais nesta fatia; o legado não tem autorização para publicar os dados de saúde e contato atuais (`_reversa_sdd/deployment.md#Pipeline configurado`). | 🟢 |
| Segurança | A visualização emergencial de demonstração deve deixar claro que não é um canal de socorro real, e a simulação de compartilhamento não deve criar um endereço público funcional. | A decisão de produto mantém em aberto consentimento, revogação e capacidade operacional; esta fatia testa compreensão sem publicar dados. (`_reversa_sdd/brainstorms/001-plataforma-emergencia-diabetes/decision.md#Riscos aceitos conscientemente`) | 🟢 |
| Usabilidade | A separação entre área de gestão demonstrativa e visualização emergencial deve ser compreensível para os dois perfis participantes. | Critério de pronto confirmado no `_reversa_sdd/brainstorms/001-plataforma-emergencia-diabetes/pre-spec.md#Critério de pronto`. | 🟢 |
| Observabilidade | A validação deve registrar conclusão das tarefas, dúvidas, interpretações incorretas e falhas observadas, sem identificar participantes. | O critério de pronto exige que dúvidas e falhas sejam registradas; o tamanho da amostra e os limiares de sucesso continuam em aberto. | 🟢 |
| Segurança clínica | A demonstração deve evitar que dados ou textos fictícios sejam interpretados como conteúdo clínico validado. | A extração registra ausência de origem e aprovação clínica documentadas (`_reversa_sdd/domain.md#Limites e lacunas`). | 🟡 |
| Isolamento de publicação | Hospedar o protótipo em repositório e site Pages distintos, sem alterar a publicação atual. | GitHub Pages oferece no máximo um site por repositório; repositório separado isola a fonte e o workflow do site atual. | 🟢 |
| Visibilidade e privacidade | Tratar o código e o site como públicos; publicar somente dados sintéticos, sem informação pessoal ou segredos. | Repositório e GitHub Pages foram escolhidos como públicos por André. | 🟢 |
| Disponibilidade | Mudanças ou falhas do deploy do protótipo não devem substituir nem desabilitar o site atual. | Sites Pages em repositórios separados isolam os deployments; indisponibilidade do protótipo não deve interromper o serviço existente. | 🟢 |

## 7. Critérios de Aceitação

```gherkin
Cenário: RF-01/RF-02 — Paciente ou cuidador identifica o compartilhamento proposto
  Dado que o participante percorre a gestão demonstrativa de uma ficha fictícia
  Quando decide quais informações simular como compartilhadas
  Então consegue identificar quais informações seriam exibidas ao socorrista
  E consegue distinguir as informações que permaneceriam privadas

Cenário: RF-03/RF-07 — Socorrista consulta a demonstração
  Dado que existe uma ficha fictícia marcada como demonstração
  Quando a pessoa que presta primeiros socorros abre a visualização emergencial
  Então ela consegue consultar a demonstração sem login
  E identifica que não é uma ficha real nem orientação clínica

Cenário: RF-04 — Atualização e retirada do compartilhamento
  Dado que o participante está vendo uma ficha fictícia compartilhada na demonstração
  Quando escolhe uma atualização fictícia predefinida ou simula a retirada do compartilhamento
  Então a visualização mostra os dados fictícios atualizados ou informa que o acesso foi retirado
  E nenhuma etapa solicita texto livre ou dados pessoais

Cenário: RF-06 — Bloqueio de conteúdo real
  Dado que o protótipo e os materiais estão preparados para validação
  Quando são inspecionados antes da sessão
  Então contêm somente dados fictícios
  E não oferecem envio, persistência ou publicação de dados reais de saúde ou contato

Cenário: RF-05 — Registro da sessão de validação
  Dado que um participante realiza tarefas do protótipo
  Quando conclui ou encontra bloqueio em uma tarefa
  Então o facilitador registra o resultado, as dúvidas e os erros de interpretação sem identificar o participante

Cenário: RF-08/RF-09 — Preservar a página de produção e publicar o protótipo separadamente
  Dado que o site atual da Flávia e seus QR Codes estão em produção
  Quando o protótipo demonstrativo é publicado
  Então ele usa um repositório e um site Pages distintos, com URL própria
  E o site atual e seus QR Codes permanecem inalterados e disponíveis

Cenário: RF-10 — Isolar o conteúdo publicado
  Dado que o repositório novo será disponibilizado pela web
  Quando o repositório e seu artefato de publicação são inspecionados
  Então contêm somente a implementação do protótipo e dados sintéticos
  E não contêm o histórico nem dados do site atual da Flávia

Cenário: RN-06/RF-09 — Publicação pública isolada
  Dado que o repositório e o GitHub Pages do protótipo são públicos
  Quando uma pessoa acessa o código ou o site
  Então encontra somente conteúdo sintético e código próprio do protótipo
  E não consegue acessar dados pessoais, segredos ou conteúdo do site atual da Flávia
```

## 8. Prioridade MoSCoW (Must, Should, Could, Won't)

| Item | MoSCoW | Justificativa |
|------|--------|---------------|
| RF-01 | Must | A jornada de gestão é parte central da hipótese de autoatendimento a validar. |
| RF-02 | Must | Compreender a fronteira público/privado é a premissa prioritária de segurança e consentimento. |
| RF-03 | Must | O perfil de socorrista precisa testar a compreensão da visualização emergencial sem login. |
| RF-04 | Must | Atualização e retirada de acesso são tarefas essenciais da hipótese de controle pelo paciente/cuidador. |
| RF-05 | Must | Sem observar os dois perfis e registrar resultados, não há evidência da validação. |
| RF-06 | Must | A proibição de dados reais é uma condição de segurança desta primeira fatia. |
| RF-07 | Must | O legado não documenta aprovação clínica; conteúdo de demonstração não pode parecer orientação real. |
| RF-08 | Must | A implementação não pode indisponibilizar o site atual nem mexer na URL pública porque há QR Codes já emitidos. |
| RF-09 | Must | O protótipo tem repositório, Pages e URL próprios; o deploy atual não é alterado. |
| RF-10 | Must | O novo repositório e o artefato publicado não contêm dados ou histórico do site da Flávia. |
| Privacidade e segurança | Must | Não coletar nem publicar dados reais durante uma validação de conceito. |
| Observabilidade | Must | Dúvidas e falhas observadas precisam ser registradas para informar a decisão seguinte. |

## 9. Esclarecimentos

### Sessão 2026-11-08
- **Q:** Quais categorias de informação devem aparecer na visualização emergencial e quem pode autorizar o compartilhamento de cada uma?
  **R:** A visualização pública do protótipo deve incluir a ficha completa atual, com consentimento explícito e controle de visibilidade, mantendo o conteúdo demonstrativo e fictício. Em outras palavras, o teste deve cobrir a amplitude da ficha de emergência vigente, sem expor dados reais nem permitir interpretação como orientação clínica válida.
- **Q:** Quantos participantes e quais perfis comporão a validação, e que resultado observável será suficiente para considerar a hipótese validada?
  **R:** A primeira rodada deve reunir uma amostra pequena cruzada: 3 a 5 pacientes/cuidador e 3 a 5 socorristas. A hipótese será considerada validada quando os participantes entenderem claramente o que fica público e o que fica privado, sem precisar de explicação adicional para interpretar corretamente a fronteira entre gestão privada e emergência pública.
- **Q:** O site em produção atual pode ficar indisponível ou ter a URL pública alterada para acomodar o protótipo?
  **R:** Não. O site em produção precisa permanecer disponível e a URL atual não pode mudar porque vários QR Codes já apontam para esse endereço. A nova experiência deve ter um site e URL próprios para novos usuários, sem substituir a página atual da Flávia.
- **Q:** Como novos usuários devem acessar as novas funcionalidades sem afetar o site atual?
  **R:** André aceitou a recomendação de manter o site atual no repositório/Pages existentes e publicar o protótipo em um repositório separado com GitHub Pages e URL próprios. A nova URL será usada por novos usuários.
- **Q:** O repositório separado do protótipo deve ser público ou privado, e qual nome/URL deve usar?
  **R:** O repositório será público, com o nome `ficha-emergencia-diabetes-demo`, em `https://github.com/diasbandeira/ficha-emergencia-diabetes-demo`. A URL prevista do GitHub Pages é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`. O repositório já existe, está vazio e foi clonado em um workspace local independente. O protótipo, o código e a página publicados serão públicos; por isso, devem conter somente dados sintéticos e código sem segredos ou dados do site da Flávia.
- **Q:** Se a hipótese avançar após o protótipo, quem será responsável por atualização, correção, suporte e retirada de acesso, e quais metas de disponibilidade e acesso em rede instável serão exigidas antes de uso real?
  **R:** Essas definições ficam fora do escopo atual e deverão ser concluídas antes de qualquer piloto com dados reais.

## 10. Lacunas

- As definições de responsáveis, suporte, disponibilidade e acesso em rede instável ficam fora do escopo desta feature e são pré-requisito para qualquer piloto com dados reais.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|-------|-----------|-------|
| 2026-11-03 | Versão inicial gerada por `/reversa-requirements`, baseada no pre-spec da ideação. | reversa |
| 2026-11-08 | Registrado que as definições operacionais para uso real ficam fora do escopo do protótipo e são pré-requisito para qualquer piloto com dados reais. | André |
| 2026-11-08 | Confirmado que o site atual da Flávia, sua URL e QR Codes devem ser preservados; a nova jornada terá rota separada para novos usuários. | André |
| 2026-11-08 | Estratégia alterada para repositório e site GitHub Pages separados; nome, visibilidade e URL permanecem pendentes. | André |
| 2026-11-08 | Confirmados repositório público `diasbandeira/ficha-emergencia-diabetes-demo`, URL própria prevista do Pages e clone local; somente conteúdo sintético poderá ser publicado. | André |
