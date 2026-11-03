# Infraestrutura compartilhada — Casos extremos

| ID | Cenário | Comportamento observado / risco | Validação necessária | Confiança |
|---|---|---|---|---|
| EC-01 | Um asset PWA listado em `vite.config.ts` não existe em `public/`. | O manifest/configuração ainda referencia os arquivos; não foi executado build ou instalação para confirmar o efeito. | Executar build, inspecionar manifest/artifact e confirmar carregamento dos ícones. | 🟢 **CONFIRMADO** para a ausência; 🔴 **LACUNA** para o efeito — `vite.config.ts`, `public/` |
| EC-02 | Uma pessoa acessa diretamente uma subrota no GitHub Pages. | Vite define a base do projeto e a SPA tem fallback de rota, mas o workflow não define fallback de servidor para URLs diretas. | Testar HTTP em uma URL de subrota no Pages e definir o fallback necessário. | 🔴 **LACUNA** — `.github/workflows/deploy.yml`, `vite.config.ts` |
| EC-03 | O workflow é executado em uma branch ou evento diferente de push para `main`. | A configuração não declara gatilhos alternativos; não há job de build descrito para outros eventos. | Confirmar se PRs ou outras branches devem executar validações antes do merge. | 🟢 **CONFIRMADO** — `.github/workflows/deploy.yml` |
| EC-04 | Um push para `main` produz build com dependências incompatíveis ou falha de lint/teste. | O workflow executa `npm install` e `npm run build`, sem etapas explícitas de teste ou lint. | Definir controles adicionais e validar a reprodutibilidade do build. | 🟢 **CONFIRMADO** para as etapas; 🔴 **LACUNA** para a política de qualidade |
| EC-05 | Uma tela renderiza `useIsMobile` antes do primeiro efeito ou durante uma mudança rápida de viewport. | O estado começa indefinido e a função retorna `false` até a inicialização do efeito; depois acompanha eventos da media query. | Confirmar se o estado inicial temporário é aceitável para consumidores responsivos. | 🟢 **CONFIRMADO** — `src/hooks/use-mobile.tsx` |
| EC-06 | A largura da viewport é exatamente 768 px. | A condição é `window.innerWidth < 768`; essa largura é classificada como não mobile. | Confirmar se o limite inclusivo está de acordo com o comportamento pretendido. | 🟢 **CONFIRMADO** para a comparação; 🟡 **INFERIDO** para a intenção — `src/hooks/use-mobile.tsx` |

## Resumo

- Assets PWA ausentes, gatilhos de CI e comparação do breakpoint são verificáveis na configuração. 🟢
- Resultado prático de build/instalação, fallback de deep links e política de qualidade do CI dependem de validação. 🔴 **LACUNA**.
