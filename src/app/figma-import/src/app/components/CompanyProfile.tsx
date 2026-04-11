import { Building2, MapPin, Users, Award, FileText, CheckCircle, AlertCircle, Plus } from "lucide-react";

export function CompanyProfile() {
  const completeness = 78;

  const seccionesCompletadas = [
    { nombre: "Datos generales", completado: true },
    { nombre: "Capacidades y servicios", completado: true },
    { nombre: "Experiencia previa", completado: true },
    { nombre: "Certificaciones", completado: false },
    { nombre: "Documentación administrativa", completado: true },
    { nombre: "Preferencias de búsqueda", completado: false },
  ];

  const capacidades = [
    "Desarrollo de software",
    "Consultoría IT",
    "Transformación digital",
    "Ciberseguridad",
    "Cloud computing",
    "Inteligencia artificial",
  ];

  const certificaciones = [
    { nombre: "ISO 27001", vigencia: "Hasta 12/2026", estado: "válida" },
    { nombre: "ISO 9001", vigencia: "Hasta 08/2026", estado: "válida" },
    { nombre: "ENS Medio", vigencia: "Pendiente", estado: "pendiente" },
  ];

  const experiencias = [
    {
      titulo: "Plataforma de gestión educativa - Junta de Andalucía",
      año: "2025",
      importe: "€890,000",
      descripcion: "Desarrollo e implementación de sistema integral"
    },
    {
      titulo: "Sistema de ciberseguridad - Gobierno de Aragón",
      año: "2024",
      importe: "€450,000",
      descripcion: "Auditoría y mejora de infraestructura de seguridad"
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Perfil de Empresa</h1>
        <p className="text-gray-600 mt-1">Optimiza tu información para mejorar el matching con oportunidades</p>
      </div>

      {/* Completeness card */}
      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Completitud del perfil</h2>
            <p className="text-indigo-100 mb-6">
              Un perfil más completo mejora la precisión del scoring y te ayuda a descubrir mejores oportunidades
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-white/20 rounded-full h-4 max-w-md">
                <div 
                  className="bg-white h-4 rounded-full transition-all" 
                  style={{ width: `${completeness}%` }}
                ></div>
              </div>
              <span className="text-2xl font-bold">{completeness}%</span>
            </div>
          </div>
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${completeness * 3.52} 352`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{completeness}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main content */}
        <div className="col-span-2 space-y-6">
          {/* Datos generales */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Datos generales
              </h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Editar</button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la empresa</label>
                  <input
                    type="text"
                    value="Empresa Demo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CIF/NIF</label>
                  <input
                    type="text"
                    value="B12345678"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                  <input
                    type="text"
                    value="Madrid, España"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño</label>
                  <input
                    type="text"
                    value="50-200 empleados"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Capacidades y servicios */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Capacidades y servicios</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Añadir
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {capacidades.map((cap, idx) => (
                  <span key={idx} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experiencia previa */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Experiencia previa</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Añadir proyecto
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {experiencias.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{exp.titulo}</h4>
                      <span className="text-sm text-gray-500">{exp.año}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exp.descripcion}</p>
                    <div className="text-sm font-medium text-indigo-600">{exp.importe}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certificaciones
              </h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Añadir certificación
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {certificaciones.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${cert.estado === "válida" ? "bg-green-100" : "bg-orange-100"}`}>
                        <Award className={`w-5 h-5 ${cert.estado === "válida" ? "text-green-600" : "text-orange-600"}`} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{cert.nombre}</div>
                        <div className="text-sm text-gray-500">{cert.vigencia}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.estado === "válida" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {cert.estado === "válida" ? "Válida" : "Pendiente"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Completitud por secciones */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Estado por secciones</h3>
            <div className="space-y-3">
              {seccionesCompletadas.map((seccion, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {seccion.completado ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${seccion.completado ? "text-gray-900" : "text-gray-600"}`}>
                    {seccion.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recomendaciones */}
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-orange-900">Mejoras sugeridas</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Añade certificación ENS</div>
                <p className="text-xs text-gray-600">El 34% de licitaciones la requieren</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Completa preferencias</div>
                <p className="text-xs text-gray-600">Mejora el matching automático</p>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Estadísticas del perfil</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Capacidades registradas</div>
                <div className="text-2xl font-bold text-gray-900">{capacidades.length}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Proyectos de referencia</div>
                <div className="text-2xl font-bold text-gray-900">{experiencias.length}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Certificaciones activas</div>
                <div className="text-2xl font-bold text-gray-900">
                  {certificaciones.filter(c => c.estado === "válida").length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
