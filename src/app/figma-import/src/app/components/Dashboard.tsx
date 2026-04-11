import { Link } from "react-router";
import { 
  TrendingUp, 
  Calendar, 
  FileText, 
  AlertTriangle,
  Eye,
  Copy,
  Trash2,
  Search,
  Upload,
  User,
  LayoutDashboard,
  ArrowRight,
  CalendarClock,
  FileWarning,
  AlertCircle,
  TrendingDown
} from "lucide-react";
import { oportunidades, estadisticas, pipelineResumen, alertasCriticas, insightSemanal, accionesRapidas } from "../data/mockData";

export function Dashboard() {
  const oportunidadesPrioritarias = oportunidades.slice(0, 5);

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      'calendar': CalendarClock,
      'file': FileWarning,
      'alert-circle': AlertCircle,
      'search': Search,
      'upload': Upload,
      'user': User,
      'layout-dashboard': LayoutDashboard
    };
    return icons[iconName] || AlertCircle;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Tu centro de mando para ejecutar y ganar licitaciones</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Esta semana
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            Personalizar
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {/* Oportunidades activas */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded">
              <LayoutDashboard className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Oportunidades activas</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{estadisticas.oportunidadesActivas.total}</div>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+{estadisticas.oportunidadesActivas.cambio}%</span>
            <span className="text-gray-500">{estadisticas.oportunidadesActivas.comparacion}</span>
          </div>
        </div>

        {/* Próximos deadlines */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Próximos deadlines</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{estadisticas.proximosDeadlines.total}</div>
          <div className="text-sm text-gray-500">{estadisticas.proximosDeadlines.periodo}</div>
        </div>

        {/* En preparación */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">En preparación</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{estadisticas.enPreparacion.total}</div>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+{estadisticas.enPreparacion.cambio}</span>
            <span className="text-gray-500">{estadisticas.enPreparacion.comparacion}</span>
          </div>
        </div>

        {/* En riesgo */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">En riesgo</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{estadisticas.enRiesgo.total}</div>
          <div className="text-sm text-red-600 font-medium">{estadisticas.enRiesgo.mensaje}</div>
        </div>

        {/* Score medio */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Score medio</span>
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#10b981"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${estadisticas.scoreMedio.valor * 1.76} 176`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">{estadisticas.scoreMedio.valor}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm mt-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+{estadisticas.scoreMedio.cambio} pts</span>
            <span className="text-gray-500">{estadisticas.scoreMedio.comparacion}</span>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Oportunidades prioritarias */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Oportunidades prioritarias</h2>
              <Link to="/oportunidades" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                Ver todas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-600 uppercase">Oportunidad</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase">Organismo</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase">Importe</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase">Deadline</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase">Score</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase">Estado</th>
                    <th className="text-right py-3 px-6 text-xs font-medium text-gray-600 uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {oportunidadesPrioritarias.map((op, index) => (
                    <tr key={op.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            op.estado === 'critico' ? 'bg-red-500' :
                            op.estado === 'pendiente' ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}></div>
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 text-sm">{op.titulo}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{op.organismo}</td>
                      <td className="py-4 px-4 text-sm font-medium text-gray-900">
                        €{op.importe.toLocaleString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-900">{op.deadline}</div>
                        <div className={`text-xs ${
                          op.diasRestantes <= 3 ? 'text-red-600' :
                          op.diasRestantes <= 7 ? 'text-orange-600' :
                          'text-gray-500'
                        }`}>
                          {op.diasRestantes} días
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
                            {op.score}%
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          op.estado === 'critico' ? 'bg-red-100 text-red-700' :
                          op.estado === 'pendiente' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {op.estado === 'critico' ? 'Crítico' :
                           op.estado === 'pendiente' ? 'Pendiente' :
                           'Listo'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1 hover:bg-gray-200 rounded" title="Ver detalle">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded" title="Copiar">
                            <Copy className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded" title="Eliminar">
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar derecho */}
        <div className="space-y-6">
          {/* Pipeline resumido */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Pipeline resumido</h3>
              <Link to="/pipeline" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                Ver pipeline
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm text-gray-700">En análisis</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{pipelineResumen.enAnalisis}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '48%' }}></div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-700">En preparación</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{pipelineResumen.enPreparacion}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">Presentadas</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{pipelineResumen.presentadas}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">Ganadas</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{pipelineResumen.ganadas}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>

          {/* Alertas críticas */}
          <div className="bg-red-50 rounded-lg border border-red-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-red-900">Alertas críticas</h3>
            </div>
            <div className="space-y-3">
              {alertasCriticas.map((alerta) => {
                const IconComponent = getIconComponent(alerta.icono);
                return (
                  <div key={alerta.id} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <IconComponent className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-900">{alerta.mensaje}</span>
                  </div>
                );
              })}
            </div>
            <button className="w-full mt-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm">
              Acción requerida inmediata
            </button>
          </div>

          {/* Insight rápido */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold">Insight rápido</h3>
            </div>
            <div className="text-3xl font-bold mb-2">{insightSemanal.metrica}</div>
            <p className="text-sm text-indigo-100">{insightSemanal.descripcion}</p>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="mt-8">
        <h3 className="font-bold text-gray-900 mb-4">Acciones rápidas</h3>
        <div className="grid grid-cols-4 gap-4">
          {accionesRapidas.map((accion) => {
            const IconComponent = getIconComponent(accion.icono);
            return (
              <Link
                key={accion.id}
                to={accion.ruta}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-3 group-hover:bg-indigo-200 transition-colors">
                  <IconComponent className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{accion.titulo}</h4>
                <p className="text-sm text-gray-600">{accion.descripcion}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
