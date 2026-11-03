# Shell e navegação — Casos extremos

| ID | Cenário | Comportamento observado / risco | Validação necessária | Confiança |
|---|---|---|---|---|
| EC-01 | O documento não contém `#root`. | O bootstrap usa uma non-null assertion e passa o resultado de `getElementById` a `createRoot`; não há guarda ou fallback explícito. O erro exato de runtime não foi executado. | Definir se a inicialização deve falhar explicitamente e testar esse comportamento. | 🔴 **LACUNA** — `src/main.tsx:5` |
| EC-02 | A pessoa abre um pathname não declarado. | A rota curinga apresenta `NotFound`; o efeito registra o pathname com `console.error`. | Confirmar que o fallback renderiza e que a mensagem é registrada uma vez por pathname. | 🟢 **CONFIRMADO** — `src/App.tsx:17-20`, `src/pages/NotFound.tsx:7-9` |
| EC-03 | A aplicação é hospedada sob um subcaminho e a pessoa usa o link de retorno do 404. | O código usa `<a href="/">`; André confirmou que o destino esperado é a raiz da aplicação, mas o href atual não aponta explicitamente ao subcaminho. | Corrigir/validar a navegação para a raiz publicada. | 🔴 **LACUNA DE IMPLEMENTAÇÃO** — `src/App.tsx:16`, `src/pages/NotFound.tsx:16-18`; requisito confirmado pelo usuário |
| EC-04 | A pessoa acessa diretamente uma subrota inexistente no GitHub Pages. | Teste HTTP de 2026-11-02: a raiz publicada retornou 200 e a subrota inexistente retornou 404. A aplicação não foi carregada nesse acesso; André aceitou esse comportamento. | Manter o 404 do servidor para acesso direto a subrota inexistente. | 🟢 **CONFIRMADO** — evidência HTTP e decisão do usuário |
| EC-05 | O pathname muda para outro caminho desconhecido. | O efeito depende de `location.pathname`, então registra novamente quando o pathname muda; query string e hash não fazem parte do valor registrado. | Confirmar se registrar apenas o pathname atende à necessidade de diagnóstico. | 🟢 **CONFIRMADO** — `src/pages/NotFound.tsx:7-9` |

## Resumo

- Casos confirmados no código: fallback e registro do pathname.
- Riscos condicionais: navegação ao usar o link absoluto em publicação sob subcaminho.
- Validações pendentes: elemento raiz ausente e comportamento de acesso direto no GitHub Pages.
