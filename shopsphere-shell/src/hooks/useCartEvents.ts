import { useEffect } from "react";
import {
  ADD_TO_CART_EVENT,
  type Product,
} from "../../../shared/contracts/cart";

export function useCartEvents(
  onAddToCart: (product: Product) => void
) {
  useEffect(() => {
    const handleCartEvent = (event: Event) => {
      const customEvent =
        event as CustomEvent<Product>;

      onAddToCart(customEvent.detail);
    };

    window.addEventListener(
      ADD_TO_CART_EVENT,
      handleCartEvent
    );

    return () => {
      window.removeEventListener(
        ADD_TO_CART_EVENT,
        handleCartEvent
      );
    };
  }, [onAddToCart]);
}