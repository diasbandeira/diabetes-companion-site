# Perguntas para Validação — diabetes-companion-site

> Gerado pelo Revisor em 2026-11-02.
> Respostas recebidas e processadas pelo Revisor; decisões e lacunas de implementação foram propagadas às specs.

As perguntas abaixo registram decisões humanas consolidadas pelo Revisor. Os valores pessoais e clínicos concretos não são reproduzidos.

---

## Pergunta 1 — ✅ Respondida

**Contexto:** Publicação da SPA no GitHub Pages e rota curinga do shell.
**Spec afetada:** [`_reversa_sdd/shell-e-navegacao/requirements.md`](./shell-e-navegacao/requirements.md)
**Pergunta:** O 404 observado em uma subrota direta é aceitável, ou a hospedagem deve encaminhar a rota à SPA?
**Impacto:** Define o contrato de fallback da hospedagem e os critérios de publicação/teste de rotas.

**Resposta:** Aceitar o 404 atual. Teste HTTP em 2026-11-02: a raiz publicada retornou 200 e uma subrota inexistente retornou 404.

---

## Pergunta 2 — ✅ Respondida

**Contexto:** Link da página `NotFound` quando o site é publicado sob um subcaminho.
**Spec afetada:** [`_reversa_sdd/shell-e-navegacao/edge-cases.md`](./shell-e-navegacao/edge-cases.md)
**Pergunta:** O link de retorno deve levar à raiz do domínio ou à raiz da aplicação publicada?
**Impacto:** Define se a navegação existente por `href="/"` é adequada ou precisa ser relativa ao basename.

**Resposta:** A raiz da aplicação publicada, respeitando o subcaminho.

---

## Pergunta 3 — ✅ Respondida

**Contexto:** Bootstrap React quando `#root` está ausente.
**Spec afetada:** [`_reversa_sdd/shell-e-navegacao/requirements.md`](./shell-e-navegacao/requirements.md)
**Pergunta:** Qual comportamento esperado: falha explícita, mensagem de erro visível ou outro fallback?
**Impacto:** Define a validação e o critério de falha do bootstrap.

**Resposta:** Apresentar uma mensagem de erro visível.

---

## Pergunta 4 — ✅ Respondida

**Contexto:** Observabilidade da rota `NotFound`.
**Spec afetada:** [`_reversa_sdd/shell-e-navegacao/questions.md`](./shell-e-navegacao/questions.md)
**Pergunta:** Deve-se manter `console.error` e registrar apenas `pathname`, ou usar outro nível/canal e incluir query string ou hash?
**Impacto:** Define o comportamento de diagnóstico para caminhos inválidos.

**Resposta:** Manter `console.error` e registrar apenas `pathname`.

---

## Pergunta 5 — ✅ Respondida

**Contexto:** Estratégia de qualidade e testes do shell, catálogo UI e infraestrutura.
**Spec afetada:** [`_reversa_sdd/infraestrutura-compartilhada/requirements.md`](./infraestrutura-compartilhada/requirements.md)
**Pergunta:** Qual runner de testes e cobertura mínima devem ser adotados, além do gate de lint/testes antes do deployment?
**Impacto:** Define as tarefas de validação e os comandos necessários para o gate de CI.

**Resposta:** Adicionar lint e testes antes do deploy. André aceitou a recomendação: Vitest + React Testing Library, `user-event`, `jsdom` e cobertura V8, com 80% de linhas/funções/instruções e 70% de branches na superfície ativa do produto.

---

## Pergunta 6 — ✅ Respondida

**Contexto:** Origem e ciclo de vida do objeto estático de dados do cartão.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/questions.md`](./cartao-de-saude-do-paciente/questions.md)
**Pergunta:** Quem atualiza ou remove os dados quando houver mudança de conteúdo ou ausência/revogação da autorização?
**Impacto:** Define governança e critérios para manter, substituir ou remover dados do frontend.

**Resposta:** O paciente informa alterações; o desenvolvedor atualiza ou remove os dados quando avisado. O prazo para remoção não foi especificado.

---

## Pergunta 7 — ✅ Respondida

**Contexto:** Conteúdo clínico apresentado pelo cartão.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/requirements.md`](./cartao-de-saude-do-paciente/requirements.md)
**Pergunta:** Quem define as alterações de conteúdo clínico e existe aprovação independente por profissional de saúde?
**Impacto:** Define a validação necessária para conteúdo médico; o código atual não confirma adequação clínica.

**Resposta:** Somente o paciente define as alterações; não há revisão independente por profissional de saúde.

---

## Pergunta 8 — ✅ Respondida; bloqueio crítico

