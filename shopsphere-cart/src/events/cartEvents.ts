import type { CartProduct } from "@/types/cart";

export const CART_ADD_EVENT = "cart:add";

export function subscribeToCartEvents(
  addItem: (product: CartProduct) => void
) {
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<CartProduct>;

    if (!customEvent.detail) return;

    addItem(customEvent.detail);
  };

  window.addEventListener(CART_ADD_EVENT, handler);

  return () => {
    window.removeEventListener(CART_ADD_EVENT, handler);
  };
}