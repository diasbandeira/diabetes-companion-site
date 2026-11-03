# ERD lógico — dados apresentados

```mermaid
erDiagram
    PATIENT {
        string name
        string dob
        string bloodType
    }
    CONDITION {
        string value
    }
    EMERGENCY_CONTACT {
        string name
        string phone
        string formattedPhone
    }
    HYPOGLYCEMIA_GUIDE {
        string action
    }
    MILD_SYMPTOM {
        string value
    }
    SEVERE_SYMPTOM {
        string value
    }
    MEDICATION {
        string name
        string dosage
    }
    INSULIN {
        string name
    }
    INSULIN_DOSAGE {
        string value
    }
    CORRECTION_ENTRY {
        string range
        string dose
    }

    PATIENT ||--|| EMERGENCY_CONTACT : contains
    PATIENT ||--|| HYPOGLYCEMIA_GUIDE : contains
    PATIENT ||--o{ CONDITION : lists
    PATIENT ||--o{ MEDICATION : lists
    PATIENT ||--o{ INSULIN : lists
    PATIENT ||--o{ CORRECTION_ENTRY : lists
    HYPOGLYCEMIA_GUIDE ||--o{ MILD_SYMPTOM : lists
    HYPOGLYCEMIA_GUIDE ||--o{ SEVERE_SYMPTOM : lists
    INSULIN ||--o{ INSULIN_DOSAGE : lists
```

## Interpretação

- O diagrama representa a forma lógica de um objeto TypeScript, não tabelas persistidas.
- Os arrays podem conter zero ou mais elementos; o código não define tamanho mínimo.
- Não existem IDs, chaves primárias/estrangeiras ou relações entre registros persistidos.
- Tipos aninhados são declarados inline dentro de `PatientData`.
- Valores pessoais e clínicos concretos foram omitidos.

**Confiança:** 🟢 **CONFIRMADO** para campos e agregação no tipo; cardinalidades de persistência não se aplicam porque não há banco identificado.
