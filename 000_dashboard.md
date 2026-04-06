```mermaid
flowchart TD
    A[Login] --> B[Home / Dashboard]

    B --> C[Oportunidades recomendadas]
    B --> D[Pipeline]
    B --> E[Alertas]
    B --> F[Reporting]
    B --> G[Perfil empresa]
    B --> H[Documentación]

    C --> C1[Ver oportunidad]
    C --> C2[Guardar]
    C --> C3[Descartar]
    C --> C4[Analizar encaje]

    D --> D1[En análisis]
    D --> D2[En preparación]
    D --> D3[Presentadas]

    E --> E1[Deadlines]
    E --> E2[Documentos pendientes]
    E --> E3[Gaps detectados]

    F --> F1[Métricas]
    F --> F2[Tiempo ahorrado]
    F --> F3[Tasa de éxito]

    G --> G1[Editar perfil]
    G --> G2[Actualizar capacidades]

    H --> H1[Subir pliego]
    H --> H2[Generar borrador]
    H --> H3[Revisión humana]
