import { Link, useLocation } from 'react-router-dom'

const labels: Record<string, string> = {
  '': 'Inicio',
  oportunidades: 'Oportunidades',
  pipeline: 'Pipeline',
  documentacion: 'Documentación',
  reporting: 'Reporting',
  configuracion: 'Configuración',
  ayuda: 'Ayuda',
}

export function AppBreadcrumbs() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)

  const crumbs = parts.map((part, idx) => {
    const to = '/' + parts.slice(0, idx + 1).join('/')
    return { to, label: labels[part] ?? part }
  })

  return (
    <div style={{ fontSize: 13, color: '#6B7280', display: 'flex', gap: 8, alignItems: 'center' }}>
      <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>
        Inicio
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.to} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span>/</span>
          <Link to={crumb.to} style={{ color: '#6B7280', textDecoration: 'none' }}>
            {crumb.label}
          </Link>
        </span>
      ))}
    </div>
  )
}