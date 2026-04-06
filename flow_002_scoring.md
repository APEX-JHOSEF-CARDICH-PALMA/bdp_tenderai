```mermaid
flowchart TD
    A[Perfil empresa] --> B[Sector]
    A --> C[Tamaño]
    A --> D[Capacidades]
    A --> E[Certificaciones]
    A --> F[Experiencia previa]

    G[Oportunidad detectada] --> H[Requisitos técnicos]
    G --> I[Requisitos económicos]
    G --> J[Ubicación]
    G --> K[Plazo]
    G --> L[Criterios de adjudicación]

    B --> M[Motor de matching]
    C --> M
    D --> M
    E --> M
    F --> M
    H --> M
    I --> M
    J --> M
    K --> M
    L --> M

    M --> N[Score de ajuste]
    M --> O[Probabilidad de éxito]
    M --> P[Gaps detectados]
    M --> Q[Recomendación siguiente acción]
