import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes";
import Lenis from "lenis";

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
