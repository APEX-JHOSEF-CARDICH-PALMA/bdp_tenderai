import { Upload, FileText, FolderOpen, Search, Filter, Download, Eye, Trash2 } from "lucide-react";

export function Documentacion() {
  const documentos = [
    { id: 1, nombre: "Certificado ISO 27001", categoria: "Certificaciones", tamaño: "2.4 MB", fecha: "12/04/2026", tipo: "PDF" },
    { id: 2, nombre: "Memoria técnica template", categoria: "Plantillas", tamaño: "1.1 MB", fecha: "10/04/2026", tipo: "DOCX" },
    { id: 3, nombre: "Referencias proyectos 2025", categoria: "Experiencia", tamaño: "3.8 MB", fecha: "08/04/2026", tipo: "PDF" },
    { id: 4, nombre: "Declaración responsable", categoria: "Legal", tamaño: "856 KB", fecha: "05/04/2026", tipo: "PDF" },
    { id: 5, nombre: "Certificado de estar al corriente", categoria: "Fiscal", tamaño: "1.2 MB", fecha: "01/04/2026", tipo: "PDF" },
    { id: 6, nombre: "Seguro de responsabilidad civil", categoria: "Legal", tamaño: "2.1 MB", fecha: "28/03/2026", tipo: "PDF" },
  ];

  const categorias = [
    { nombre: "Certificaciones", cantidad: 8, color: "bg-blue-500" },
    { nombre: "Legal", cantidad: 12, color: "bg-purple-500" },
    { nombre: "Fiscal", cantidad: 6, color: "bg-green-500" },
    { nombre: "Técnica", cantidad: 15, color: "bg-orange-500" },
    { nombre: "Experiencia", cantidad: 10, color: "bg-indigo-500" },
    { nombre: "Plantillas", cantidad: 5, color: "bg-pink-500" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documentación</h1>
          <p className="text-gray-600 mt-1">Gestiona y organiza toda tu biblioteca de documentos</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Subir documento
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-6 gap-4 mb-8">
        {categorias.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-indigo-300 transition-colors cursor-pointer">
            <div className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center mb-3`}>
              <FolderOpen className="w-5 h-5 text-white" />
            </div>
            <div className="font-medium text-gray-900 text-sm mb-1">{cat.nombre}</div>
            <div className="text-xs text-gray-500">{cat.cantidad} documentos</div>
          </div>
        ))}
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Todas las categorías</option>
            <option>Certificaciones</option>
            <option>Legal</option>
            <option>Fiscal</option>
            <option>Técnica</option>
            <option>Experiencia</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>
      </div>

      {/* Documents list */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-600 uppercase">Nombre</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Categoría</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Tipo</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Tamaño</th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-600 uppercase">Fecha</th>
                <th className="text-right py-4 px-6 text-xs font-medium text-gray-600 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <FileText className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-900">{doc.nombre}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                      {doc.categoria}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{doc.tipo}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{doc.tamaño}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{doc.fecha}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded" title="Ver">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded" title="Descargar">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded" title="Eliminar">
                        <Trash2 className="w-4 h-4 text-red-600" />
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
  );
}
