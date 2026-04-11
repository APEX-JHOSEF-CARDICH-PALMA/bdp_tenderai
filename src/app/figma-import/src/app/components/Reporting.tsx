import { TrendingUp, TrendingDown, BarChart3, PieChart, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RePieChart, Pie, Cell } from "recharts";

export function Reporting() {
  const tendenciasSector = [
    { mes: "Ene", oportunidades: 45 },
    { mes: "Feb", oportunidades: 52 },
    { mes: "Mar", oportunidades: 61 },
    { mes: "Abr", oportunidades: 73 },
  ];

  const distribucionSectores = [
    { nombre: "IT y Digital", valor: 35, color: "#6366f1" },
    { nombre: "Salud", valor: 25, color: "#10b981" },
    { nombre: "Educación", valor: 20, color: "#f59e0b" },
    { nombre: "Energía", valor: 12, color: "#ef4444" },
    { nombre: "Otros", valor: 8, color: "#8b5cf6" },
  ];

  const tasaExito = [
    { mes: "Ene", tasa: 22 },
    { mes: "Feb", tasa: 28 },
    { mes: "Mar", tasa: 31 },
    { mes: "Abr", tasa: 35 },
  ];

  const metricas = [
    { titulo: "Win rate", valor: "35%", cambio: "+8%", tendencia: "up", descripcion: "vs. mes anterior" },
    { titulo: "Tiempo medio de cierre", valor: "42 días", cambio: "-5 días", tendencia: "up", descripcion: "vs. mes anterior" },
    { titulo: "Oportunidades analizadas", valor: "128", cambio: "+24", tendencia: "up", descripcion: "este mes" },
    { titulo: "Valor pipeline activo", valor: "€4.2M", cambio: "+18%", tendencia: "up", descripcion: "vs. mes anterior" },
  ];

  const competencia = [
    { empresa: "Competidor A", licitaciones: 18, winRate: "42%" },
    { empresa: "Competidor B", licitaciones: 15, winRate: "38%" },
    { empresa: "Tu empresa", licitaciones: 12, winRate: "35%" },
    { empresa: "Competidor C", licitaciones: 10, winRate: "31%" },
    { empresa: "Competidor D", licitaciones: 8, winRate: "28%" },
  ];

  const recomendaciones = [
    {
      titulo: "Aumentar foco en IT y Digital",
      descripcion: "Este sector muestra un crecimiento del 62% en oportunidades y tu tasa de éxito es del 42%",
      prioridad: "alta",
      impacto: "+€800K estimado"
    },
    {
      titulo: "Mejorar perfil en certificaciones",
      descripcion: "El 23% de oportunidades perdidas requieren ISO 27001 que aún no está en tu perfil",
      prioridad: "media",
      impacto: "+12 oportunidades/mes"
    },
    {
      titulo: "Optimizar tiempo de respuesta",
      descripcion: "Reducir 5 días en preparación podría aumentar tu capacidad en un 15%",
      prioridad: "media",
      impacto: "+3 propuestas/mes"
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reporting & Insights</h1>
          <p className="text-gray-600 mt-1">Análisis estratégico y recomendaciones basadas en datos</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Último mes
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
            Exportar reporte
          </button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {metricas.map((metrica, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">{metrica.titulo}</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{metrica.valor}</div>
            <div className="flex items-center gap-1 text-sm">
              {metrica.tendencia === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={metrica.tendencia === "up" ? "text-green-600" : "text-red-600"}>
                {metrica.cambio}
              </span>
              <span className="text-gray-500">{metrica.descripcion}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Tendencias por sector */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Tendencias por sector - IT y Digital</h2>
            <p className="text-sm text-gray-600">Evolución de oportunidades en los últimos meses</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={tendenciasSector}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="oportunidades" stroke="#6366f1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-900">+62% de crecimiento</span>
              <span className="text-green-700">en este sector</span>
            </div>
          </div>
        </div>

        {/* Distribución por sectores */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Distribución por sectores</h2>
            <p className="text-sm text-gray-600">Donde se concentran las oportunidades</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <RePieChart>
              <Pie
                data={distribucionSectores}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ nombre, valor }) => `${nombre} ${valor}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="valor"
              >
                {distribucionSectores.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        {/* Tasa de éxito */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Tasa de éxito (Win rate)</h2>
            <p className="text-sm text-gray-600">Evolución del porcentaje de licitaciones ganadas</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tasaExito}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="tasa" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-900">+13 puntos</span>
              <span className="text-green-700">de mejora trimestral</span>
            </div>
          </div>
        </div>

        {/* Benchmark de competencia */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Benchmark de competencia</h2>
            <p className="text-sm text-gray-600">Comparación con otras empresas del sector</p>
          </div>
          <div className="space-y-3">
            {competencia.map((comp, idx) => (
              <div key={idx} className={`p-4 rounded-lg ${comp.empresa === "Tu empresa" ? "bg-indigo-50 border-2 border-indigo-300" : "bg-gray-50"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${comp.empresa === "Tu empresa" ? "text-indigo-900" : "text-gray-900"}`}>
                    {idx + 1}. {comp.empresa}
                  </span>
                  <span className="text-sm font-bold text-gray-900">{comp.winRate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{comp.licitaciones} licitaciones</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic recommendations */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recomendaciones estratégicas</h2>
          <p className="text-sm text-gray-600 mt-1">Acciones sugeridas para mejorar tu win rate</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recomendaciones.map((rec, idx) => (
              <div key={idx} className="p-6 rounded-lg border-2 border-gray-200 hover:border-indigo-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900">{rec.titulo}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rec.prioridad === "alta" ? "bg-red-100 text-red-700" :
                        rec.prioridad === "media" ? "bg-orange-100 text-orange-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        Prioridad {rec.prioridad}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{rec.descripcion}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-700">Impacto estimado: {rec.impacto}</span>
                    </div>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                    Aplicar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
