# Análise técnica do código

## Escopo e confiança

Esta análise cobre os quatro módulos registrados no plano e o caminho de execução identificado no frontend. Não foi encontrado backend, banco de dados ou contrato de API.

- 🟢 **CONFIRMADO** — observado diretamente no código.
- 🟡 **INFERIDO** — interpretação baseada na estrutura/padrão.
- 🔴 **LACUNA** — exige validação humana ou evidência ausente.

## Arquitetura em execução

O documento HTML carrega `src/main.tsx`, que monta `App` no elemento `#root`. `App` configura o `QueryClientProvider`, `TooltipProvider`, os dois renderizadores de toast e `BrowserRouter`. A rota `/` renderiza `Index`; qualquer outra rota renderiza `NotFound`.

`Index` importa um objeto `patientData` estático e distribui suas propriedades para componentes de apresentação. As listas percorrem arrays já presentes no objeto. A ação de emergência é um link `tel:`. Nenhuma operação de leitura ou escrita remota participa desse caminho.

## Módulos

### 1. Shell e navegação

**Arquivos principais:** `index.html`, `src/main.tsx`, `src/App.tsx`, `src/pages/Index.tsx`, `src/pages/NotFound.tsx`.

- `main.tsx` usa `createRoot` e o non-null assertion em `document.getElementById("root")`; não há fallback em runtime se o elemento estiver ausente.
- `App` cria um `QueryClient` no escopo do módulo, aplica providers globais e declara uma rota principal e um catch-all.
- `BrowserRouter` recebe `import.meta.env.BASE_URL`, compatível com a base de publicação definida no Vite.
- `NotFound` registra `location.pathname` em `console.error` quando o caminho muda e mostra um link HTML para `/`.
- `src/App.css` não é importado no entry point observado; o entry point importa `src/index.css`.

**Fluxo e regra de negócio:** 🟢 CONFIRMADO — rotas são seleção de tela, sem autenticação ou autorização identificadas. Veja `flowcharts/shell-e-navegacao.md` e `flowcharts/shell-e-navegacao-App.md`.

### 2. Cartão de saúde do paciente

**Arquivos principais:** `src/data/patientData.ts`, `src/pages/Index.tsx` e `src/components/patient/`.

- `PatientData` define o contrato estático de identificação, condições, contato, orientação de hipoglicemia, medicamentos, insulinas e tabela de correção.
- `PatientHeader`, `ConditionList`, `HypoglycemiaGuide`, `MedicationList` e `EmergencyContact` são componentes de apresentação que recebem props.
- `ConditionList`, `HypoglycemiaGuide` e `MedicationList` transformam arrays em elementos visuais. A tabela de correção é apresentada como conteúdo, sem cálculo.
- O link telefônico usa `formattedPhone` como destino; o texto da ação é estático.
- Não existem formulários, efeitos de persistência, validação de domínio ou mutações do modelo nessa tela.

**Algoritmos:** 🟢 CONFIRMADO — não foi identificado algoritmo de negócio. O processamento limita-se a percorrer arrays e compor JSX.

**Dados pessoais:** o objeto estático contém informações médicas e de contato; seus valores foram deliberadamente omitidos desta documentação. Os nomes, tipos e relacionamentos dos campos estão em `data-dictionary.md`.

Veja `flowcharts/cartao-de-saude-do-paciente.md`, `flowcharts/cartao-de-saude-do-paciente-Index.md` e `cartao-de-saude-do-paciente/legacy-mapping.md`.

### 3. Componentes de interface

**Local:** `src/components/ui/` (48 arquivos TSX).

- Os wrappers combinam primitivas Radix, props tipadas, `forwardRef` e classes Tailwind.
- `buttonVariants` e outras variantes usam Class Variance Authority; `cn` compõe e mescla classes.
- A tela atual usa `Badge`, `Button` e `Card`/`CardContent`; `App` monta `Toaster`, `Sonner` e `TooltipProvider`.
- Existem componentes de diálogo, formulário, menu, navegação, calendário, gráfico, sidebar e outros, mas não há import deles na tela principal analisada.
- O wrapper `Separator` é importado por `MedicationList`, mas não aparece no JSX do componente.
- O toast baseado em Radix depende do estado de `src/hooks/use-toast.ts`; não foram encontradas chamadas de `toast` na tela atual.

**Regra de domínio:** 🟢 CONFIRMADO — nenhuma regra do paciente foi identificada nessa camada. O comportamento interativo é delegado em geral às primitivas visuais.

Veja `flowcharts/componentes-de-interface.md` e `componentes-de-interface/legacy-mapping.md`.

### 4. Infraestrutura compartilhada

**Arquivos principais:** `src/hooks/use-mobile.tsx`, `src/hooks/use-toast.ts`, `src/lib/utils.ts`, `src/components/NavLink.tsx`.

- `cn` chama `clsx` e depois `tailwind-merge`.
- `useIsMobile` observa a media query de 767 px, atualiza o booleano a partir da largura da janela e limpa o listener no unmount.
- O reducer de toast trata `ADD_TOAST`, `UPDATE_TOAST`, `DISMISS_TOAST` e `REMOVE_TOAST`. A fila fica limitada a um item.
- `memoryState` e `listeners` são variáveis de módulo; `dispatch` reduz o estado e notifica os listeners registrados pelo hook.
- `toast` retorna operações `update` e `dismiss`. O dismiss agenda remoção após `TOAST_REMOVE_DELAY` (1.000.000 ms); um mapa impede agendar mais de um timeout para o mesmo id.
- `NavLink` estende a API do React Router com classes para estados ativo e pendente.
- A sidebar, quando usada, persiste abertura desktop em cookie por sete dias e aceita atalho Meta/Ctrl+B. Ela usa `useIsMobile`; não está montada na tela principal.

**Limite de ambiente:** 🟢 CONFIRMADO — hooks responsivos dependem de `window`; não há fallback SSR nesses hooks.

Veja `flowcharts/infraestrutura-compartilhada.md`, `flowcharts/infraestrutura-compartilhada-reducer.md`, `flowcharts/infraestrutura-compartilhada-useIsMobile.md` e `infraestrutura-compartilhada/legacy-mapping.md`.

## Integrações, persistência e testes

- **Persistência da aplicação:** nenhuma base de dados identificada. Os dados de saúde são definidos no bundle do frontend; o estado dos toasts é volátil. O cookie da sidebar aplica-se apenas se esse componente for montado.
- **Rede em runtime:** não foi identificado cliente ou chamada a API nos caminhos analisados. `@tanstack/react-query` está instalado e o provider é montado, mas não há query usada pela tela principal.
- **Publicação:** `.github/workflows/deploy.yml` compila e publica no GitHub Pages após push para `main`.
- **Testes automatizados:** nenhum arquivo de teste em `src/` e nenhum script/framework de teste configurado.
- **Lacunas:** 🔴 **LACUNA** — não há documentação de origem/atualização dos dados clínicos nem validação humana registrada para as instruções mostradas pela aplicação.

## Cobertura e limites da análise

Os módulos UI e de infraestrutura incluem componentes reutilizáveis que não são importados pelo caminho da tela principal. A análise os descreve estruturalmente e detalha os wrappers/hooks centrais inspecionados; seus comportamentos não invocados não foram tratados como fluxos ativos do produto.
