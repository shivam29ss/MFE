import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/Products/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetails/ProductsDetailsPage";

function ProductsApp() {
  // throw new Error("Products MFE test failure");

  return (
    <Routes>
      <Route index element={<ProductsPage />} />

      <Route
        path=":productId"
        element={<ProductsDetailsPage />}
      />
    </Routes>
  );
}

export default ProductsApp;