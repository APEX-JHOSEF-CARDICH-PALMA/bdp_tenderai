import { Bell, Shield, User, Database, HelpCircle } from "lucide-react";

export function Configuracion() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-600 mt-1">Personaliza tu experiencia en TenderAI</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main settings */}
        <div className="col-span-2 space-y-6">
          {/* Notificaciones */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notificaciones
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Nuevas oportunidades</div>
                  <div className="text-sm text-gray-500">Recibe alertas cuando aparezcan oportunidades que encajen con tu perfil</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Deadlines próximos</div>
                  <div className="text-sm text-gray-500">Avisos cuando una fecha límite esté cerca</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Tareas pendientes</div>
                  <div className="text-sm text-gray-500">Recordatorios de tareas sin completar</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Cuenta */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5" />
                Cuenta
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value="admin@empresademo.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Cambiar contraseña
                </button>
              </div>
            </div>
          </div>

          {/* Preferencias de búsqueda */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Preferencias de búsqueda
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sectores de interés</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">IT y Digital</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Ciberseguridad</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Educación</span>
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                    + Añadir
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rango de importes (€)</label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Mínimo"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="number"
                    placeholder="Máximo"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Plan actual */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
            <h3 className="font-bold mb-2">Plan Professional</h3>
            <p className="text-sm text-indigo-100 mb-4">Acceso completo a todas las funcionalidades</p>
            <button className="w-full py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium text-sm">
              Gestionar plan
            </button>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Enlaces rápidos</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Centro de ayuda
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacidad y seguridad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
