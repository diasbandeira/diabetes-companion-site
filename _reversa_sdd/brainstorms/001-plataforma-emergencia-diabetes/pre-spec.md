# Pre-Spec, plataforma-emergencia-diabetes

> Selo 🟡 PLANEJADO. Insumo de entrada para o próximo pipeline, não é uma spec.

## Problema
🟡 Quando o paciente estiver em crise, quem presta os primeiros socorros precisa conseguir acessar dados relevantes do paciente para reconhecer um possível problema relacionado ao diabetes e iniciar o atendimento.

## Caminho escolhido
🟡 Validar a ideia de uma plataforma multi-paciente de autoatendimento, com gestão privada da ficha e uma versão emergencial compartilhável, antes de assumir sua construção.

## Escopo mínimo da primeira entrega
🟡 Criar e testar um protótipo navegável da jornada de cadastro/gestão e da visualização emergencial, usando exclusivamente dados fictícios. A validação deve observar se pacientes/cuidadores e socorristas entendem quais campos serão públicos e como atualizar ou retirar o acesso, registrando dúvidas e falhas.

## Não-objetivos
🟡 Não implementar a plataforma de produção nem coletar dados reais de saúde nesta primeira validação.
🟡 Não gerar nem distribuir QR impresso, PDF, wallpaper ou payload NFC nesta primeira validação.

## Restrições ativas
🟡 Nenhuma restrição dura adicional de stack, prazo ou integração foi declarada.
🟡 Usar dados sintéticos; não usar dados reais de saúde antes da validação de privacidade, consentimento e controles.
🟡 A decisão de explorar uma plataforma não autoriza publicar os dados médicos/de contato presentes no bundle do legado.

## Critério de pronto
🟡 Pacientes/cuidadores e socorristas conseguem, em testes com dados fictícios, identificar quais campos serão públicos e demonstrar como atualizar ou retirar o acesso; as dúvidas e falhas observadas ficam registradas.

## Premissa a validar primeiro
🟡 Existe demanda suficiente e pacientes/cuidadores conseguem compreender e controlar a fronteira entre a ficha privada e a informação emergencial pública. Testar com protótipo navegável e dados fictícios, observando compreensão de campos públicos e de atualização/revogação; completar a análise de arquitetura e privacidade antes de qualquer coleta de dado real.

## Riscos herdados
🟡 A necessidade ainda não foi validada com incidentes ou pesquisa com usuários.
🟡 Exposição de dados sensíveis se consentimento, limitação de campos, autorização ou revogação forem insuficientes.
🟡 O legado não tem backend, persistência, autenticação ou autorização; gestão multi-paciente, recuperação de conta, histórico, suporte e operação segura exigem capacidades novas.
🟡 Não há metas definidas para disponibilidade, desempenho, rede instável ou contingência de uso emergencial.
🟡 A publicação dos dados médicos/de contato atualmente presentes no bundle não foi autorizada; isso requer tratamento separado antes de qualquer distribuição pública.

## Âncoras no legado
🟡 `architecture.md` descreve uma SPA React/Vite estática, publicada no GitHub Pages, sem backend, banco de dados ou APIs identificadas.
🟡 `permissions.md` registra ausência de autenticação, papéis e verificações de autorização.
🟡 `data-dictionary.md` descreve uma ficha estática sem identificador de registro, timestamp, origem ou validação.
🟡 `cartao-de-saude-do-paciente/requirements.md` e `deployment.md` registram que não há autorização para publicar os dados médicos e de contato atuais no bundle público.

## Dúvidas abertas
- [DÚVIDA] 🟡 Que evidência de pacientes, cuidadores ou socorristas será suficiente para confirmar a necessidade e a adoção potencial?
- [DÚVIDA] 🟡 Quais campos são realmente indispensáveis na visualização emergencial e quem pode autorizar cada campo?
- [DÚVIDA] 🟡 Quantos participantes e quais perfis devem compor a validação, e como registrar objetivamente sucesso, dúvidas e falhas?
- [DÚVIDA] 🟡 Quem será responsável por atualização, correção, suporte e retirada de acesso caso a plataforma avance?
- [DÚVIDA] 🟡 Que metas de disponibilidade, tempo de carregamento e alternativa para falta de rede seriam necessárias antes de qualquer uso emergencial real?

---
Gerado por reversa-pre-spec em 2026-11-03T10:04:32.209-03:00
Sessão: 001-plataforma-emergencia-diabetes
Destino sugerido: /reversa-requirements
