# Cross-check de consistência: 001-validar-prototipo-emergencia

> Data: `2026-11-08`
> Feature: `001-validar-prototipo-emergencia`
> Estratégia revisada: repositório e GitHub Pages independentes
> Artefatos analisados:
> - [`requirements.md`](../requirements.md)
> - [`roadmap.md`](../roadmap.md)
> - [`actions.md`](../actions.md)
> - [`onboarding.md`](../onboarding.md)
> - [`data-delta.md`](../data-delta.md)
> - [`investigation.md`](../investigation.md)

## Resumo

| Severidade | Quantidade |
|------------|------------|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 2 |
| LOW | 0 |

## Findings

| ID | Severidade | Eixo | Descrição | Onde está |
|----|------------|------|-----------|-----------|
| A001 | MEDIUM | Navegação estática | A nova SPA precisa definir como uma URL de tela será servida em acesso direto/reload no GitHub Pages. O onboarding recomenda hash routing ou fallback compatível, mas a escolha ainda precisa ser feita e testada no workspace novo. | `roadmap.md` decisões; `actions.md` T004/T011; `onboarding.md` verificação 2; `investigation.md` questões técnicas |
| A002 | MEDIUM | Validação técnica | O repositório foi clonado, mas ainda não contém aplicação nem infraestrutura de build/testes. As ações devem estabelecer comandos executáveis no workspace novo e não presumir dependências/configurações do legado. | `actions.md` T004/T011 e notas; `investigation.md` questões técnicas |

## Findings resolvidos ou obsoletos

- A pendência de nome, visibilidade e URL foi resolvida: o repositório é público, chama-se `ficha-emergencia-diabetes-demo` e tem URL Pages prevista própria. T001/T002 estão concluídas; habilitar Pages continua pendente.

- O risco anterior de indisponibilidade causada pelo deploy no Pages atual não se aplica à estratégia aprovada: o protótipo terá repositório, Pages e workflow próprios. A preservação da URL/QR antigo permanece como verificação.
- A restrição de `allowedPaths` configurada no projeto atual não autoriza nem impede escrita no novo repositório. O workspace novo deve ser fornecido/provisionado e autorizado antes da implementação.
- O finding sobre runner de testes existente no legado não pode ser transportado ao workspace novo; verificar a ferramenta real e validar o protótipo com build e roteiro de onboarding.

## Verificações que passaram

### Cobertura e consistência

- Requirements, roadmap, actions, onboarding, data-delta e investigation agora apontam para publicação em repositório Pages independente.
- Os documentos proíbem alterar o código, os dados, a URL e o workflow do site atual.
- As ações exigem repositório limpo, sem fork/histórico, e dados exclusivamente sintéticos.
- O QR/link demonstrativo não deve transportar dados pessoais nem ser apresentado como controle de acesso real.
- O onboarding separa o rollback do protótipo do deployment existente.
- As ações têm identificadores e dependências definidos sem ciclos aparentes.

### Conclusão

A estratégia aprovada elimina a dependência de deploy do site atual e preserva seu endereço e QR Codes. A implementação ainda depende de definir/testar a navegação estática e criar a infraestrutura de build no workspace novo. Não foi identificado finding crítico relativo à disponibilidade do site atual na estratégia revisada.
