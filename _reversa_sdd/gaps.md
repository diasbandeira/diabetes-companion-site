# Lacunas e Riscos — diabetes-companion-site

> Revisão detalhada do Reversa. Respostas do usuário incorporadas em 2026-11-03.
> Nenhum valor pessoal ou clínico concreto é reproduzido.

## Crítico

### G-01 — Dados médicos/de contato sem autorização de publicação

- **Evidência:** André confirmou que não há autorização para publicar os dados médicos e de contato. O frontend importa o objeto estático e o workflow publica o bundle no GitHub Pages.
- **Impacto:** A publicação pública atual contradiz a autorização informada e pode expor dados sem permissão.
- **Ação requerida:** Não publicar o bundle atual; o desenvolvedor deve remover os dados da publicação quando avisado ou só liberar uma publicação com autorização explícita.
- **Estado:** Decisão confirmada; bloqueio de publicação ainda não implementado. Nenhum dado concreto foi copiado para estes documentos.
- **Specs:** `cartao-de-saude-do-paciente/requirements.md`, `cartao-de-saude-do-paciente/tasks.md`, `deployment.md`.

### G-02 — Conteúdo clínico sem revisão profissional independente

- **Evidência:** O usuário definiu que somente o paciente decide as alterações do conteúdo clínico; não há revisão independente por profissional de saúde nem validação clínica na aplicação.
- **Impacto:** Orientações e informações médicas podem ser atualizadas sem verificação clínica independente.
- **Ação requerida:** Tratar a ausência de revisão como risco operacional explícito e definir salvaguardas antes de qualquer publicação autorizada.
- **Estado:** Decisão de processo confirmada; controle de segurança clínica ausente.
- **Specs:** `cartao-de-saude-do-paciente/requirements.md`, `cartao-de-saude-do-paciente/design.md`.

## Moderado

### G-03 — Link de retorno não respeita o subcaminho

- **Evidência:** O usuário espera voltar à raiz da aplicação publicada; `NotFound` usa `href="/"`, que aponta à raiz do domínio.
- **Ação requerida:** Fazer o link respeitar o basename `/diabetes-companion-site/`.
- **Estado:** Requisito confirmado; implementação divergente.
- **Spec:** `shell-e-navegacao/requirements.md`.

### G-04 — Bootstrap sem mensagem visível se `#root` estiver ausente

- **Evidência:** O bootstrap chama `createRoot` sem validar o elemento. O usuário confirmou que espera uma mensagem de erro visível.
- **Ação requerida:** Tratar explicitamente a ausência do elemento raiz.
- **Estado:** Requisito confirmado; implementação ausente.
- **Spec:** `shell-e-navegacao/requirements.md`.

### G-05 — Tratamento de falhas de dados, seções vazias e fallback telefônico

- **Evidência:** O usuário espera erro visível sem conteúdo enganoso para dados inesperadamente inválidos, ocultação de seções vazias e `formattedPhone` copiável quando `tel:` não puder ser usado. O código atual não implementa esses comportamentos; o telefone esperado tem 11 dígitos.
- **Ação requerida:** Implementar e testar os três comportamentos usando dados sintéticos; manter `phone` como dado auxiliar não exibido.
- **Estado:** Decisões confirmadas; implementação ausente.
- **Spec:** `cartao-de-saude-do-paciente/requirements.md`.

### G-06 — Gate de qualidade ainda não existe no CI

- **Evidência:** O workflow atual executa instalação, build e deploy, sem lint ou testes. André confirmou ambos como pré-requisitos do deployment e aprovou Vitest + React Testing Library, `user-event`, `jsdom`, cobertura V8, meta de 80% para linhas/funções/instruções e 70% para branches na superfície ativa.
- **Ação requerida:** Implementar scripts, testes, thresholds e jobs de CI antes do upload/deployment.
- **Estado:** Decisão confirmada; ferramentas e gate não implementados.
- **Spec:** `infraestrutura-compartilhada/requirements.md`.

### G-07 — Assets PWA declarados ainda não foram fornecidos

- **Evidência:** A configuração referencia ícones ausentes em `public/`; André decidiu fornecê-los e mantê-los.
- **Ação requerida:** Fornecer os arquivos aprovados, validar o artifact e confirmar que podem ser carregados.
- **Estado:** Decisão confirmada; assets ausentes.
- **Spec:** `infraestrutura-compartilhada/tasks.md`.

### G-08 — Delay de remoção do toast diverge do requisito confirmado

- **Evidência:** O código atual usa 1.000.000 ms após dispensar; André aprovou reduzir para 1.000 ms, preservando a animação de saída.
- **Ação requerida:** Ajustar o delay e testar remoção e criação rápida de notificações.
- **Estado:** Requisito confirmado; código ainda usa o valor antigo.
- **Spec:** `componentes-de-interface/edge-cases.md`.

### G-09 — Lockfile Bun permanece apesar de npm ser o único gerenciador oficial

- **Evidência:** André escolheu npm como caminho oficial, alinhado ao workflow e a `package-lock.json`; `bun.lockb` continua no repositório.
- **Ação requerida:** Tratar `bun.lockb` como resíduo legado e removê-lo em uma manutenção autorizada, sem misturar gerenciadores.
- **Estado:** Decisão confirmada; resíduo presente.
- **Spec:** `infraestrutura-compartilhada/requirements.md`.

## Cosmético

Nenhuma lacuna cosmética adicional foi mantida como prioridade após a revisão. Wrappers UI não usados pelo cartão permanecem identificados como catálogo legado, conforme decisão do usuário.
