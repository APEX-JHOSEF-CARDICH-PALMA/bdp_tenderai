export interface Oportunidad {
  id: string;
  titulo: string;
  organismo: string;
  importe: number;
  deadline: string;
  diasRestantes: number;
  score: number;
  estado: 'critico' | 'pendiente' | 'listo';
  sector: string;
  tipo: string;
  ubicacion: string;
  pipelineStatus?: 'analisis' | 'preparacion' | 'presentada' | 'ganada';
  progreso?: number;
  responsable?: string;
  fortalezas?: string[];
  gaps?: string[];
  recomendacion?: string;
}

export const oportunidades: Oportunidad[] = [
  {
    id: '1',
    titulo: 'Servicio de consultoría IT para transformación digital',
    organismo: 'Ayuntamiento de Madrid',
    importe: 450000,
    deadline: '12/06/2024',
    diasRestantes: 2,
    score: 87,
    estado: 'critico',
    sector: 'IT y Digital',
    tipo: 'Servicio',
    ubicacion: 'Madrid',
    pipelineStatus: 'analisis',
    progreso: 45,
    responsable: 'María García',
    fortalezas: ['Experiencia previa en transformación digital', 'Certificación ISO 27001'],
    gaps: ['Falta de referencias en administración pública de Madrid'],
    recomendacion: 'aplicar'
  },
  {
    id: '2',
    titulo: 'Suministro de soluciones de ciberseguridad',
    organismo: 'Diputación de Barcelona',
    importe: 320000,
    deadline: '18/06/2024',
    diasRestantes: 8,
    score: 75,
    estado: 'pendiente',
    sector: 'Ciberseguridad',
    tipo: 'Suministro',
    ubicacion: 'Barcelona',
    pipelineStatus: 'preparacion',
    progreso: 68,
    responsable: 'Carlos Ruiz',
    fortalezas: ['Certificaciones en ciberseguridad', 'Experiencia demostrable'],
    gaps: [],
    recomendacion: 'aplicar'
  },
  {
    id: '3',
    titulo: 'Desarrollo de plataforma de gestión educativa',
    organismo: 'Junta de Andalucía',
    importe: 980000,
    deadline: '25/06/2024',
    diasRestantes: 15,
    score: 91,
    estado: 'listo',
    sector: 'Educación',
    tipo: 'Desarrollo',
    ubicacion: 'Sevilla',
    pipelineStatus: 'analisis',
    progreso: 30,
    responsable: 'Ana López',
    fortalezas: ['Alto match de requisitos técnicos', 'Experiencia en sector educativo', 'Equipo disponible'],
    gaps: [],
    recomendacion: 'aplicar'
  },
  {
    id: '4',
    titulo: 'Eficiencia energética en edificios públicos',
    organismo: 'Gobierno de Aragón',
    importe: 560000,
    deadline: '02/07/2024',
    diasRestantes: 22,
    score: 68,
    estado: 'pendiente',
    sector: 'Energía',
    tipo: 'Servicio',
    ubicacion: 'Zaragoza',
    pipelineStatus: 'analisis',
    progreso: 15,
    responsable: 'Pedro Martínez'
  },
  {
    id: '5',
    titulo: 'Equipamiento hospitalario avanzado',
    organismo: 'Servicio Andaluz de Salud',
    importe: 1200000,
    deadline: '05/07/2024',
    diasRestantes: 25,
    score: 82,
    estado: 'listo',
    sector: 'Salud',
    tipo: 'Suministro',
    ubicacion: 'Granada',
    pipelineStatus: 'preparacion',
    progreso: 55,
    responsable: 'Laura Sánchez'
  },
  {
    id: '6',
    titulo: 'Implementación de sistema de movilidad sostenible',
    organismo: 'Ayuntamiento de Valencia',
    importe: 780000,
    deadline: '15/07/2024',
    diasRestantes: 35,
    score: 79,
    estado: 'listo',
    sector: 'Movilidad',
    tipo: 'Proyecto',
    ubicacion: 'Valencia',
    pipelineStatus: 'preparacion',
    progreso: 42
  },
  {
    id: '7',
    titulo: 'Renovación de infraestructura de red municipal',
    organismo: 'Ayuntamiento de Bilbao',
    importe: 425000,
    deadline: '20/07/2024',
    diasRestantes: 40,
    score: 85,
    estado: 'listo',
    sector: 'IT y Digital',
    tipo: 'Servicio',
    ubicacion: 'Bilbao',
    pipelineStatus: 'presentada',
    progreso: 100
  },
  {
    id: '8',
    titulo: 'Plataforma de participación ciudadana digital',
    organismo: 'Diputación de Alicante',
    importe: 290000,
    deadline: '28/07/2024',
    diasRestantes: 48,
    score: 73,
    estado: 'pendiente',
    sector: 'Gobierno Digital',
    tipo: 'Desarrollo',
    ubicacion: 'Alicante',
    pipelineStatus: 'ganada',
    progreso: 100
  }
];

export const estadisticas = {
  oportunidadesActivas: {
    total: 128,
    cambio: 12,
    comparacion: 'vs. semana pasada'
  },
  proximosDeadlines: {
    total: 23,
    periodo: 'esta semana'
  },
  enPreparacion: {
    total: 8,
    cambio: 2,
    comparacion: 'desde ayer'
  },
  enRiesgo: {
    total: 5,
    mensaje: 'requiere acción'
  },
  scoreMedio: {
    valor: 87,
    cambio: 3,
    comparacion: 'vs. semana pasada'
  }
};

export const pipelineResumen = {
  enAnalisis: 12,
  enPreparacion: 8,
  presentadas: 5,
  ganadas: 3
};

export const alertasCriticas = [
  {
    id: '1',
    tipo: 'deadline',
    icono: 'calendar',
    mensaje: '3 deadlines en menos de 3 días',
    prioridad: 'alta'
  },
  {
    id: '2',
    tipo: 'documento',
    icono: 'file',
    mensaje: '2 documentos críticos pendientes',
    prioridad: 'alta'
  },
  {
    id: '3',
    tipo: 'tarea',
    icono: 'alert-circle',
    mensaje: '1 gap bloqueante detectado',
    prioridad: 'alta'
  }
];

export const insightSemanal = {
  metrica: '+18%',
  descripcion: 'crecimiento en licitaciones IT esta semana'
};

export const accionesRapidas = [
  {
    id: '1',
    titulo: 'Nueva búsqueda',
    descripcion: 'Encontrar oportunidades',
    icono: 'search',
    ruta: '/oportunidades'
  },
  {
    id: '2',
    titulo: 'Subir documento',
    descripcion: 'Añadir a la biblioteca',
    icono: 'upload',
    ruta: '/documentacion'
  },
  {
    id: '3',
    titulo: 'Completar perfil',
    descripcion: 'Mejorar tu encaje',
    icono: 'user',
    ruta: '/company-profile'
  },
  {
    id: '4',
    titulo: 'Ir a pipeline',
    descripcion: 'Ver estado general',
    icono: 'layout-dashboard',
    ruta: '/pipeline'
  }
];
