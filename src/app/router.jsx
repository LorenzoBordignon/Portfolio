import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { ContatoPage } from "../pages/ContatoPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjetosPage } from "../pages/ProjetosPage";
import { SobrePage } from "../pages/SobrePage";
import { appRoutes, routeSegments } from "./routes";

export const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routeSegments.sobre,
        element: <SobrePage />,
      },
      {
        path: routeSegments.projetos,
        element: <ProjetosPage />,
      },
      {
        path: routeSegments.contato,
        element: <ContatoPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
