import { Badge, Button } from '@/shared/ui';
import type { ProductCardProps } from '../../model';
import styles from './ProductCard.module.scss';

export function ProductCard({
  product,
  categoryLabel,
  onAddToCart,
}: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.card__body}>
        <div className={styles.card__thumb} />
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{product.title}</h3>
          <Badge tone="neutral">{categoryLabel}</Badge>
        </div>
      </div>
      <div className={styles.card__footer}>
        <span className={styles.card__price}>{product.price}</span>
        <Button onClick={() => onAddToCart(product)}>В корзину</Button>
      </div>
    </article>
  );
}
