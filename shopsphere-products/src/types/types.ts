export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface ProductsAppProps {
  onAddToCart?: (product: Product) => void;
}