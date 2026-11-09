# Investigation: Contato de emergência por WhatsApp

> Identificador: `002-whatsapp-emergencia`
> Data: `2026-11-08`

## Contexto técnico observado

- `src/components/patient/EmergencyContact.tsx` atualmente renderiza uma ação `tel:` com `data.formattedPhone`.
- `src/data/patientData.ts` tipa o contato com `name`, `phone` e `formattedPhone`; o valor formatado segue a forma internacional.
- `EmergencyContact` é um componente de apresentação. A tela usa dados locais e não há API de runtime ou persistência no fluxo.
- O projeto já dispõe do componente `Button` e do pacote `lucide-react`; não é necessário adicionar dependência para uma segunda ação.
- O cartão é servido como site estático. A navegação para o WhatsApp ocorre fora da aplicação.

## Pesquisa e fonte externa

A documentação oficial de ajuda do WhatsApp descreve o recurso “clique para conversa”:

- [Como usar o recurso "clique para conversa" — Central de Ajuda do WhatsApp](https://faq.whatsapp.com/5913398998672934)

A documentação informa que o link usa `https://wa.me/<number>`, com número em formato internacional completo sem `+`, zeros de discagem, espaços, parênteses ou hífens. Também informa que a conversa pode ser aberta no celular ou WhatsApp Web. Uma mensagem pré-preenchida é um recurso opcional via parâmetro `text`; esta feature deve omiti-lo.

## Alternativas avaliadas

| Alternativa | Avaliação |
|-------------|-----------|
| Usar `https://wa.me/<número normalizado>` | Recomendada: segue a documentação do WhatsApp, não requer SDK nem backend e encaminha a pessoa à conversa. |
| Usar o campo `phone` como destino sem normalização | Descartada: o campo é texto de apresentação/local; o formato esperado não é o formato internacional requerido para o link. |
| Incluir uma mensagem pronta | Descartada: o usuário não pediu texto padrão e a mensagem poderia transmitir informação sensível sem revisão explícita. |
| Integrar API ou SDK de mensagens | Descartada: desnecessário para abrir uma conversa, ampliaria escopo e exigiria credenciais/integração não existentes. |
| Substituir a ligação pela opção WhatsApp | Descartada: contradiz RF-01 e exclui pessoas sem WhatsApp ou sem conexão. |

## Padrões aplicáveis

- Normalizar o telefone para dígitos ASCII antes de compor o destino; não registrar o telefone em logs, screenshots ou documentação de teste.
- Manter ações como links nativos, para que o sistema operacional ou navegador faça o encaminhamento.
- Dar rótulo textual claro a ambas as ações; ícones não devem ser seu único nome acessível.
- Não incluir parâmetro `text` no link, nem enviar mensagem, telemetria ou dados de saúde.
- Evitar alegar que a pessoa foi contatada: a navegação só inicia a conversa e não confirma envio ou resposta.

## Limites e incertezas

- A aplicação não pode garantir que o número informado tenha conta ativa no WhatsApp ou que o aplicativo esteja instalado.
- Não foi identificado processo de validação do número ou autorização de publicação no escopo técnico atual.
- A autorização para publicar os dados médicos e de contato existentes permanece uma restrição independente; a validação desta feature deve ocorrer localmente até sua resolução.
