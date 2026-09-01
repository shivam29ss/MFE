import React, { Suspense, useCallback } from "react";

import RemoteErrorBoundary from "../../components/RemoteErrorBoundary";
import { useCartEvents } from "../../hooks/useCartEvents";
import { useCart } from "../../state/CartContext";
import { Product } from "../../../../shared/contracts/cart";
import { useAuth } from "../../auth/AuthContext";
const ProductsApp = React.lazy(
  () => import("products/ProductsApp")
);
function ProductsRemotePage() {
  //   const handleAddToCart = useCallback((product: Product) => {
  //   console.log("Shell received Add to Cart event:", product);
  // }, []);
const { addToCart } = useCart();
const { user } = useAuth();

const handleAddToCart = useCallback(
    (product: Product) => {
      addToCart(product);
    },
    [addToCart]
  );

  // useCartEvents(handleAddToCart);
  useCartEvents(handleAddToCart);

  return (
    <RemoteErrorBoundary>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductsApp user={user} />
      </Suspense>
    </RemoteErrorBoundary>
  );
}

export default ProductsRemotePage;