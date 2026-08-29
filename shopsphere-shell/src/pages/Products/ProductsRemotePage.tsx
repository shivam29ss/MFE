import React, { Suspense } from "react";

import RemoteErrorBoundary from "../../components/RemoteErrorBoundary";
import type { Product } from "../../types/products";
import { useCartEvents } from "../../hooks/useCartEvents";
const ProductsApp = React.lazy(
  () => import("products/ProductsApp")
);
function handleAddToCart(product: Product) {
  console.log("Product added to cart:", product);
}
function ProductsRemotePage() {
  return (
    <RemoteErrorBoundary>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductsApp onAddToCart={handleAddToCart} />
      </Suspense>
    </RemoteErrorBoundary>
  );
}

export default ProductsRemotePage;