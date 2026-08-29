declare module "products/ProductsApp" {
  import type { ComponentType } from "react";
  import type { Product } from "./types/Product";

  interface ProductsAppProps {
    onAddToCart?: (product: Product) => void;
  }

  const ProductsApp: ComponentType<ProductsAppProps>;

  export default ProductsApp;
}