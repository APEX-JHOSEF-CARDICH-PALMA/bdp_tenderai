import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Euro, MapPin, Award, TrendingUp, CheckCircle, Circle, AlertCircle, Upload, Download, FileText, User, MessageSquare } from "lucide-react";
import { oportunidades } from "../data/mockData";

export function TenderExecution() {
  const { id } = useParams();
  const oportunidad = oportunidades.find(op => op.id === id);

  if (!oportunidad) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Oportunidad no encontrada</h3>
          <Link to="/pipeline" className="text-indigo-600 hover:text-indigo-700">
            Volver al pipeline
          </Link>
        </div>
      </div>
    );
  }

  const tareas = [
    { id: 1, titulo: "Revisar requisitos técnicos", estado: "completada", responsable: "María García" },
    { id: 2, titulo: "Preparar documentación legal", estado: "en-progreso", responsable: "Carlos Ruiz" },
    { id: 3, titulo: "Elaborar propuesta económica", estado: "en-progreso", responsable: "Ana López" },
    { id: 4, titulo: "Revisión de compliance", estado: "pendiente", responsable: null },
    { id: 5, titulo: "Aprobación final", estado: "pendiente", responsable: null },
  ];

  const documentos = [
    { id: 1, nombre: "Certificado ISO 27001", categoria: "Certificaciones", estado: "válido", fecha: "12/04/2026" },
    { id: 2, nombre: "Memoria técnica", categoria: "Técnica", estado: "borrador", fecha: "10/04/2026" },
    { id: 3, nombre: "Declaración responsable", categoria: "Legal", estado: "pendiente", fecha: "-" },
    { id: 4, nombre: "Referencias anteriores", categoria: "Experiencia", estado: "válido", fecha: "08/04/2026" },
  ];

  const completadas = tareas.filter(t => t.estado === "completada").length;
  const progresoTotal = Math.round((completadas / tareas.length) * 100);

  return (
    <div className="p-8">
      {/* Back button */}
      <Link to="/pipeline" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Volver al pipeline</span>
      </Link>

      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{oportunidad.titulo}</h1>
            <p className="text-gray-600">{oportunidad.organismo}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
              Compartir
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
              Actualizar estado
            </button>
          </div>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="text-xs text-gray-500 mb-1">Importe</div>
            <div className="flex items-center gap-2">
              <Euro className="w-4 h-4 text-gray-400" />
              <span className="font-bold text-gray-900">€{oportunidad.importe.toLocaleString()}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Deadline</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{oportunidad.deadline}</span>
            </div>
            <div className={`text-xs mt-1 ${
              oportunidad.diasRestantes <= 3 ? 'text-red-600' :
              oportunidad.diasRestantes <= 7 ? 'text-orange-600' :
              'text-gray-500'
            }`}>
              {oportunidad.diasRestantes} días restantes
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Ubicación</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{oportunidad.ubicacion}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Score de encaje</div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gray-400" />
              <span className="font-bold text-green-700">{oportunidad.score}%</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Progreso total</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <span className="font-bold text-indigo-600">{progresoTotal}%</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progreso de ejecución</span>
            <span className="text-sm text-gray-600">{completadas} de {tareas.length} tareas completadas</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all" 
              style={{ width: `${progresoTotal}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left column - Tasks and Documents */}
        <div className="col-span-2 space-y-6">
          {/* Tasks checklist */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Checklist de tareas</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {tareas.map((tarea) => (
                  <div key={tarea.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                    <div className="mt-1">
                      {tarea.estado === "completada" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : tarea.estado === "en-progreso" ? (
                        <Circle className="w-5 h-5 text-orange-500 fill-orange-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium mb-1 ${
                        tarea.estado === "completada" ? "text-gray-500 line-through" : "text-gray-900"
                      }`}>
                        {tarea.titulo}
                      </div>
                      {tarea.responsable ? (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <User className="w-3 h-3" />
                          <span>{tarea.responsable}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Sin asignar</span>
                      )}
                    </div>
                    <div>
                      {tarea.estado === "completada" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Completada
                        </span>
                      ) : tarea.estado === "en-progreso" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                          En progreso
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          Pendiente
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Documentación requerida</h2>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Subir documento
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {documentos.map((doc) => (
                  <div key={doc.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                    <div className="p-2 bg-gray-100 rounded">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">{doc.nombre}</div>
                      <div className="text-xs text-gray-500">{doc.categoria}</div>
                    </div>
                    <div className="text-xs text-gray-500">{doc.fecha}</div>
                    <div>
                      {doc.estado === "válido" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          Válido
                        </span>
                      ) : doc.estado === "borrador" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          Borrador
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                          Pendiente
                        </span>
                      )}
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column - AI Analysis and Activity */}
        <div className="space-y-6">
          {/* AI Analysis */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Análisis AI
            </h3>
            <div className="space-y-4">
              {oportunidad.fortalezas && oportunidad.fortalezas.length > 0 && (
                <div>
                  <div className="text-sm font-medium mb-2 text-indigo-100">Fortalezas</div>
                  <ul className="space-y-2 text-sm">
                    {oportunidad.fortalezas.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {oportunidad.gaps && oportunidad.gaps.length > 0 && (
                <div>
                  <div className="text-sm font-medium mb-2 text-indigo-100">Áreas de mejora</div>
                  <ul className="space-y-2 text-sm">
                    {oportunidad.gaps.map((g, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {oportunidad.recomendacion && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <div className="text-sm font-medium mb-1">Recomendación</div>
                  <div className="text-sm">
                    {oportunidad.recomendacion === 'aplicar' ? 
                      'Se recomienda aplicar a esta licitación' :
                      'Revisar antes de aplicar'
                    }
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Team activity */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Actividad del equipo</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-medium text-indigo-700 flex-shrink-0">
                    MG
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">María García</div>
                    <div className="text-sm text-gray-600">Completó "Revisar requisitos técnicos"</div>
                    <div className="text-xs text-gray-500 mt-1">Hace 2 horas</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-orange-700 flex-shrink-0">
                    CR
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Carlos Ruiz</div>
                    <div className="text-sm text-gray-600">Subió "Memoria técnica"</div>
                    <div className="text-xs text-gray-500 mt-1">Hace 5 horas</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-medium text-green-700 flex-shrink-0">
                    AL
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Ana López</div>
                    <div className="text-sm text-gray-600">Comentó en la propuesta económica</div>
                    <div className="text-xs text-gray-500 mt-1">Ayer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Comentarios</h3>
            </div>
            <div className="p-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                  ED
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Añadir un comentario..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    rows={3}
                  ></textarea>
                  <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                    Comentar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
