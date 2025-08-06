import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { TrailProvider } from "./Context/TrailContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrailProvider>
      <App />
    </TrailProvider>
  </StrictMode>
);
