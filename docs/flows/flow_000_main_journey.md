# Flow 000 - Main Journey

```mermaid
flowchart TD
    A[Usuario entra en TenderAI] --> B[Configura perfil de empresa]
    B --> C[El sistema valida y completa datos básicos]
    C --> D[Motor de matching analiza oportunidades disponibles]
    D --> E[Dashboard muestra oportunidades priorizadas]
    E --> F[Usuario selecciona una oportunidad]
    F --> G[Vista detalle de la oportunidad]
    G --> H[Motor analiza requisitos vs perfil de empresa]
    H --> I[Se genera score de encaje]
    I --> J[Se muestran fortalezas]
    I --> K[Se muestran gaps o carencias]
    J --> L[Recomendación: aplicar / revisar / descartar]
    K --> L
    L --> M{¿Qué quiere hacer el usuario?}
    M -->|Guardar| N[Guardar en pipeline]
    M -->|Descartar| O[Descartar oportunidad]
    M -->|Revisar con experto| P[Solicitar revisión humana]
    M -->|Iniciar propuesta| Q[Comenzar preparación documental]
