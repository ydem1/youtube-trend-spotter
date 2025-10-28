import { ReactElement } from "react";
import { RouterProvider } from "./providers";
import AppRoutes from "./routes/Router";
import "./styles/index.css";

function App(): ReactElement {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}

export default App;
