import React, {
  createContext,
  useContext,
  useState,
} from "react";
import type { CartContextValue } from "../types/products";
import type { Product, CartItem } from "../../../shared/contracts/cart";
const CART_STORAGE_KEY = "shopsphere:cart";

function getInitialCart(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(
      CART_STORAGE_KEY
    );

    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);

    return Array.isArray(parsedCart)
      ? parsedCart
      : [];
  } catch (error) {
    console.error(
      "Failed to restore cart:",
      error
    );

    return [];
  }
}
const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const updateCart = (
    updater: (items: CartItem[]) => CartItem[]
  ) => {
    setCartItems((currentItems) => {
      const updatedItems = updater(currentItems);

      try {
        localStorage.setItem(
          CART_STORAGE_KEY,
          JSON.stringify(updatedItems)
        );
      } catch (error) {
        console.error(
          "Failed to persist cart:",
          error
        );
      }

      return updatedItems;
    });
  };

  const addToCart = (product: Product) => {
    updateCart((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    updateCart((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const increaseQuantity = (productId: number) => {
    updateCart((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    updateCart((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    updateCart(() => []);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}