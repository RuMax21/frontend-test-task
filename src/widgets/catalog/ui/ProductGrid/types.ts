import type { Product } from '@/entities/product/model';

export interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}
