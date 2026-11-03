# Shell e navegação — Questões pendentes

Respostas do usuário processadas pelo Revisor. As decisões registradas não implicam que as lacunas de implementação estejam corrigidas.

| ID | Pergunta | Por que precisa de resposta | Responsável sugerido | Estado |
|---|---|---|---|---|
| Q-01 | O 404 observado em acesso direto a subrota no GitHub Pages é aceitável ou deve ser encaminhado à SPA? | Teste HTTP de 2026-11-02: a raiz retornou 200 e uma subrota inexistente retornou 404. André aceitou esse comportamento. | Responsável por produto/hosting | ✅ Respondida — aceitar o 404 atual |
| Q-02 | Quando a aplicação está publicada sob o subcaminho configurado, o link da página 404 deve voltar à raiz do domínio ou à raiz da aplicação? | O roteador usa `import.meta.env.BASE_URL`, mas a página 404 tem um `href="/"` absoluto. | Responsável por produto | ✅ Respondida — raiz da aplicação publicada, respeitando o subcaminho |
| Q-03 | Qual comportamento deve ocorrer se o elemento `#root` estiver ausente? | O bootstrap não valida o elemento antes de chamar `createRoot`; o resultado de runtime não foi testado. | Responsável técnico | ✅ Respondida — exibir mensagem de erro visível |
| Q-04 | O registro de pathname desconhecido por `console.error` é intencional ou deve usar outro nível/canal de observabilidade? | A página 404 registra todo pathname desconhecido no console, sem telemetria adicional identificada. | Responsável técnico/observabilidade | ✅ Respondida — manter `console.error` e registrar apenas `pathname` |
| Q-05 | O diagnóstico de 404 deve incluir query string ou hash, ou somente pathname é suficiente? | O efeito observa e registra apenas `location.pathname`. | Responsável por produto/observabilidade | ✅ Respondida — registrar somente `pathname` |
| Q-06 | Qual runner e quais critérios devem validar inicialização, rota curinga e publicação sob subcaminho? | André confirmou que testes e lint devem rodar antes do deployment; o runner, a cobertura mínima e os casos específicos do shell permanecem pendentes. | Responsável técnico | 🟡 **PARCIAL** — gate confirmado; estratégia pendente |

## Evidências

- Bootstrap: `src/main.tsx`.
- Base e rotas: `src/App.tsx`, `vite.config.ts`.
- Página de fallback: `src/pages/NotFound.tsx`.
- Workflow de publicação: `.github/workflows/deploy.yml`.
