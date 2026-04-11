import { NavLink } from 'react-router-dom'

const items = [
  { label: 'Inicio', path: '/dashboard' },
  { label: 'Oportunidades', path: '/oportunidades' },
  { label: 'Pipeline', path: '/pipeline' },
  { label: 'Documentación', path: '/documentacion' },
  { label: 'Reporting', path: '/reporting' },
  { label: 'Configuración', path: '/configuracion' },
  { label: 'Ayuda', path: '/ayuda' },
]

export function Sidebar() {
  return (
    <aside style={{ width: 240, background: '#111827', color: '#e5e7eb', padding: 12 }}>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>TenderAI</div>
      <nav style={{ display: 'grid', gap: 6 }}>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: '#e5e7eb',
              padding: '10px 12px',
              borderRadius: 8,
              background: isActive ? '#1f2937' : 'transparent',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}