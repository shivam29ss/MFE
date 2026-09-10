export interface CartProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}