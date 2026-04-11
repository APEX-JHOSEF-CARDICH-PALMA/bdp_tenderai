import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Search, 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Bell,
  ChevronDown
} from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio", icon: Home },
    { path: "/oportunidades", label: "Oportunidades", icon: Search },
    { path: "/pipeline", label: "Pipeline", icon: LayoutDashboard },
    { path: "/documentacion", label: "Documentación", icon: FileText },
    { path: "/reporting", label: "Reporting", icon: BarChart3 },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-950 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" />
            </svg>
          </div>
          <span className="font-bold text-xl">TenderAI</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  active
                    ? "bg-indigo-700 text-white"
                    : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom links */}
        <div className="px-3 pb-4 space-y-1">
          <Link
            to="/configuracion"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/configuracion")
                ? "bg-indigo-700 text-white"
                : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Configuración</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors w-full">
            <HelpCircle className="w-5 h-5" />
            <span>Ayuda</span>
          </button>
        </div>

        {/* User profile */}
        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-800 cursor-pointer">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold">
              ED
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Empresa Demo</div>
              <div className="text-xs text-indigo-300 truncate">Encontrar oportunidades</div>
            </div>
            <ChevronDown className="w-4 h-4 text-indigo-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar oportunidades..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 ml-6">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">Empresa Demo</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
