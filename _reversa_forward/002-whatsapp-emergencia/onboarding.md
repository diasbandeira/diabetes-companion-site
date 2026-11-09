# Onboarding: Validar contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-08`

## Pré-requisitos

- Node.js e npm disponíveis.
- Dependências do projeto instaladas.
- A validação é local. Não publique o build: a autorização para publicar os dados médicos e de contato existentes está pendente.
- Não registre o número do contato em screenshots, logs ou anotações.

## Roteiro

1. Na raiz do projeto, execute `npm run dev` e abra a URL local apresentada pelo Vite.
2. Confirme que a área fixa de contato continua oferecendo a ação **Ligar para Emergência**.
3. Confirme que uma ação separada de WhatsApp aparece com rótulo claro e não depende apenas do ícone para ser compreendida.
4. Acione a ação do WhatsApp e confirme que o destino corresponde ao contato configurado. A navegação pode abrir o aplicativo móvel ou o WhatsApp Web; disponibilidade e sessão dependem do dispositivo.
5. Confirme que a conversa abre sem texto pré-preenchido e sem enviar mensagem. Não envie uma mensagem durante esta validação.
6. Volte à página e confirme que a ligação continua disponível e que abrir o WhatsApp não altera o conteúdo do cartão.
7. Repita em uma viewport móvel e desktop. Verifique que ambos os controles permanecem visíveis, legíveis e acionáveis por teclado.
8. Se estiver validando tratamento de telefone ausente ou inválido, use um dado de teste isolado/local; não altere o dado real do projeto nem publique esse teste.
9. Encerre o servidor com `Ctrl+C`.

## Verificação de build

Após a implementação, execute `npm run build`. Não execute nem habilite o workflow de deploy como parte desta feature.

## Resultado a registrar

- Resultado de build local.
- Presença das duas ações em desktop e viewport móvel.
- Se a navegação para WhatsApp abriu no aplicativo ou no WhatsApp Web, sem registrar o número.
- Confirmação de que nenhuma mensagem foi enviada automaticamente.
- Nenhum dado pessoal ou clínico nas evidências.
