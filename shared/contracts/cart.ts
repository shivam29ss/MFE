export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AddToCartDetail {
  product: Product;
}

export const ADD_TO_CART_EVENT =
  "shopsphere:add-to-cart" as const;