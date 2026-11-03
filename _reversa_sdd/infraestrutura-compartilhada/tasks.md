# Infraestrutura compartilhada — Tarefas de Implementação

## Pré-requisitos

- [ ] Disponibilizar Node.js 20 e as dependências npm declaradas pelo projeto. 🟢
- [ ] Confirmar o destino de publicação e o subcaminho configurado para Pages. 🟢
- [ ] Obter os assets PWA aprovados ou decidir remover/ajustar as referências a arquivos ausentes antes de publicar. 🔴

## Tarefas

- [ ] T-01 — Implementar utilitário de classes, hook de viewport e adaptador de navegação.
  - Origem no legado: `src/lib/utils.ts:1-5`, `src/hooks/use-mobile.tsx:1-17`, `src/components/NavLink.tsx:1-28`
  - Critério de pronto: `cn` compõe classes; o hook acompanha o breakpoint; `NavLink` aplica classes conforme os estados do Router.
  - Confiança: 🟢
- [ ] T-02 — Definir os tokens CSS, estilos globais e configuração Tailwind.
  - Origem no legado: `src/index.css:1-100`, `tailwind.config.ts:1-65`
  - Critério de pronto: cores, bordas, raios, conteúdo Tailwind e dark mode correspondem às configurações observadas.
  - Confiança: 🟢
- [ ] T-03 — Configurar Vite com React/SWC, alias `@`, base por modo e plugin PWA.
  - Origem no legado: `vite.config.ts:1-39`, `tsconfig.json:1-9`
  - Critério de pronto: desenvolvimento usa `/`; build de produção usa o subcaminho do projeto; imports `@/` resolvem para `src/`.
  - Confiança: 🟢
- [ ] T-04 — Garantir que o manifest PWA referencia assets existentes e válidos.
  - Origem no legado: `vite.config.ts:13-33`, `public/`
  - Critério de pronto: fornecer e manter os ícones aprovados referenciados no manifest; cada arquivo existe no artifact e pode ser carregado.
  - Confiança: 🟢 para a decisão do usuário; 🔴 — os arquivos ainda não foram fornecidos/localizados em `public/`.
- [ ] T-05 — Configurar a action de build e deployment no GitHub Pages.
  - Origem no legado: `.github/workflows/deploy.yml:1-27`
  - Critério de pronto: push para `main` instala dependências com npm, executa o build, publica `dist/` como artifact e realiza o deployment.
  - Confiança: 🟢
- [ ] T-06 — Adicionar lint e testes automatizados como gates antes do deployment.
  - Origem no legado: `.github/workflows/deploy.yml` (etapas atualmente ausentes); requisito confirmado por André.
  - Critério de pronto: o workflow só publica após lint e testes passarem; usar Vitest + React Testing Library, `user-event`, `jsdom` e cobertura V8, com 80% para linhas/funções/instruções e 70% para branches na superfície ativa.
  - Confiança: 🟢 para a decisão confirmada; 🔴 para a implementação pendente.
- [ ] T-07 — Padronizar instalações locais e CI exclusivamente com npm.
  - Origem no legado: `package-lock.json`, `bun.lockb` e `.github/workflows/deploy.yml`.
  - Critério de pronto: documentação e automações usam npm; o lockfile Bun legado é removido em alteração autorizada e coordenada.
  - Confiança: 🟢 para a decisão do usuário; 🔴 — o lockfile legado ainda existe.

## Tarefas de Teste

- [ ] TT-01 — Testar `useIsMobile` abaixo, no e acima do breakpoint e após mudança de viewport.
  - Origem no legado: `src/hooks/use-mobile.tsx:3-17`
  - Critério de pronto: o valor retornado corresponde à regra de largura e acompanha o evento de mudança.
  - Confiança: 🟢 para a regra; não há testes automatizados legados identificados.
- [ ] TT-02 — Testar `cn` com classes condicionais e conflitos Tailwind.
  - Origem no legado: `src/lib/utils.ts:1-5`
  - Critério de pronto: o resultado segue a combinação `clsx` + `twMerge`.
  - Confiança: 🟢
- [ ] TT-03 — Executar build de produção e validar caminhos, manifest e disponibilidade dos assets PWA.
  - Origem no legado: `vite.config.ts`, `public/`
  - Critério de pronto: o build gera artifact sem referências ausentes e os assets podem ser carregados a partir da base configurada.
  - Confiança: 🔴 — o resultado do build com os assets ausentes ainda não foi validado.
- [ ] TT-04 — Validar o workflow de Pages em uma execução de Actions.
  - Origem no legado: `.github/workflows/deploy.yml`
  - Critério de pronto: o job de build e o job de deployment concluem com o artifact `dist/`.
  - Confiança: 🟢 para a configuração; execução não realizada nesta análise.

## Tarefas de Migração de Dados

Não aplicável: a infraestrutura descrita não migra dados de negócio. 🟢 **CONFIRMADO**.

## Ordem Sugerida

1. Resolver os assets PWA ausentes e confirmar o subcaminho efetivo de publicação.
2. Implementar helpers e configurações de estilo.
3. Configurar build e PWA.
4. Executar build de produção e validar o artifact.
5. Confirmar deployment pela action do GitHub Pages.

## Lacunas Pendentes (🔴)

- Determinar se os assets PWA ausentes devem ser adicionados ou se as referências devem ser removidas.
- Confirmar o comportamento do servidor para acesso direto a subrotas publicadas.
- Implementar o runner, os thresholds de cobertura e o gate aprovados; lint e testes não existem no workflow atual.
- Fornecer os assets PWA escolhidos; decisão de manter os assets já foi confirmada.
