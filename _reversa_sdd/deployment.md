# Deployment e infraestrutura

## Pipeline configurado

`.github/workflows/deploy.yml` configura:

1. Disparo em push para `main`.
2. Checkout do repositório e Node.js 20.
3. Instalação por `npm install`.
4. Build por `npm run build`.
5. Upload de `dist` com `actions/upload-pages-artifact@v3`.
6. Deploy via `actions/deploy-pages@v4` no ambiente `github-pages`.

O workflow não declara etapa de testes automatizados; o repositório também não tem script de teste identificado. André confirmou como requisito adicionar lint e testes antes do deployment; recomendação de runner/cobertura está registrada para confirmação. 🔴 **LACUNA DE IMPLEMENTAÇÃO/DECISÃO**.

**Bloqueio crítico de publicação:** André informou que não existe autorização para publicar os dados médicos/de contato incluídos no bundle. O desenvolvedor deve removê-los quando avisado; não publicar essa versão enquanto os dados não forem removidos ou houver autorização. 🔴 **BLOQUEIO CRÍTICO**.

## Build e caminhos

- Vite executa localmente na porta 8080.
- A base é `/` em development e `/diabetes-companion-site/` nos demais modos.
- O build de produção é estático e se destina a ser servido no subcaminho do GitHub Pages.
- O workflow usa npm apesar de existir também `bun.lockb`; `package-lock.json` está presente.
- André decidiu que npm será o único gerenciador oficial, seguindo a configuração atual; `bun.lockb` ainda existe e é resíduo legado a remover em manutenção autorizada. 🟢 **DECISÃO CONFIRMADA**.

## PWA e assets

`vite-plugin-pwa` está configurado com registro `autoUpdate` e manifest. A configuração referencia os assets abaixo:

| Asset configurado | Presente em `public/` |
|---|---|
| `favicon.ico` | sim |
| `apple-touch-icon.png` | não localizado |
| `mask-icon.svg` | não localizado |
| `pwa-192x192.png` | não localizado |
| `pwa-512x512.png` | não localizado |

🟢 **CONFIRMADO:** esses nomes são declarados na configuração, mas os arquivos não foram encontrados em `public/`. O efeito em runtime/build não foi executado nesta análise; a compatibilidade das referências é uma 🔴 **LACUNA** a validar.

André decidiu fornecer e manter os assets referenciados. A decisão está registrada; os arquivos ainda precisam ser fornecidos e validados no artifact. 🔴 **LACUNA DE ENTREGA**.

## Infraestrutura não encontrada

Não foram identificados Dockerfile, Compose, servidor de aplicação, banco de dados, secrets ou configuração de API. A visibilidade efetiva do Pages e permissões do repositório são controladas fora dos arquivos analisados. 🔴 **LACUNA**
