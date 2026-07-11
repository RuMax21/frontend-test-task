import type { CartPanelProps } from '../../model';
import { CartItem } from '../CartItem';
import styles from './CartPanel.module.scss';

export function CartPanel({
  items,
  total,
  onQuantityChange,
  onRemove,
}: CartPanelProps) {
  return (
    <aside className={styles.panel}>
      <h2 className={styles.panel__title}>Корзина</h2>

      {items.length === 0 ? (
        <p className={styles.panel__empty}>
          Пока пусто. Добавьте товар из каталога.
        </p>
      ) : (
        <ul className={styles.panel__list}>
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}

      <div className={styles.panel__summary}>
        <span>Итого</span>
        <span className={styles.panel__total}>{total}</span>
      </div>
    </aside>
  );
}
