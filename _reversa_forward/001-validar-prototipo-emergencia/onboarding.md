# Onboarding: protótipo de validação de ficha de emergência

## Objetivo da sessão

Validar se a lógica de separação entre a área privada da pessoa com diabetes/cuidador e a área pública de emergência é compreendida por pacientes/cuidador e socorristas, usando somente conteúdo sintético.

## Pré-condições

- O protótipo deve estar publicado em um repositório GitHub Pages independente, com URL própria, ou em ambiente local controlado.
- O repositório confirmado é público: `https://github.com/diasbandeira/ficha-emergencia-diabetes-demo`; a URL prevista do Pages é `https://diasbandeira.github.io/ficha-emergencia-diabetes-demo/`.
- A página do Pages também será pública. Usar exclusivamente conteúdo sintético e não incluir dados, arquivos ou histórico do site da Flávia, segredos ou informações pessoais.
- Habilitar e validar o Pages no repositório novo antes de divulgar a URL.
- O repositório novo deve ter histórico independente e conter somente a implementação necessária e conteúdo sintético; não usar fork nem copiar histórico, dados ou assets do site da Flávia.
- O site atual, seu repositório, workflow, URL e QR Codes existentes permanecem fora do escopo de alterações.
- Os dados exibidos precisam ser claramente marcados como "Demonstração".
- A sessão não deve coletar dados reais de saúde ou contato.
- O QR/link gerado na sessão deve ser demonstrativo, sem incluir dados pessoais ou sugerir que exista um serviço operacional.
- O deploy do protótipo deve ser feito exclusivamente pelo workflow do repositório novo. Não alterar nem acionar o workflow do site atual para publicar a demonstração.

## Verificação do ambiente e publicação

Antes e depois de publicar, conferir:

1. O Pages novo usa a URL e o `base` configurados para o repositório/site independente.
2. O build e o acesso direto/reload funcionam no GitHub Pages novo; usar navegação compatível com hospedagem estática (por exemplo, hash routing) ou validar o fallback escolhido.
3. O artefato contém apenas o protótipo e dados sintéticos; não contém dados, assets ou histórico do site da Flávia.
4. O workflow executado pertence ao repositório novo.
5. A URL antiga e um QR Code existente continuam abrindo o cartão atual, sem alteração de URL ou conteúdo.
6. Falha de publicação do protótipo não exige alterar nem reverter o deployment do site antigo; rollback do protótipo limita-se ao repositório/Pages novos.

## Passo a passo

### 1. Preparação da sessão

1. Explicar ao participante que a experiência é uma simulação de conceito e não um serviço real.
2. Mostrar o rótulo "Demonstração" em todas as telas.
3. Informar que nenhuma informação é real e que a atividade está focada em entender clareza e confiança.

### 2. Fluxo de gestão privada

1. Abrir a URL própria do protótipo.
2. Abrir o painel de gestão da ficha fictícia.
3. Observar quais blocos estariam protegidos e quais seriam exibidos publicamente.
4. Simular uma atualização de medicamento ou contato usando opções predefinidas.
5. Simular a revogação do compartilhamento.
6. Solicitar ao participante que descreva o que entende como público, privado e o que mudou após a ação.

### 3. Fluxo de visualização pública

1. Abrir a visão emergencial demonstrativa sem login, pelo link/QR de demonstração.
2. Verificar se o participante percebe que se trata de uma demonstração.
3. Pedir que descreva o que acha que pode ler sem autorização.
4. Solicitar que identifique o que acredita ser sensível e o que ficou restrito.

### 4. Registro de observação

O facilitador deve registrar:

- se a pessoa entendeu a separação público/privado;
- se sugeriu uma informação que não deveria ser exibida;
- se a atualização/revogação foi entendida;
- se houve dúvida sobre a identidade da demonstração;
- se a pessoa interpretou o protótipo como uma solução real ou apenas como uma simulação.

## Critério de sucesso da primeira rodada

A hipótese é considerada plausível quando todos os participantes da amostra (3 a 5 pacientes/cuidadores e 3 a 5 socorristas) conseguem explicar, sem orientações extras, qual informação é pública e qual informação permanece privada, e compreendem a simulação de atualização/revogação.

## Observação de risco

Mesmo que a sessão tenha sucesso, as decisões de suporte operacional e manutenção continuam como pré-requisito antes de qualquer piloto com dados reais.

O site atual e seus QR Codes são independentes da publicação do protótipo. A separação reduz o impacto de deploy, mas não garante disponibilidade do novo site; verificar o estado do Pages novo e manter rollback restrito a ele.
