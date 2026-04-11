import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, SlidersHorizontal, Eye, Bookmark, X, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { oportunidades } from "../data/mockData";

export function Oportunidades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("todos");
  const [selectedEstado, setSelectedEstado] = useState("todos");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const sectores = ["todos", "IT y Digital", "Ciberseguridad", "Educación", "Energía", "Salud", "Movilidad", "Gobierno Digital"];
  const estados = ["todos", "critico", "pendiente", "listo"];

  const filteredOportunidades = oportunidades.filter(op => {
    const matchesSearch = op.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         op.organismo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === "todos" || op.sector === selectedSector;
    const matchesEstado = selectedEstado === "todos" || op.estado === selectedEstado;
    return matchesSearch && matchesSector && matchesEstado;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Oportunidades</h1>
        <p className="text-gray-600 mt-1">Descubre y analiza licitaciones que encajan con tu perfil</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por título, organismo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Sector filter */}
          <div className="w-64">
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {sectores.map(sector => (
                <option key={sector} value={sector}>
                  {sector === "todos" ? "Todos los sectores" : sector}
                </option>
              ))}
            </select>
          </div>

          {/* Estado filter */}
          <div className="w-48">
            <select
              value={selectedEstado}
              onChange={(e) => setSelectedEstado(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {estados.map(estado => (
                <option key={estado} value={estado}>
                  {estado === "todos" ? "Todos los estados" :
                   estado === "critico" ? "Crítico" :
                   estado === "pendiente" ? "Pendiente" : "Listo"}
                </option>
              ))}
            </select>
          </div>

          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Más filtros
          </button>
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">{filteredOportunidades.length}</span> oportunidades encontradas
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Ordenar por score</option>
            <option>Ordenar por deadline</option>
            <option>Ordenar por importe</option>
          </select>
        </div>
      </div>

      {/* Opportunities grid */}
      <div className="grid gap-4">
        {filteredOportunidades.map((oportunidad) => (
          <div key={oportunidad.id} className="bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      oportunidad.estado === 'critico' ? 'bg-red-500' :
                      oportunidad.estado === 'pendiente' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{oportunidad.titulo}</h3>
                      <p className="text-sm text-gray-600">{oportunidad.organismo}</p>
                    </div>
                  </div>
                </div>

                {/* Score badge */}
                <div className="ml-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke={oportunidad.score >= 80 ? "#10b981" : oportunidad.score >= 60 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${oportunidad.score * 2.26} 226`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-gray-900">{oportunidad.score}%</span>
                      <span className="text-xs text-gray-500">Score</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Importe</div>
                  <div className="text-sm font-bold text-gray-900">€{oportunidad.importe.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Deadline</div>
                  <div className="text-sm font-medium text-gray-900">{oportunidad.deadline}</div>
                  <div className={`text-xs ${
                    oportunidad.diasRestantes <= 3 ? 'text-red-600' :
                    oportunidad.diasRestantes <= 7 ? 'text-orange-600' :
                    'text-gray-500'
                  }`}>
                    {oportunidad.diasRestantes} días restantes
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Sector</div>
                  <div className="text-sm font-medium text-gray-900">{oportunidad.sector}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Estado</div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    oportunidad.estado === 'critico' ? 'bg-red-100 text-red-700' :
                    oportunidad.estado === 'pendiente' ? 'bg-orange-100 text-orange-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {oportunidad.estado === 'critico' ? 'Crítico' :
                     oportunidad.estado === 'pendiente' ? 'Pendiente' : 'Listo'}
                  </span>
                </div>
              </div>

              {/* AI Analysis */}
              {oportunidad.fortalezas && (
                <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-green-900 mb-1">Fortalezas detectadas</div>
                      <ul className="text-sm text-green-800 space-y-1">
                        {oportunidad.fortalezas.map((fortaleza, idx) => (
                          <li key={idx}>• {fortaleza}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {oportunidad.gaps && oportunidad.gaps.length > 0 && (
                <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-orange-900 mb-1">Gaps identificados</div>
                      <ul className="text-sm text-orange-800 space-y-1">
                        {oportunidad.gaps.map((gap, idx) => (
                          <li key={idx}>• {gap}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Link 
                  to={`/tender/${oportunidad.id}`}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-sm text-center flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Ver análisis completo
                </Link>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-sm flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Guardar en pipeline
                </button>
                <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 font-medium text-sm flex items-center gap-2">
                  <X className="w-4 h-4" />
                  Descartar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOportunidades.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron oportunidades</h3>
          <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  );
}
