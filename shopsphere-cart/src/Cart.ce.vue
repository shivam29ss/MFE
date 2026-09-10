<script setup lang="ts">
import type { CartItem } from "../../../shared/contracts/cart";

const props = withDefaults(
  defineProps<{
    cartItems?: CartItem[];
  }>(),
  {
    cartItems: () => [],
  }
);

const emit = defineEmits<{
  (e: "cart-remove", productId: number): void;
  (e: "cart-increase", productId: number): void;
  (e: "cart-decrease", productId: number): void;
  (e: "cart-clear"): void;
}>();
</script>

<template>
  <div class="cart-container">
    <div class="cart-header">
      <h2>Shopping Cart</h2>

      <span v-if="props.cartItems.length > 0" class="item-count">
        {{
          props.cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )
        }}
        items
      </span>
    </div>

    <!-- Empty cart -->
    <div
      v-if="props.cartItems.length === 0"
      class="empty-cart"
    >
      <div class="empty-icon">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Add some products to get started.</p>
    </div>

    <!-- Cart items -->
    <div v-else class="cart-content">
      <div
        v-for="item in props.cartItems"
        :key="item.id"
        class="cart-item"
      >
        <div class="product-info">
          <h3>{{ item.name }}</h3>

          <p class="product-price">
            ₹{{ item.price.toLocaleString("en-IN") }}
          </p>
        </div>

        <div class="cart-actions">
          <div class="quantity-control">
            <button
              type="button"
              class="quantity-button"
              @click="emit('cart-decrease', item.id)"
            >
              −
            </button>

            <span class="quantity">
              {{ item.quantity }}
            </span>

            <button
              type="button"
              class="quantity-button"
              @click="emit('cart-increase', item.id)"
            >
              +
            </button>
          </div>

          <button
            type="button"
            class="remove-button"
            @click="emit('cart-remove', item.id)"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Summary -->
      <div class="cart-summary">
        <div class="summary-row">
          <span>Total Items</span>

          <strong>
            {{
              props.cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )
            }}
          </strong>
        </div>

        <div class="summary-row total-row">
          <span>Subtotal</span>

          <strong>
            ₹{{
              props.cartItems
                .reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )
                .toLocaleString("en-IN")
            }}
          </strong>
        </div>

        <button
          type="button"
          class="clear-button"
          @click="emit('cart-clear')"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 32px auto;
  padding: 24px;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  color: #1f2937;
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.cart-header h2 {
  margin: 0;
  font-size: 28px;
}

.item-count {
  font-size: 14px;
  color: #6b7280;
}

.empty-cart {
  padding: 60px 20px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #f9fafb;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.empty-cart h3 {
  margin: 0 0 8px;
  font-size: 20px;
}

.empty-cart p {
  margin: 0;
  color: #6b7280;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
}

.product-info h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.product-price {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
}

.cart-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity-button {
  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #ffffff;
  font-size: 18px;
  cursor: pointer;
}

.quantity-button:hover {
  background: #f3f4f6;
}

.quantity {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
}

.remove-button {
  border: none;
  background: transparent;
  color: #dc2626;
  cursor: pointer;
  font-weight: 500;
}

.remove-button:hover {
  text-decoration: underline;
}

.cart-summary {
  margin-top: 16px;
  padding: 24px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #4b5563;
}

.total-row {
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid #e5e7eb;
  color: #111827;
  font-size: 20px;
}

.clear-button {
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #dc2626;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.clear-button:hover {
  background: #b91c1c;
}

@media (max-width: 600px) {
  .cart-container {
    margin: 16px;
    padding: 12px;
  }

  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>