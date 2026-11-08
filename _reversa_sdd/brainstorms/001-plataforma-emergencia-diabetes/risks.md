# Risks, plataforma-emergencia-diabetes

> Selo 🟡 PLANEJADO em todos os itens. Documento adversarial por design.

## Premortem
🟡 **Dados de saúde expostos por uma página pública ou controles insuficientes.** Causa raiz: a fronteira entre a ficha privada e a informação emergencial pública não foi definida por consentimento granular nem protegida por controles adequados.
🟡 **Ficha desatualizada ou incorreta levou a uma decisão ruim durante a emergência.** Causa raiz: dados e orientações foram tratados como confiáveis sem processo claro de atualização, origem ou revisão.
🟡 **A página ou o QR Code não abriu quando o socorrista precisava.** Causa raiz: o acesso dependeu de rede, URL, hospedagem ou aparelho sem alternativa operacional.
🟡 **A solução foi lançada, mas pacientes não a mantiveram atualizada ou não a adotaram.** Causa raiz: a necessidade não foi validada e ninguém assumiu de forma sustentável a atualização e o suporte.

**Manchete que mais assusta o usuário:** 🟡 Dados de saúde expostos por uma página pública ou controles insuficientes.

---

## Opção A, cartão digital individual
- **Premissa que mata:** 🟡 A manutenção manual de páginas individuais continuará viável e correta à medida que aumentarem pacientes e mudanças de dados; se depender de uma pessoa que não pode responder a tempo, a ficha deixa de ser confiável.
- **Teste barato da premissa:** 🟡 Simular, com dados sintéticos e páginas não publicadas, o cadastro, a correção e a retirada de algumas fichas; medir o trabalho e verificar se o mesmo URL/QR continua apontando para a versão atualizada. Entrevistar pacientes sobre consentimento explícito para cada campo público antes de qualquer piloto com dados reais.
- **Custo escondido:** 🟡 O legado não tem backend, autenticação ou fluxo de atualização: `architecture.md` descreve dados estáticos no frontend, e `cartao-de-saude-do-paciente/requirements.md` registra que o paciente avisa e o desenvolvedor atualiza/remove os dados, sem prazo definido. Operar vários cartões manualmente amplia o risco de atraso, erro e publicação sem autorização.
- **Ponto sem volta:** 🟡 Distribuir cartões ou adesivos com URLs e dados públicos em escala; recolher materiais e revogar fichas depois de uma exposição ou mudança de domínio deixa de ser simples.

## Opção B, serviço de cadastro assistido
- **Premissa que mata:** 🟡 Uma organização concreta aceitará responsabilidade contínua por consentimento, atualização, correção, suporte e encerramento das fichas. Sem um operador responsável e autorizado, o serviço não se sustenta.
- **Teste barato da premissa:** 🟡 Conversar com uma organização potencial e fazer um exercício de mesa com dados fictícios: quem coleta, quem autoriza, quem corrige, como uma retirada é atendida e em quanto tempo. Não inserir dados de pacientes no exercício.
- **Custo escondido:** 🟡 Além da ferramenta, há trabalho operacional e de governança. `permissions.md` não identifica papéis nem controles de autorização no legado; `deployment.md` informa que não há infraestrutura de backend, banco de dados ou secrets identificada. A organização precisaria definir acesso de operadores, trilha de alterações e tratamento de solicitações.
- **Ponto sem volta:** 🟡 Começar a coletar dados identificáveis sob a marca de uma organização ou firmar compromissos de serviço sem acordar antes responsabilidades, acesso, exportação e encerramento.

## Opção C, plataforma de autoatendimento
- **Premissa que mata:** 🟡 Existe demanda suficiente e é possível operar uma fronteira segura entre cadastro privado e ficha pública, com consentimento compreensível e revogável. Se não houver demanda ou a informação pública não puder ser limitada com segurança, construir a plataforma perde sua justificativa.
- **Teste barato da premissa:** 🟡 Validar a jornada com protótipo navegável e dados sintéticos em entrevistas com pacientes/cuidadores e pessoas que prestam primeiros socorros; verificar se entendem quais campos ficam públicos e como retirar o acesso. Fazer uma análise de arquitetura/privacidade antes de coletar qualquer dado real.
- **Custo escondido:** 🟡 O salto desde a SPA estática é amplo: `architecture.md` não identifica backend, persistência nem APIs; `data-dictionary.md` registra ausência de identificadores, timestamps, validação e origem dos dados; `permissions.md` não encontra autenticação ou autorização. Isolamento multi-paciente, recuperação de conta, revogação de links, registro de alterações, suporte e operação segura precisam ser projetados e mantidos.
- **Ponto sem volta:** 🟡 Armazenar dados reais de saúde ou emitir links públicos persistentes sem antes validar consentimento, controles de acesso, processo de revogação, resposta a incidentes e capacidade operacional.

