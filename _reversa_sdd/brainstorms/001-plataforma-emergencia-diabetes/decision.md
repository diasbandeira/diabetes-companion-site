# Decision, plataforma-emergencia-diabetes

> Selo 🟡 PLANEJADO. Decisão humana registrada, sujeita a revisão.

## Problema de referência
🟡 Quando o paciente estiver em crise, eu quero que quem presta os primeiros socorros tenha acesso aos dados do paciente, para conseguir iniciar os primeiros atendimentos e reconhecer o possível problema que a pessoa está passando.

## Placar
| Opção | Job to be done | Esforço | Risco residual | Custo no legado | Total |
|---|---:|---:|---:|---:|---:|
| A — cartão digital individual | 4 | 3 | 3 | 2 | 12 |
| B — serviço de cadastro assistido | 4 | 3 | 2 | 3 | 12 |
| C — plataforma de autoatendimento | 5 | 1 | 2 | 1 | 9 |
| Não construir — cartão físico e acordos pessoais | 2 | 5 | 4 | 5 | 16 |
| Usar algo pronto — recursos de emergência do smartphone | 3 | 5 | 4 | 5 | 17 |

🟡 Os critérios têm pesos iguais e o total é a soma simples. Esforço e custo no legado seguem as diferenças descritas em `options.md`; as demais notas são avaliação comparativa contra o problema e os testes/pontos sem volta registrados em `risks.md`. O empate entre A e B permanece: A pontua melhor em risco residual, enquanto B pontua melhor em custo no legado; a falta de uma organização responsável concreta impede desempatar sem nova evidência.

## Recomendação do Arbiter
🟡 **Usar algo pronto — recursos de emergência do smartphone (17/20).** É o caminho de menor esforço, sem mudanças no legado, e permite testar rapidamente se as informações são encontradas em uma emergência simulada. Não atende a uma página web ou QR universal nem à gestão centralizada de vários pacientes.

## O que se perde ao escolher ela
🟡 Perde-se a experiência uniforme de uma ficha web acessível por link/QR, o auto-onboarding multi-paciente e a capacidade de controlar centralmente a apresentação e atualização. A experiência fica dependente do aparelho, da configuração do usuário e do conhecimento de quem presta socorro.

## Em que condição a recomendação muda
🟡 Se um link/QR universal e o autoatendimento multi-paciente forem requisitos indispensáveis e entrevistas confirmarem demanda, além de existir capacidade para operar dados sensíveis com consentimento e controles adequados, a opção C passa a ser candidata para validação e planejamento. Essa mudança não autoriza por si só armazenar dados reais ou iniciar desenvolvimento.

## Decisão do usuário
🟡 Opção C — plataforma de autoatendimento, escolhida por André em 2026-11-03T06:37:17.375-03:00.

## Divergência registrada
🟡 O Arbiter recomendou usar recursos prontos do smartphone (17/20). André escolheu a plataforma de autoatendimento (9/20), priorizando o objetivo de oferecer gestão multi-paciente e página pública/QR próprio, apesar do esforço alto, do risco residual e do maior impacto no legado. A recomendação não foi alterada para coincidir com a escolha.

## A validar antes de comprometer
🟡 Validar a jornada com protótipo navegável e dados sintéticos em entrevistas com pacientes/cuidadores e pessoas que prestam primeiros socorros. Confirmar que entendem quais campos ficam públicos e como retirar o acesso; completar análise de arquitetura e privacidade antes de coletar qualquer dado real.

## Riscos aceitos conscientemente
🟡 A demanda ainda não foi validada por episódios reais ou pesquisa com usuários.
🟡 A ficha pública pode expor dados sensíveis se consentimento, limitação de campos, autorização e revogação forem insuficientes.
🟡 O produto parte de um legado sem backend, persistência, autenticação ou autorização; isolamento multi-paciente, recuperação de conta, revogação, histórico de alterações e suporte terão de ser concebidos e operados.
🟡 Não foram definidos níveis de disponibilidade, desempenho, funcionamento com rede instável ou contingência para uso emergencial.
🟡 A publicação dos dados médicos/de contato atualmente presentes no bundle não foi autorizada; essa situação precisa ser resolvida independentemente da decisão sobre a nova plataforma.

---
Gerado por reversa-arbiter em 2026-11-03T06:37:17.375-03:00
Sessão: 001-plataforma-emergencia-diabetes
