import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'

function Placeholder({ title }: { title: string }) {
  return <h1 style={{ margin: 0, fontSize: 24 }}>{title}</h1>
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
        <Route path="/oportunidades" element={<Placeholder title="Oportunidades" />} />
        <Route path="/pipeline" element={<Placeholder title="Pipeline" />} />
        <Route path="/documentacion" element={<Placeholder title="Documentación" />} />
        <Route path="/reporting" element={<Placeholder title="Reporting" />} />
        <Route path="/configuracion" element={<Placeholder title="Configuración" />} />
        <Route path="/ayuda" element={<Placeholder title="Ayuda" />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}