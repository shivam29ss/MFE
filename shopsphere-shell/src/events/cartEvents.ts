import type { Product } from "../../../shared/contracts/cart";

export const ADD_TO_CART_EVENT = "shopsphere:add-to-cart";

export function dispatchAddToCart(product: Product) {
  window.dispatchEvent(
    new CustomEvent(ADD_TO_CART_EVENT, {
      detail: product,
    })
  );
}