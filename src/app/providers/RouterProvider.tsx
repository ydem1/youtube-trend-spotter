import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {children}
    </BrowserRouter>
  );
}
