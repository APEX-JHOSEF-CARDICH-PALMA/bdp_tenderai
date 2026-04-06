```mermaid
flowchart TD
    A[Oportunidad seleccionada] --> B[Análisis de requisitos]
    B --> C{¿La empresa cumple requisitos mínimos?}

    C -->|Sí| D[Generar score y recomendar aplicar]
    C -->|No| E[Identificar gaps]

    E --> F{¿El gap es subsanable?}
    F -->|Sí| G[Recomendar completar información o buscar partner]
    F -->|No| H[Recomendar descartar oportunidad]

    D --> I[Guardar / iniciar propuesta]
    G --> I
    H --> J[Descartar / archivar]
