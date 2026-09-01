import type { User } from "../../../shared/contracts/auth";
import type { Product } from "../../../shared/contracts/cart";

export interface ProductsAppProps {
    user?: User | null;
  onAddToCart?: (product: Product) => void;
}