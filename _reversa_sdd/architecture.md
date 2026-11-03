# Arquitetura — diabetes-companion-site

## Resumo

Aplicação web de página única em React/TypeScript, compilada pelo Vite e publicada como conteúdo estático no GitHub Pages. O caminho principal apresenta um cartão de saúde montado a partir de um objeto TypeScript local. Não foram identificados backend, banco de dados ou APIs consumidas.

**Confiança:** 🟢 **CONFIRMADO** para a estrutura e execução observadas. O público pretendido e o controle de acesso na hospedagem são 🔴 **LACUNA**.

## Componentes e responsabilidades

| Componente | Responsabilidade | Tecnologia |
|---|---|---|
| Shell e navegação | Inicialização, providers e roteamento `/`/fallback | React, React Router |
| Página do cartão | Composição das seções informativas | React |
| Dados do paciente | Modelo `PatientData` e instância estática | TypeScript |
| Componentes de paciente | Cabeçalho, condições, guia, medicamentos e contato | React, Radix/shadcn |
| Biblioteca de UI | Primitivas e wrappers reutilizáveis | Radix UI, Tailwind, CVA |
| Hooks/utilitários | Classes, viewport e toast em memória | React, clsx, tailwind-merge |
| Hospedagem | Entrega do build estático | GitHub Pages |
| CI/CD | Build e deploy acionados por push à `main` | GitHub Actions |

## Fluxo e dados

`index.html` carrega `src/main.tsx`; `App` compõe providers e seleciona `Index` ou `NotFound`. `Index` lê `patientData` e encaminha propriedades para componentes de apresentação. O objeto contém um agregado de paciente e listas de condições, medicamentos, insulinas, sintomas e faixas de correção.

Não há persistência relacional: o ERD é um modelo lógico dos objetos TypeScript, não um schema de banco. Veja [erd-complete.md](./erd-complete.md) e [data-dictionary.md](./data-dictionary.md).

## Integrações

- **GitHub Pages:** entrega o site estático; configurado pelo workflow de deploy.
- **GitHub Actions:** instala dependências, executa build e publica `dist`.
- **URI `tel:`:** solicita ao navegador/dispositivo que abra o fluxo de ligação com o telefone formatado.
- **PWA:** `vite-plugin-pwa` configura manifest e atualização automática do service worker. Alguns arquivos de ícone configurados não existem em `public/`; veja [deployment.md](./deployment.md).
- **APIs de runtime:** nenhuma identificada nos caminhos da aplicação analisados.

## Restrições e dívidas técnicas observadas

- Dados de saúde e contato são empacotados no frontend; não há login ou autorização no código. A exposição efetiva depende da configuração da hospedagem.
- Não há origem, processo de atualização ou aprovação clínica documentados para os dados. 🔴 **LACUNA**
- Não foram encontrados testes automatizados ou verificações de teste no workflow.
- `package-lock.json` e `bun.lockb` coexistem, enquanto o workflow usa npm.
- O `QueryClientProvider` é montado, mas não há query utilizada pela página principal.
- Há muitos wrappers de UI sem uso direto pela tela. `Separator` é importado, mas não usado em `MedicationList`; `App.css` não integra o caminho de entrada.

## Diagramas

- [C4 — Contexto](./c4-context.md)
- [C4 — Containers](./c4-containers.md)
- [C4 — Componentes](./c4-components.md)
- [ERD lógico](./erd-complete.md)
- [Deployment](./deployment.md)
- [Matriz de impacto entre specs](./traceability/spec-impact-matrix.md)

## Evidências

`src/main.tsx`, `src/App.tsx`, `src/pages/Index.tsx`, `src/data/patientData.ts`, `vite.config.ts` e `.github/workflows/deploy.yml`.
