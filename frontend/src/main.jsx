import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/global.css";

import router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <VideoProvider>
        <RouterProvider router={router} />
      </VideoProvider>
    </AuthProvider>
  </StrictMode>,
);
