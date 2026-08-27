import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ProductsApp from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsApp />
    </BrowserRouter>
  </React.StrictMode>
);