## Opção sempre presente, não construir
- **Premissa que mata:** 🟡 Cartão físico e acordos pessoais serão suficientes no momento da emergência e serão portados e mantidos atualizados. Se o cartão não estiver com o paciente ou ninguém souber onde obter as informações, a necessidade inicial permanece sem resposta.
- **Teste barato da premissa:** 🟡 Perguntar a pacientes e cuidadores como guardariam e atualizariam um cartão físico; fazer um teste de localização com um cartão fictício em cenários cotidianos, sem simular tratamento clínico nem usar dados reais.
- **Custo escondido:** 🟡 A ausência de desenvolvimento não elimina a obrigação de resolver a publicação atual: `cartao-de-saude-do-paciente/requirements.md` e `deployment.md` registram que não há autorização para publicar os dados médicos/de contato presentes no bundle. Também permanece sem dono o processo de atualizar ou remover esses dados, conforme os requisitos da unit.
- **Ponto sem volta:** 🟡 Tratar a decisão de não construir como encerramento definitivo enquanto os dados sem autorização continuarem publicados ou enquanto usuários acreditarem que há um serviço monitorado/atualizado quando não há.

## Opção sempre presente, usar algo pronto
- **Premissa que mata:** 🟡 Os pacientes terão aparelhos compatíveis e conseguirão configurar e manter suas informações de emergência acessíveis na tela bloqueada, e quem presta socorro saberá encontrá-las. Se uma dessas condições falhar com frequência, a cobertura será inconsistente.
- **Teste barato da premissa:** 🟡 Testar presencialmente, com dados fictícios, a configuração e localização das informações de emergência em uma pequena variedade de aparelhos e versões de sistema; pedir a usuários que encontrem a ficha sem instruções prévias e registrar os pontos de falha.
- **Custo escondido:** 🟡 Variação entre fabricante, versão e idioma, instruções de suporte e mudanças fora do controle do projeto. `architecture.md` identifica GitHub Pages como hospedagem estática do legado, sem integração atual com informações de emergência do dispositivo; o recurso pronto não fornece por si só o link web/QR universal originalmente imaginado.
- **Ponto sem volta:** 🟡 Prometer cobertura para todos os usuários ou distribuir materiais baseados em um caminho de configuração específico antes de validar aparelhos, acessibilidade e procedimento de atualização.

---

## Riscos transversais
🟡 **Pessoa única responsável por atualização:** a unit legada registra que alterações são comunicadas ao desenvolvedor, sem prazo definido (`cartao-de-saude-do-paciente/requirements.md`). Qualquer opção que dependa de atualização manual precisa nomear um substituto e um processo para correções e retirada.
🟡 **Dados sensíveis e obrigações de privacidade:** dados de saúde e contato já estão no bundle atual, mas sua publicação não foi autorizada; a extração identifica ausência de autenticação/autorização na aplicação (`permissions.md`, `cartao-de-saude-do-paciente/requirements.md`). Uma página pública de emergência também precisa limitar campos, registrar consentimento e permitir revogação. Não presumir que um link difícil de adivinhar substitui controle de acesso ou autorização.
🟡 **Dependência de terceiros:** GitHub Pages e a disponibilidade dos smartphones/recursos Apple e Android estão fora do controle do produto (`architecture.md`, `deployment.md`). O legado não declara fallback ou compromisso de disponibilidade para acesso em emergência.
🟡 **Migração de dados:** não há banco de usuários identificado, mas o modelo atual contém uma ficha estática sem IDs, timestamps, origem ou validação (`data-dictionary.md`). Qualquer transição deve decidir explicitamente se essa ficha será descartada ou migrada; não copiar dados sem autorização e revisão do consentimento.
🟡 **Autenticação e permissões:** o legado não implementa login, papéis ou verificações de identidade (`permissions.md`). Autoatendimento e cadastro assistido introduzem acesso privado e edição; a página pública e o fluxo de gestão não podem compartilhar permissões implicitamente.
🟡 **Disponibilidade e desempenho não definidos:** a proposta menciona redes instáveis e acesso rápido, mas não há metas verificadas de disponibilidade, latência, funcionamento offline, cache ou contingência; `deployment.md` descreve apenas deploy estático via GitHub Pages. Uma promessa de uso emergencial sem critérios e teste de falha pode criar confiança que a operação não consegue cumprir.

## O que precisa ser respondido antes de decidir
🟡 Qual evidência de pacientes, cuidadores ou socorristas confirmaria que a necessidade ocorre e que a solução proposta seria usada?
🟡 Quais dados são realmente indispensáveis na tela de emergência, quem autoriza sua publicação e como a pessoa retira esse consentimento?
🟡 Quem será responsável por atualização, correção, suporte e indisponibilidade, e qual prazo de resposta é aceitável?
🟡 Que nível de disponibilidade, tempo de carregamento e alternativa sem rede é necessário, e como será testado?
🟡 O que acontecerá com os dados do cartão estático atual, cuja publicação não foi autorizada, antes de qualquer nova distribuição?

---
Gerado por reversa-challenger em 2026-11-03T05:42:00-03:00
Sessão: 001-plataforma-emergencia-diabetes
