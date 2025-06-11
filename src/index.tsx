import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Showcase } from "./screens/Showcase";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Showcase />
  </StrictMode>,
);
