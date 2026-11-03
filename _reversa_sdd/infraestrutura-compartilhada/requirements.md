# Infraestrutura compartilhada — Requisitos

## Visão Geral

Esta unit reúne helpers e hooks compartilhados, configuração de estilo, build e PWA, além do workflow de publicação estática no GitHub Pages. 🟢 **CONFIRMADO** — `src/lib/`, `src/hooks/`, `vite.config.ts`, `tailwind.config.ts`, `src/index.css` e `.github/workflows/deploy.yml`.

O fluxo de produção gera os arquivos estáticos em `dist/` e configura uma base de publicação em subcaminho. 🟢 **CONFIRMADO** — `vite.config.ts` e `.github/workflows/deploy.yml`.

## Responsabilidades

- Fornecer utilitários de classe e hooks reutilizáveis de viewport e toast. 🟢 **CONFIRMADO**.
- Configurar tokens CSS, Tailwind, modo escuro e alias de imports. 🟢 **CONFIRMADO**.
- Configurar Vite, PWA e metadados do documento. 🟢 **CONFIRMADO**.
- Construir e publicar a aplicação estática no GitHub Pages por GitHub Actions. 🟢 **CONFIRMADO**.
- Adaptar `NavLink` do React Router para classes de estado. 🟢 **CONFIRMADO**.

## Regras de Negócio

- `useIsMobile` considera mobile uma viewport com largura menor que 768 px. 🟢 **CONFIRMADO** — `src/hooks/use-mobile.tsx`.
- O alias `@` aponta para `src/`. 🟢 **CONFIRMADO** — `vite.config.ts`, `tsconfig.json`.
- O build de produção usa `/diabetes-companion-site/` como base e o modo de desenvolvimento usa `/`. 🟢 **CONFIRMADO** — `vite.config.ts`.
- O workflow executa em push para `main`, instala dependências com npm, gera o build e publica `dist/` no GitHub Pages. 🟢 **CONFIRMADO** — `.github/workflows/deploy.yml`.
- npm é o único gerenciador oficial, alinhado ao workflow e ao `package-lock.json`; `bun.lockb` existe como resíduo legado e não representa um caminho oficialmente suportado. 🟢 **CONFIRMADO PELO USUÁRIO**, seguindo recomendação baseada na configuração observada.
- André confirmou que o workflow deve executar lint e testes antes do deployment. 🟢 **REQUISITO CONFIRMADO PELO USUÁRIO**; a configuração atual não contém essas etapas. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.
- A configuração PWA solicita auto-update e referencia ícones e assets que não existem atualmente em `public/`. 🟢 **CONFIRMADO** — `vite.config.ts`; `public/` contém apenas `favicon.ico`, `placeholder.svg` e `robots.txt`.
- André decidiu fornecer e manter os assets PWA declarados; eles ainda não foram localizados em `public/`. 🟢 **DECISÃO CONFIRMADA**; 🔴 **LACUNA DE ENTREGA**.
- O efeito da ausência dos assets referenciados no build ou no comportamento instalado não foi validado. 🔴 **LACUNA**.
- Não há etapa de testes ou lint no workflow de publicação observado. 🟢 **CONFIRMADO** — `.github/workflows/deploy.yml`.

## Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de Aceite |
|---|---|---|---|
| RF-01 | Fornecer `cn` para compor e mesclar classes Tailwind. 🟢 | Must | Classes condicionais são normalizadas pelo helper compartilhado. |
| RF-02 | Fornecer hook de viewport e compatibilidade de navegação com classes ativa/pendente. 🟢 | Should | `useIsMobile` acompanha mudanças de largura; `NavLink` aplica classes conforme o estado do Router. |
| RF-03 | Configurar tokens e estilos globais, incluindo tema escuro por classe. 🟢 | Must | Tailwind e CSS usam os tokens definidos para cores, bordas, raios e estado dark. |
| RF-04 | Configurar base, alias, plugin React/SWC e plugin PWA no Vite. 🟢 | Must | O build de produção usa a base configurada e gera os artefatos esperados pelo pipeline. |
| RF-05 | Publicar a aplicação estática no GitHub Pages após push para `main`. 🟢 | Must | A action constrói `dist/`, carrega o artifact de Pages e executa o deployment. |
| RF-06 | Configurar o manifest PWA e declarar os assets de ícone previstos. 🟢 | Should | A configuração contém as referências do manifest; a existência dos arquivos no artifact é uma validação pendente. |
| RF-07 | Executar lint e testes automatizados antes do deployment. 🟢 **REQUISITO CONFIRMADO PELO USUÁRIO** | Must | O workflow só inicia o upload/deployment após lint e testes passarem. Configuração aprovada: Vitest + React Testing Library, `user-event`, `jsdom` e cobertura V8; meta de 80% para linhas/funções/instruções e 70% para branches na superfície ativa do produto. 🔴 **LACUNA DE IMPLEMENTAÇÃO** |
| RF-08 | Manter npm como único gerenciador oficial do projeto. 🟢 **CONFIRMADO PELO USUÁRIO** | Must | Instalação e CI usam npm e `package-lock.json`; Bun não é um caminho suportado. O lockfile Bun existente permanece como resíduo a remover em manutenção autorizada. |

