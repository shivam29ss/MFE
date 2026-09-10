import { defineStore } from "pinia";
import type { Product, CartItem } from "../../../shared/contracts/cart";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce(
        (total, item) => total + item.quantity,
        0
      ),

    subtotal: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },

  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeItem(productId: number) {
      this.items = this.items.filter(
        (item) => item.id !== productId
      );
    },

    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find(
        (item) => item.id === productId
      );

      if (!item) return;

      if (quantity <= 0) {
        this.removeItem(productId);
        return;
      }

      item.quantity = quantity;
    },

    clearCart() {
      this.items = [];
    },
  },
});