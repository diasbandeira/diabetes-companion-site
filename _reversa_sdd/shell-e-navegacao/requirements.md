# Shell e navegação — Requisitos

## Visão Geral

Esta unit inicializa a SPA e oferece o roteamento para a tela do cartão de saúde. Também encaminha caminhos não reconhecidos para uma página de fallback. 🟢 **CONFIRMADO** — `src/main.tsx`, `src/App.tsx`.

## Responsabilidades

- Montar `App` no elemento `#root`. 🟢 **CONFIRMADO** — `src/main.tsx:5`.
- Disponibilizar providers globais e configurar o basename do roteador. 🟢 **CONFIRMADO** — `src/App.tsx:12-16`.
- Exibir `Index` na rota `/` e `NotFound` nas demais rotas. 🟢 **CONFIRMADO** — `src/App.tsx:18-20`.
- Registrar no console o caminho apresentado pela tela NotFound. 🟢 **CONFIRMADO** — `src/pages/NotFound.tsx:7-9`.

## Regras de Negócio

- A rota `/` apresenta a página principal do cartão. 🟢 **CONFIRMADO**
- A rota curinga apresenta `NotFound`. 🟢 **CONFIRMADO**
- O roteador usa `import.meta.env.BASE_URL` como base. 🟢 **CONFIRMADO**
- O GitHub Pages responde 404 para acesso direto a uma subrota inexistente; André confirmou que esse comportamento é aceitável. 🟢 **CONFIRMADO** por teste HTTP e usuário.
- O link de retorno de `NotFound` deve navegar para a raiz da aplicação publicada, respeitando o subcaminho. 🟢 **CONFIRMADO PELO USUÁRIO** — André escolheu a raiz da aplicação; o código atual usa `href="/"` e não confirma esse resultado sob subcaminho. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.
- Não há autenticação, autorização ou rotas de API identificadas. 🟢 **CONFIRMADO** para o frontend analisado.

## Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de Aceite |
|---|---|---|---|
| RF-01 | A aplicação deve montar `App` no elemento raiz do documento. 🟢 | Must | Com `#root` presente, o conteúdo da rota selecionada é renderizado. |
| RF-02 | A aplicação deve encaminhar `/` para a página principal. 🟢 | Must | Ao abrir `/`, `Index` é o elemento de rota renderizado. |
| RF-03 | A aplicação deve encaminhar caminhos não declarados para `NotFound`. 🟢 | Should | Ao abrir um caminho desconhecido, aparece a página 404 e o caminho é registrado no console. |
| RF-04 | O roteador deve respeitar `import.meta.env.BASE_URL`. 🟢 | Must | Em build com base definida, a SPA mantém a rota raiz relativa ao basename configurado. |
| RF-05 | O link de retorno de `NotFound` deve voltar à raiz da aplicação publicada. 🟢 **CONFIRMADO PELO USUÁRIO** | Should | Sob o subcaminho configurado, ativar o link leva à raiz da SPA; o comportamento atual ainda precisa ser corrigido/validado. 🔴 |

## Requisitos Não Funcionais

Nenhum requisito não funcional explícito de performance, disponibilidade ou segurança foi identificado para esta unit. 🟢 **CONFIRMADO** — não foram observados timeouts, retries ou guards de acesso no caminho de roteamento.

## Critérios de Aceitação

```gherkin
Dado que o documento contém o elemento #root
Quando a aplicação é inicializada e o caminho é /
Então a SPA renderiza a página Index dentro dos providers globais

Dado que a SPA está inicializada
Quando a pessoa abre um caminho não declarado
Então a aplicação renderiza NotFound e registra o pathname no console

Dado que o documento não contém o elemento #root
Quando o bootstrap tenta montar a aplicação
Então deve ser apresentada uma mensagem de erro visível em vez de uma página aparentemente vazia

Dado que a SPA está publicada sob um subcaminho
Quando a pessoa ativa o link de retorno na página NotFound
Então a navegação leva à raiz da aplicação publicada

Dado que a pessoa acessa diretamente uma subrota inexistente no GitHub Pages
Quando o servidor recebe a requisição antes de carregar a SPA
Então pode responder 404 sem carregar o shell
```

O cenário de `#root` define o comportamento esperado confirmado por André; o bootstrap atual não implementa a mensagem visível. 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/main.tsx:5`. O link de retorno à raiz da aplicação também foi confirmado por André, mas o código atual usa `href="/"`. 🔴 **LACUNA DE IMPLEMENTAÇÃO**.

## Prioridade (MoSCoW)

| Requisito | MoSCoW | Justificativa |
|---|---|---|
| Inicializar a rota principal | Must | Caminho de entrada da aplicação. 🟢 |
| Aplicar o basename de publicação | Must | Necessário para o subcaminho configurado no Vite. 🟢 |
| Apresentar fallback para caminho desconhecido | Should | Comportamento de navegação secundário. 🟡 |

Prioridades inferidas da posição no fluxo e da frequência de uso, sem telemetria disponível. 🟡 **INFERIDO**

## Rastreabilidade de Código

| Arquivo | Função / trecho | Cobertura |
|---|---|---|
| `src/main.tsx` | `createRoot(...).render(<App />)` | 🟢 |
| `src/App.tsx` | Providers, BrowserRouter, rotas `/` e `*` | 🟢 |
| `src/pages/NotFound.tsx` | Registro do pathname e apresentação 404 | 🟢 |
