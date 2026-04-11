import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './figma-import/src/app/components/Layout'
import { Dashboard } from './figma-import/src/app/components/Dashboard'
import { Oportunidades } from './figma-import/src/app/components/Oportunidades'
import { Pipeline } from './figma-import/src/app/components/Pipeline'
import { Documentacion } from './figma-import/src/app/components/Documentacion'
import { Reporting } from './figma-import/src/app/components/Reporting'
import { Configuracion } from './figma-import/src/app/components/Configuracion'
import { CompanyProfile } from './figma-import/src/app/components/CompanyProfile'
import { TenderExecution } from './figma-import/src/app/components/TenderExecution'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/tender/:id" element={<TenderExecution />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}