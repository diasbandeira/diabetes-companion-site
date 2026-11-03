# Matriz de permissões

## Controles encontrados

Não foram encontrados autenticação, papéis, ACL/RBAC, verificações de identidade ou condicionais de autorização na aplicação. A rota principal não tem guarda de acesso. 🟢 **CONFIRMADO**

| Ator/capacidade | Visualizar cartão | Alterar dados | Iniciar ligação | Evidência/confiança |
|---|---|---|---|---|
| Visitante sem sessão na aplicação | A rota renderiza sem verificação de login | Não há operação de edição na interface | Pode acionar o link `tel:` do dispositivo | 🟢 **CONFIRMADO** quanto ao comportamento do frontend |
| Operador/editor | Não há papel ou interface diferenciada | Não há fluxo de escrita identificado | Não aplicável | 🟢 **CONFIRMADO** quanto à ausência no código |

“Visitante” descreve a ausência de uma sessão/login implementada no frontend; não afirma que a hospedagem permita acesso público. 🔴 **LACUNA:** restrições de acesso do GitHub Pages/repositório e público pretendido não são descritos no código analisado.
