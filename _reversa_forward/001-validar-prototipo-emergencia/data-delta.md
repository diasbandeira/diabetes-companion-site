# Data delta: protótipo de validação de ficha de emergência

## Objetivo

Descrever o modelo demonstrativo da nova aplicação independente, sem alterar ou reutilizar os dados do site atual da Flávia.

## Estado do legado

O site existente usa um objeto `patientData` em TypeScript, estático e carregado no frontend. Ele alimenta uma página em produção. O protótipo será mantido em um repositório e GitHub Pages públicos e distintos, sem copiar o histórico, os dados ou os assets do legado. Como o código e o site serão acessíveis publicamente, nenhuma informação pessoal, segredo, dado real de saúde/contato ou conteúdo identificável do site legado pode entrar no protótipo ou artefato publicado. Não há migração de dados entre os projetos.

## Delta proposto no protótipo independente

### 1. Identificação do conteúdo de demonstração

Os dados sintéticos residem em módulo próprio do repositório novo (por exemplo, `<prototype-repo>/src/data/emergencyDemoData.ts`).

- `isDemo: true`
- `demoLabel: "Demonstração"`
- `source: "synthetic"`

Esses campos deixam explícita a natureza fictícia da informação em todas as telas.

### 2. Visibilidade do dado

Adicionar nível de visibilidade por bloco:

```ts
visibility: {
  profile: "private",
  emergencyView: "public",
  contact: "public",
  medicationSummary: "public",
  notes: "private"
}
```

Isso permite validar a compreensão da separação entre informações privadas e compartilháveis.

### 3. Estado de compartilhamento

- `sharingState: "active" | "revoked" | "simulated"`
- `lastSimulatedUpdate`: data/hora local apenas para a sessão de validação

O estado é mantido na interface/em memória e não simula persistência, autenticação ou revogação efetiva de uma URL já distribuída.

### 4. Ações de validação

A interface pode expor ações locais que não persistem em banco:

- `toggleEmergencyVisibility`
- `simulateMedicationUpdate`
- `simulateAccessRevocation`

Essas ações são restritas ao protótipo. O QR/link gerado deve apontar somente para uma visão demonstrativa e não deve codificar dados pessoais.

## Impacto no modelo

- O protótipo tem seu próprio modelo no repositório novo e não importa o `patientData` do site atual.
- O site atual, seus dados, URL e QR Codes não são alterados nem reutilizados.
- A publicação estática ocorre em GitHub Pages independente.
- Não há migração de banco, porque não existe banco no legado e nenhum backend faz parte desta validação.
- Evoluções reais exigiriam desenho próprio de consentimento, controle de acesso, auditoria, revogação e histórico antes de qualquer uso de dados reais.

## Riscos de design

- Conteúdo sintético pode ser confundido com real se o aviso de demonstração não for persistente e inequívoco.
- Copiar arquivos, assets ou histórico do repositório legado pode expor dados da Flávia; criar um repositório limpo e revisar o artefato antes da publicação.
- A revogação demonstrativa não invalida QR Codes/links reais; não descrever a ação como controle de acesso efetivo.
- Qualquer uso de dados reais ou conexão à operação atual está fora do escopo.

## Conclusão

O modelo sintético e isolado permite testar visibilidade, consentimento e compreensão sem tocar nos dados ou na publicação existentes. O protótipo é uma aplicação e publicação independentes; não há dependência de rota nova no site atual.
