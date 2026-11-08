# Investigation: validação de conceito de ficha de emergência

## Contexto de pesquisa

A pesquisa técnica identificou que o projeto legado é uma SPA estática React/Vite, sem backend, banco, autenticação ou autorização. O site com dados da Flávia está publicado em produção e possui QR Codes distribuídos; sua URL e disponibilidade devem ser preservadas.

O workflow do repositório atual publica o build estático no GitHub Pages após push para `main` (`_reversa_sdd/deployment.md#Pipeline configurado`). Uma branch adicional no mesmo repositório não constitui uma publicação independente com URL própria; trocar a fonte do Pages poderia substituir o site atual. Portanto, o protótipo não será incorporado ao site nem ao workflow existente.

## Estratégia aceita

André confirmou o repositório público `https://github.com/diasbandeira/ficha-emergencia-diabetes-demo`, já criado vazio e clonado localmente em um workspace independente. A URL prevista do GitHub Pages é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`; a página também será pública. A demonstração conterá somente código necessário ao protótipo e dados sintéticos, sem fork, histórico, dados ou assets do site atual. O site legado, seu workflow, sua URL e seus QR Codes permanecem inalterados.

O repositório está público e pronto como workspace local; o Pages ainda precisa ser habilitado e a URL de produção validada. O `base` do Vite e o workflow serão configurados no repositório novo conforme sua URL, sem editar os arquivos de publicação do projeto legado.

## Alternativas avaliadas

### Alternativa 1 — Repositório GitHub Pages independente

- Vantagens: isola código, histórico, workflow, artefato e URL; falhas de deploy do protótipo não acionam o site atual.
- Desvantagens: a página publicada é pública; requer configurar build e Pages próprios e manter o conteúdo estritamente sintético.
- Decisão: escolhida por André.

### Alternativa 2 — Nova branch no repositório atual

- Vantagens: mantém um único repositório.
- Desvantagens: Pages disponibiliza um site por repositório; alterar fonte/branch pode substituir a publicação existente, não garantindo isolamento de URL e deploy.
- Decisão: descartada para preservar o site e os QR Codes atuais.

### Alternativa 3 — Adicionar rota ao site atual

- Vantagens: reutiliza a estrutura já existente.
- Desvantagens: o workflow atual publica o build completo; uma mudança pode afetar o site de produção e não fornece o isolamento solicitado.
- Decisão: descartada.

### Alternativa 4 — S3 Static Website

- Vantagens: hospedagem estática e simples para conteúdo demonstrativo.
- Desvantagens: o endpoint de site S3 não fornece HTTPS por si só; o uso gratuito é condicionado aos termos/limites aplicáveis e pode gerar cobrança. Seria necessário validar HTTPS e custos antes de adoção.
- Decisão: não escolhida; GitHub Pages público independente foi escolhido.

### Alternativa 5 — Backend e persistência imediata

- Vantagens: aproxima a experiência de um produto operacional.
- Desvantagens: adiciona complexidade, riscos de privacidade, segurança e manutenção antes da validação da hipótese.
- Decisão: descartada para esta primeira fatia.

## Questões técnicas pendentes

- Definir o comportamento do GitHub Pages para navegação direta/reload da SPA (por exemplo, hash routing ou fallback compatível).
- Determinar os comandos de build e validação no projeto novo; não presumir que o runner de testes do legado será copiado.
- Habilitar Pages e confirmar que a URL pública esperada está servindo o build correto antes de divulgar.

## Conclusão da investigação

A feature é um protótipo de usabilidade, não um serviço de emergência real. Seu objetivo é verificar se usuários entendem a distinção entre gestão privada e visualização pública, e se a simulação de atualização/revogação é compreensível. A nova publicação é independente para preservar o site legado e os QR Codes existentes.

## Fontes consultadas

- `_reversa_sdd/architecture.md`
- `_reversa_sdd/permissions.md`
- `_reversa_sdd/deployment.md`
- `_reversa_sdd/code-analysis.md`
- `_reversa_sdd/domain.md`
- `_reversa_sdd/brainstorms/001-plataforma-emergencia-diabetes/pre-spec.md`
- `_reversa_forward/001-validar-prototipo-emergencia/requirements.md`
- Documentação consultada do GitHub Pages e da hospedagem estática S3; elegibilidade/custos devem ser confirmados no plano e conta usados.

## Recomendações de execução

- Usar o repositório público já criado, sem fork ou histórico do site atual.
- Usar somente dados sintéticos, com avisos visíveis de demonstração.
- Configurar workflow e Pages somente no repositório novo.
- Tratar todo conteúdo do build como público; não inserir dados reais, segredos ou informações pessoais.
- Validar build, navegação direta/reload e conteúdo do artefato antes da publicação.
- Verificar que o site antigo e os QR Codes existentes continuam funcionando, sem alterar sua URL, código ou workflow.