**Contexto:** Dados médicos incluídos no bundle servido ao cliente.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/tasks.md`](./cartao-de-saude-do-paciente/tasks.md)
**Pergunta:** Há autorização para publicar os dados médicos e de contato nesse frontend e qual audiência deve poder acessá-los?
**Impacto:** Pode bloquear a publicação ou exigir mudança de hospedagem/acesso.

**Resposta:** Não há autorização para essa publicação.

---

## Pergunta 9 — ✅ Respondida

**Contexto:** Campos obrigatórios inválidos ou coleções vazias no cartão.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/edge-cases.md`](./cartao-de-saude-do-paciente/edge-cases.md)
**Pergunta:** Que validação e fallback devem existir para campos ausentes/inválidos, e uma seção de coleção vazia deve permanecer visível?
**Impacto:** Define validação de runtime, tratamento de erro e apresentação de estados vazios.

**Resposta:** Os dados são garantidos como válidos e completos; se ocorrer falha inesperada, mostrar erro visível e impedir conteúdo enganoso. Ocultar seções com coleções vazias.

---

## Pergunta 10 — ✅ Respondida

**Contexto:** Campo `phone` declarado no modelo, mas não renderizado pelo componente.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/design.md`](./cartao-de-saude-do-paciente/design.md)
**Pergunta:** O cartão deve mostrar o telefone formatado ao lado do contato ou o campo deve permanecer apenas como dado auxiliar?
**Impacto:** Define o conteúdo visível e o contrato do componente de contato.

**Resposta:** O campo `phone` permanece como dado auxiliar, sem exibição.

---

## Pergunta 11 — ✅ Respondida

**Contexto:** Link telefônico de emergência.
**Spec afetada:** [`_reversa_sdd/cartao-de-saude-do-paciente/edge-cases.md`](./cartao-de-saude-do-paciente/edge-cases.md)
**Pergunta:** Qual formato de telefone é válido e que alternativa deve ser oferecida em navegadores/dispositivos sem suporte a `tel:`?
**Impacto:** Define validação do destino e experiência alternativa à discagem.

**Resposta:** Formato de 11 dígitos (`xxxxxxxxxxx`); mostrar `formattedPhone` como texto selecionável/copiável quando a ação `tel:` não puder ser usada.

---

## Pergunta 12 — ✅ Respondida

**Contexto:** Wrappers de UI disponíveis sem consumidor identificado na página principal.
**Spec afetada:** [`_reversa_sdd/componentes-de-interface/requirements.md`](./componentes-de-interface/requirements.md)
**Pergunta:** Quais componentes do catálogo, além dos usados pelo cartão, devem ser tratados como parte ativa do produto?
**Impacto:** Delimita o escopo necessário de especificação e testes para a biblioteca.

**Resposta:** Somente os componentes atualmente usados pelo cartão; os demais permanecem como catálogo disponível, sem requisito ativo confirmado.

---

## Pergunta 13 — ✅ Respondida

**Contexto:** Estado do toast Radix permite apenas uma notificação visível.
**Spec afetada:** [`_reversa_sdd/componentes-de-interface/edge-cases.md`](./componentes-de-interface/edge-cases.md)
**Pergunta:** Notificações concorrentes devem substituir a anterior, formar fila ou ser exibidas simultaneamente?
**Impacto:** Define a política de concorrência do reducer de toast.

**Resposta:** Substituir a anterior, conforme o comportamento atual.

---

## Pergunta 14 — ✅ Respondida com recomendação

**Contexto:** Toast dispensado permanece no estado até o timer de 1.000.000 ms.
**Spec afetada:** [`_reversa_sdd/componentes-de-interface/design.md`](./componentes-de-interface/design.md)
**Pergunta:** O atraso atual de remoção é intencional ou deve ser reduzido?
**Impacto:** Define retenção de estado e comportamento após dispensar notificações.

**Resposta:** Usar a recomendação de 1.000 ms após dispensar, suficiente para a animação de saída. Isso é remoção pós-dismiss, não duração de exibição automática.

---

## Pergunta 15 — ✅ Respondida

**Contexto:** Manifest PWA referencia ícones ausentes em `public/`.
**Spec afetada:** [`_reversa_sdd/infraestrutura-compartilhada/tasks.md`](./infraestrutura-compartilhada/tasks.md)
**Pergunta:** Os assets devem ser fornecidos e mantidos, ou as referências correspondentes devem ser removidas?
**Impacto:** Define os arquivos do build e a experiência PWA a validar antes da publicação.

**Resposta:** Fornecer e manter os assets referenciados.

---

## Pergunta 16 — ✅ Respondida com recomendação

**Contexto:** `package-lock.json` e `bun.lockb` coexistem, mas o workflow instala com npm.
**Spec afetada:** [`_reversa_sdd/infraestrutura-compartilhada/requirements.md`](./infraestrutura-compartilhada/requirements.md)
**Pergunta:** npm é o único gerenciador suportado, ou Bun também deve ser mantido como caminho oficial?
**Impacto:** Define lockfiles e instalação reprodutível em desenvolvimento e CI.

**Resposta:** Usar a recomendação: npm como único gerenciador oficial, alinhado ao workflow e ao `package-lock.json`; `bun.lockb` fica como resíduo legado a tratar em manutenção autorizada.
