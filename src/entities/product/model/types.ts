export interface Product {
  id: number;
  title: string;
  price: number;
  categoryId: string;
}

export interface ProductCardProps {
  product: Product;
  categoryLabel: string;
  onAddToCart: (product: Product) => void;
}
