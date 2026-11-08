# Options, plataforma-emergencia-diabetes

> Selo 🟡 PLANEJADO em todos os itens. Nenhuma opção foi escolhida ainda.

## Problema de referência
🟡 Quando o paciente estiver em crise, eu quero que quem presta os primeiros socorros tenha acesso aos dados do paciente, para conseguir iniciar os primeiros atendimentos e reconhecer o possível problema que a pessoa está passando.

## Restrições ativas
🟡 Nenhuma restrição de stack, prazo ou orçamento foi declarada. A ideia explicita como intenções: atender múltiplos pacientes, permitir auto-onboarding, oferecer acesso emergencial sem login do socorrista, funcionar com baixo consumo de dados e manter o QR Code válido após atualizações. PDF, imagem para tela bloqueada e NFC também foram mencionados como recursos possíveis, não como decisões fechadas.

🟡 Restrição do legado a respeitar em qualquer caminho: a extração registra que não há autorização para publicar os dados médicos e de contato atualmente incluídos no bundle. O site existente é uma SPA estática, sem backend, banco de dados ou autenticação; esses dados não devem ser reutilizados ou publicados sem resolver a autorização.

---

## Opção A, cartão digital individual
- **Em uma frase:** 🟡 Adaptar o cartão atual como modelo para páginas individuais, preparadas e atualizadas manualmente, cada uma com seu próprio link e QR Code.
- **Como resolve o problema:** 🟡 O paciente teria uma página de emergência acessível pelo QR Code; quem presta socorro poderia consultar as informações sem entrar em uma área logada.
- **Esforço:** 🟡 médio, pois a SPA atual é estática e voltada a um único conjunto de dados, e cada cadastro e atualização continuariam dependendo de operação manual.
- **Impacto no legado:** 🟡 Reaproveita a apresentação React/Vite como ponto de partida, mas exige rever a fonte dos dados, a publicação e a forma de separar páginas. O conteúdo médico atual precisa ser removido ou ter sua publicação autorizada.
- **Reversibilidade:** 🟡 fácil, se cada página for publicada e removida independentemente; mudanças na hospedagem ou nos endereços podem exigir reemitir os QR Codes.
- **O que precisa ser verdade para funcionar:** 🟡 O volume de pacientes e a frequência de atualização precisam ser compatíveis com manutenção manual, e cada paciente deve autorizar claramente quais dados ficam acessíveis no link público.

## Opção B, serviço de cadastro assistido
- **Em uma frase:** 🟡 Uma associação, clínica ou equipe responsável conduz o cadastro e a atualização dos pacientes, emitindo para cada um um cartão com acesso à ficha de emergência.
- **Como resolve o problema:** 🟡 O processo de uma organização pode ajudar a manter os dados necessários disponíveis e atualizados para consulta durante uma emergência, sem exigir que cada paciente configure tudo sozinho.
- **Esforço:** 🟡 médio, pois exige definir responsabilidades, consentimento, revisão e suporte, além de escolher ferramentas adequadas para armazenar e publicar as fichas.
- **Impacto no legado:** 🟡 O site atual pode servir como referência visual, mas não oferece gestão de múltiplos pacientes nem controles de acesso à área de cadastro; não deve ser tratado como armazenamento apropriado para esses dados.
- **Reversibilidade:** 🟡 cara, se os dados e os processos ficarem dependentes de uma organização ou ferramenta sem exportação e transferência definidas.
- **O que precisa ser verdade para funcionar:** 🟡 Uma organização precisa assumir a operação, ter autorização para tratar os dados e manter um processo claro de atualização, correção e encerramento de fichas.

## Opção C, plataforma de autoatendimento
- **Em uma frase:** 🟡 Criar uma plataforma multi-paciente em que cada pessoa ou cuidador gerencie uma ficha privada e publique somente uma versão emergencial consentida, associada a um endereço estável e QR Code.
- **Como resolve o problema:** 🟡 O auto-onboarding e a atualização pelo próprio paciente ou cuidador podem disponibilizar os dados de emergência em uma página leve, sem login para o socorrista.
- **Esforço:** 🟡 alto, pois envolve gestão de identidade, isolamento entre pacientes, consentimento, persistência segura, publicação seletiva, atualização e operação confiável.
- **Impacto no legado:** 🟡 A SPA pode ser reaproveitada como referência de interface ou substituída gradualmente; a entrega estática existente não fornece os serviços de backend nem as garantias necessárias para uma plataforma multi-paciente.
- **Reversibilidade:** 🟡 cara, pois dados, identificadores públicos e dependências operacionais precisam de estratégia de exportação, migração e encerramento.
- **O que precisa ser verdade para funcionar:** 🟡 Deve existir demanda validada e capacidade de operar com segurança dados de saúde; pacientes precisam compreender e controlar o que será exibido publicamente.

## Opção sempre presente, não construir
- **Em uma frase:** 🟡 Não criar nem ampliar a plataforma; orientar o paciente a manter um cartão físico de emergência e combinar com pessoas próximas como localizar informações e contatos.
- **Como resolve o problema:** 🟡 Um cartão que acompanha o paciente pode dar ao socorrista uma referência imediata, sem depender de um novo serviço online.
- **Esforço:** 🟡 baixo, pois depende de preparar e manter o cartão e de combinar o procedimento, sem desenvolver software.
- **Impacto no legado:** 🟡 Nenhuma evolução do site. A questão dos dados médicos/de contato sem autorização de publicação no bundle atual continua precisando de tratamento independente.
- **Reversibilidade:** 🟡 fácil, pois o processo pode ser alterado ou interrompido sem migração de dados de uma nova plataforma.
- **O que precisa ser verdade para funcionar:** 🟡 O paciente deve portar o cartão, mantê-lo atualizado e conseguir que as pessoas relevantes saibam onde encontrá-lo.

## Opção sempre presente, usar algo pronto
- **Em uma frase:** 🟡 Usar recursos de informações médicas de emergência já disponíveis em smartphones, como Medical ID no app Saúde da Apple e informações de emergência/Personal Safety em dispositivos Android compatíveis.
- **Como resolve o problema:** 🟡 O paciente pode registrar informações e contatos no próprio dispositivo para que alguém que o encontre consulte esses dados pela tela de emergência, quando o dispositivo e a configuração permitirem.
- **Esforço:** 🟡 baixo, pois usa recursos existentes em vez de criar uma plataforma própria; orientar usuários em diferentes aparelhos e verificar a disponibilidade de acesso continuam necessários.
- **Impacto no legado:** 🟡 Não exige mudanças no site; o cartão atual pode permanecer apenas como protótipo, e os dados sem autorização não devem continuar publicados no bundle.
- **Reversibilidade:** 🟡 fácil, pois as informações podem ser atualizadas ou removidas no aparelho; a experiência depende do dispositivo e não fornece necessariamente um endereço web ou QR Code universal.
- **O que precisa ser verdade para funcionar:** 🟡 O paciente precisa ter um aparelho compatível, configurar as informações e permitir o acesso pela tela bloqueada; o socorrista precisa conseguir localizar esse recurso no dispositivo.

---
Gerado por reversa-explorer em 2026-11-03T00:46:00-03:00
Sessão: 001-plataforma-emergencia-diabetes
Nenhuma recomendação emitida por design. Convergência é papel de /reversa-arbiter.
