import { Button } from '@/shared/ui';
import type { CartItemProps } from '../../model';
import styles from './CartItem.module.scss';

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.item__info}>
        <span className={styles.item__title}>{item.title}</span>
        <div className={styles.item__actions}>
          <Button
            className={styles.item__btn}
            type="button"
            aria-label="Уменьшить количество"
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <span className={styles.item__quantity}>{item.quantity}</span>
          <Button
            className={styles.item__btn}
            type="button"
            aria-label=" Увеличить количество"
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <div className={styles.item__aside}>
        <span className={styles.item__price}>{item.price * item.quantity}</span>
        <Button
          className={styles.item__remove}
          type="button"
          aria-label={`Удалить ${item.title} из корзины`}
          onClick={() => onRemove(item.id)}
        >
          x
        </Button>
      </div>
    </li>
  );
}
