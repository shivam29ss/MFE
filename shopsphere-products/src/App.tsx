import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/Products/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetails/ProductsDetailsPage";
import type { ProductsAppProps } from "./types/types";
function ProductsApp({ onAddToCart }: ProductsAppProps) {
  // throw new Error("Products MFE test failure");

  return (
    <Routes>
      <Route index element={<ProductsPage onAddToCart={onAddToCart} />} />

      <Route
        path=":productId"
        element={<ProductsDetailsPage />}
      />
    </Routes>
  );
}

export default ProductsApp;