import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Oportunidades } from "./components/Oportunidades";
import { Pipeline } from "./components/Pipeline";
import { Documentacion } from "./components/Documentacion";
import { Reporting } from "./components/Reporting";
import { Configuracion } from "./components/Configuracion";
import { CompanyProfile } from "./components/CompanyProfile";
import { TenderExecution } from "./components/TenderExecution";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "oportunidades", Component: Oportunidades },
      { path: "pipeline", Component: Pipeline },
      { path: "documentacion", Component: Documentacion },
      { path: "reporting", Component: Reporting },
      { path: "configuracion", Component: Configuracion },
      { path: "company-profile", Component: CompanyProfile },
      { path: "tender/:id", Component: TenderExecution },
    ],
  },
]);
