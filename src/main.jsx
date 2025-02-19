import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./Components/Route/Router";
import AuthProvider from "./Components/Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
