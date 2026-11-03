# C4 — Contexto

```mermaid
C4Context
    title Contexto — Cartão de Saúde
    Person(viewer, "Pessoa usuária", "Consulta o cartão em um navegador; o público-alvo específico não está documentado.")
    System(card, "Cartão de Saúde", "SPA React que apresenta dados estáticos de saúde e contato.")
    System_Ext(pages, "GitHub Pages", "Hospeda e entrega o build estático.")
    System_Ext(actions, "GitHub Actions", "Executa o workflow de build e publicação.")
    System_Ext(phone, "Aplicativo de telefone", "Pode ser aberto pelo dispositivo via URI tel:.")

    Rel(viewer, card, "Consulta no navegador", "HTTPS")
    Rel(pages, card, "Entrega os arquivos estáticos do site", "HTTPS")
    Rel(actions, pages, "Publica o artefato dist pelo workflow")
    Rel(card, phone, "Solicita abertura de ligação", "tel:")
```

## Limites de contexto

- GitHub Actions participa da publicação, não de uma chamada de runtime do cartão.
- GitHub Pages serve os arquivos estáticos; o fluxo de usuário executa no navegador.
- O link telefônico delega a ação ao sistema/navegador do dispositivo.
- Não foram identificados provedores de API, serviços de identidade ou banco de dados.

**Confiança:** 🟢 **CONFIRMADO** para os caminhos e integração de deploy configurados; público pretendido e visibilidade efetiva do site são 🔴 **LACUNA**.
