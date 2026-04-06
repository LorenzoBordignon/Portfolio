import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SobrePage } from "../pages/SobrePage";
import { UseContextPage } from "../pages/hooks/UseContextPage";
import { UseEffectPage } from "../pages/hooks/UseEffectPage";
import { UseStatePage } from "../pages/hooks/UseStatePage";
import { appRoutes } from "./routes";

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
        path: appRoutes.sobre.slice(1),
        element: <SobrePage />,
      },
      {
        path: appRoutes.useState.slice(1),
        element: <UseStatePage />,
      },
      {
        path: appRoutes.useEffect.slice(1),
        element: <UseEffectPage />,
      },
      {
        path: appRoutes.useContext.slice(1),
        element: <UseContextPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
