declare module "products/ProductsApp" {
  import type { ComponentType } from "react";
  import type { User } from "../../../shared/contracts/auth";

  interface ProductsAppProps {
    user?: User | null;
  }

  const ProductsApp: ComponentType<ProductsAppProps>;

  export default ProductsApp;
}