import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import router from "./routes/router";
import { SidebarProvider } from "./context/SidebarContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </StrictMode>,
);
