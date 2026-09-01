import { Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/Products/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetails/ProductsDetailsPage";
import { ProductsAppProps } from "./types/types";


function ProductsApp({ user }: ProductsAppProps) {
  // throw new Error("Products MFE test failure");
 console.log("User:", user);
  return (
    <Routes>
      {/* <Route index element={<ProductsPage onAddToCart={onAddToCart} />} />-- communication through props
       */}
      <Route index element={<ProductsPage/>} />

      <Route
        path=":productId"
        element={<ProductsDetailsPage />}
      />
    </Routes>
  );
}

export default ProductsApp;