import { ReactElement } from "react";
import { RouterProvider, StoreProvider } from "./providers";
import AppRoutes from "./routes/Router";
import "./styles/index.css";

function App(): ReactElement {
  return (
    <RouterProvider>
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </RouterProvider>
  );
}

export default App;
