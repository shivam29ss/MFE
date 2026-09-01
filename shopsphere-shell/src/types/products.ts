import type { Product, CartItem } from "../../../shared/contracts/cart";

export interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}
