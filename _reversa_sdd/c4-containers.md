# C4 — Containers

```mermaid
C4Container
    title Containers — Cartão de Saúde
    Person(viewer, "Pessoa usuária", "Usa o site em um navegador.")
    System_Boundary(card, "Cartão de Saúde") {
        Container(spa, "Aplicação web", "React 18, TypeScript, React Router", "Renderiza a tela no navegador e usa dados estáticos incluídos no bundle.")
    }
    System_Ext(pages, "GitHub Pages", "Hospedagem de conteúdo estático")
    System_Ext(actions, "GitHub Actions", "Build e publicação")
    System_Ext(phone, "Aplicativo de telefone", "Integração do dispositivo via tel:")

    Rel(viewer, pages, "Acessa o site", "HTTPS")
    Rel(pages, spa, "Entrega HTML, JS, CSS e assets")
    Rel(actions, pages, "Publica dist após build")
    Rel(spa, phone, "Abre link de emergência", "tel:")
```

## Inventário

| Container/serviço | Papel | Dados/tecnologia |
|---|---|---|
| Aplicação web no navegador | Renderiza rotas e conteúdo | React/TypeScript compilado pelo Vite |
| GitHub Pages | Hospeda e serve arquivos do build | Conteúdo estático em `dist` |
| GitHub Actions | Constrói e publica a aplicação | Node 20, npm, Vite |
| Banco de dados/API | Não identificado | Não há container correspondente |

O workflow de publicação é um processo de build/deploy, não um serviço ativo de runtime.

**Confiança:** 🟢 **CONFIRMADO** — configuração do Vite e workflow; nenhuma infraestrutura de backend encontrada.
