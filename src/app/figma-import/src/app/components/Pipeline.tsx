import { Link } from "react-router";
import { Eye, MoreVertical, Filter } from "lucide-react";
import { oportunidades } from "../data/mockData";

export function Pipeline() {
  const pipelineOportunidades = oportunidades.filter(op => op.pipelineStatus);

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      'analisis': 'En análisis',
      'preparacion': 'En preparación',
      'presentada': 'Presentada',
      'ganada': 'Ganada'
    };
    return labels[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'analisis': 'bg-indigo-100 text-indigo-700',
      'preparacion': 'bg-orange-100 text-orange-700',
      'presentada': 'bg-blue-100 text-blue-700',
      'ganada': 'bg-green-100 text-green-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pipeline</h1>
          <p className="text-gray-600 mt-1">Gestiona todas tus oportunidades activas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Todas las oportunidades</option>
            <option>En análisis</option>
            <option>En preparación</option>
            <option>Presentadas</option>
            <option>Ganadas</option>
          </select>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <span className="text-sm font-medium text-gray-600">En análisis</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">12</div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm font-medium text-gray-600">En preparación</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">8</div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-gray-600">Presentadas</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">5</div>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-gray-600">Ganadas</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">3</div>
        </div>
      </div>

      {/* Pipeline table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-600 uppercase">Oportunidad</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Organismo</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Importe</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Score</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Deadline</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Estado</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Progreso</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Responsable</th>
                <th className="text-right py-4 px-6 text-xs font-medium text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pipelineOportunidades.map((op) => (
                <tr key={op.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900 text-sm max-w-xs">{op.titulo}</div>
                    <div className="text-xs text-gray-500 mt-1">{op.sector}</div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{op.organismo}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">
                    €{op.importe.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <div className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 inline-block">
                      {op.score}%
                    </div>
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
                    {op.pipelineStatus && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(op.pipelineStatus)}`}>
                        {getStatusLabel(op.pipelineStatus)}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${op.progreso || 0}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">{op.progreso || 0}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {op.responsable ? (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-medium text-indigo-700">
                          {op.responsable.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-700">{op.responsable.split(' ')[0]}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Sin asignar</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        to={`/tender/${op.id}`}
                        className="p-2 hover:bg-gray-200 rounded"
                        title="Ver detalle"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </Link>
                      <button className="p-2 hover:bg-gray-200 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pipelineOportunidades.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No hay oportunidades en pipeline</h3>
          <p className="text-gray-600 mb-4">Comienza añadiendo oportunidades desde la sección de búsqueda</p>
          <Link 
            to="/oportunidades"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
          >
            Buscar oportunidades
          </Link>
        </div>
      )}
    </div>
  );
}
