import { ProductCard } from '@/entities/product/ui/ProductCard';
import type { ProductGridProps } from './types';
import { useAppSelector } from '@/app/providers/store';
import { selectCategoriesMap } from '@/entities/category/model/selectors';
import styles from './ProductGrid.module.scss';

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const categoriesMap = useAppSelector(selectCategoriesMap);
  if (products.length === 0) return <div>Ничего не найдено.</div>;

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          categoryLabel={categoriesMap[product.categoryId]?.label || ''}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
