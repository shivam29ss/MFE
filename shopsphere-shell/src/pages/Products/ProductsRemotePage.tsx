import React, { Suspense } from "react";

import RemoteErrorBoundary from "../../components/RemoteErrorBoundary";

const ProductsApp = React.lazy(
  () => import("products/ProductsApp")
);

function ProductsRemotePage() {
  return (
    <RemoteErrorBoundary>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductsApp />
      </Suspense>
    </RemoteErrorBoundary>
  );
}

export default ProductsRemotePage;