import "devextreme/dist/css/dx.light.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
