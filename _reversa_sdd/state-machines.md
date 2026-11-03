# Máquinas de estado

## Estado de domínio

Não foi encontrada entidade de domínio com campo `status`, `state` ou equivalente, nem transições de ciclo de vida do paciente ou de seus dados. Portanto, nenhuma máquina de estado de negócio pode ser extraída do código. 🟢 **CONFIRMADO**

## Estados de interface não pertencentes ao domínio

- O sistema de toast tem ações transitórias `ADD_TOAST`, `UPDATE_TOAST`, `DISMISS_TOAST` e `REMOVE_TOAST` em `src/hooks/use-toast.ts`; não representa estado do paciente.
- A sidebar possui estados de interface `expanded`/`collapsed` e abertura móvel; não está montada na tela principal observada.

Esses estados estão documentados na análise técnica e nos fluxogramas de infraestrutura, mas não foram promovidos a máquinas de estado de negócio.
