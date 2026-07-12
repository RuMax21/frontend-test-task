import { useAppSelector } from '@/app/providers/store';
import { useGetProductsQuery } from '@/entities/product/api';
import { selectFilteredProducts } from '@/features/product-filters/model/selectors';
import styles from './Catalog.module.scss';
import { useGetCategoriesQuery } from '@/entities/category/api';
import { CartPanel } from '@/features/cart/ui/CartPanel';
import { useCart } from '@/features/cart/model';
import { ProductGrid } from '../ProductGrid';
import { ProductFilters } from '@/features/product-filters/ui';
import { useProductFilters } from '@/features/product-filters/model/useProductFilters';
import { useCartRemovalToast } from '@/features/cart/model';

export function Catalog() {
  useGetProductsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();

  const products = useAppSelector(selectFilteredProducts);
  const cart = useCart();
  const filters = useProductFilters();

  useCartRemovalToast();

  return (
    <section className={styles.catalog}>
      <ProductFilters
        category={filters.category}
        search={filters.search}
        categories={categories}
        onCategoryChange={filters.setCategory}
        onSearchChange={filters.setSearch}
      />
      <div className={styles.catalog__layout}>
        <ProductGrid products={products} onAddToCart={cart.addToCart} />
        <CartPanel
          items={cart.items}
          total={cart.total}
          onQuantityChange={cart.changeQuantity}
          onRemove={cart.removeFromCart}
        />
      </div>
    </section>
  );
}