## Requisitos Não Funcionais

| Tipo | Requisito observado | Evidência no código | Confiança |
|---|---|---|---|
| Compatibilidade | O hook de viewport usa `window.matchMedia` e atualiza o estado em eventos `change`. | `src/hooks/use-mobile.tsx` | 🟢 **CONFIRMADO** |
| Disponibilidade de publicação | O deployment depende do sucesso do job de build e publica o diretório `dist/`. | `.github/workflows/deploy.yml` | 🟢 **CONFIRMADO** |

Não foram identificados requisitos explícitos de timeout, retry ou monitoramento de disponibilidade. 🟢 **CONFIRMADO** — workflow e configuração analisados.

## Critérios de Aceitação

```gherkin
Dado um push para a branch main
Quando o workflow de publicação é executado
Então o job instala as dependências, gera dist e publica o artifact no GitHub Pages

Dado um build de produção
Quando os assets PWA declarados são empacotados
Então os ícones referenciados pelo manifest estão presentes no artifact e podem ser carregados

Dado que um asset PWA referenciado não existe em public
Quando o build ou a aplicação instalada processa essa referência
Então o resultado e o comportamento de fallback precisam ser confirmados no ambiente de build

Dado um push para a branch main
Quando o workflow de qualidade é executado
Então lint e testes automatizados passam antes de iniciar o deployment
```

O segundo e o terceiro cenários precisam ser validados; os assets configurados não estão presentes no diretório público observado, embora André tenha decidido fornecê-los e mantê-los. 🔴 **LACUNA DE ENTREGA**.
O cenário de lint e testes é um requisito futuro confirmado pelo usuário, não uma descrição do workflow atual; runner e cobertura foram definidos, mas ainda não estão implementados. 🔴 **LACUNA**.

## Prioridade (MoSCoW)

| Requisito | MoSCoW | Justificativa |
|---|---|---|
| Build e publicação estática | Must | É o caminho configurado para disponibilizar a aplicação. 🟢 |
| Alias e estilos globais | Must | São dependências compartilhadas do código e dos componentes. 🟢 |
| Hooks e compatibilidade de navegação | Should | Estão disponíveis como helpers, sem uso identificado na página principal. 🟡 |
| Manifest e ícones PWA | Should | A configuração existe, mas os assets referenciados estão ausentes. 🟡 |

Prioridades inferidas da configuração e dos consumidores observados, sem métricas de operação. 🟡 **INFERIDO**

## Rastreabilidade de Código

| Arquivo | Função / trecho | Cobertura |
|---|---|---|
| `src/lib/utils.ts` | `cn` | 🟢 |
| `src/hooks/use-mobile.tsx` | `useIsMobile` e breakpoint | 🟢 |
| `src/hooks/use-toast.ts` | Estado e ações compartilhadas de toast | 🟢 |
| `src/components/ui/use-toast.ts` | Reexport do hook de toast | 🟢 |
| `src/components/NavLink.tsx` | Adaptação de classes de estado do Router | 🟢 |
| `tailwind.config.ts` | Conteúdo, tema, cores, raios e animações | 🟢 |
| `src/index.css` | Tokens CSS e estilos globais | 🟢 |
| `vite.config.ts` | Base, alias, plugins e manifest PWA | 🟢 |
| `index.html` | Metadados, viewport e elemento raiz | 🟢 |
| `.github/workflows/deploy.yml` | Build e publicação Pages | 🟢 |
