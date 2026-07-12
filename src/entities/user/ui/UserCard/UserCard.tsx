import { Badge, Button } from '@/shared/ui';
import type { UserCardProps } from '../../model';
import { getInitials } from '../../lib';
import styles from './UserCard.module.scss';

export function UserCard({ user, onOpenDetail, onRemove }: UserCardProps) {
  return (
    <article className={styles.card}>
      <Button
        className={styles.card__remove}
        type="button"
        onClick={() => onRemove(user.id)}
      >
        x
      </Button>
      <div className={styles.card__avatar}>{getInitials(user.name)}</div>
      <h3 className={styles.card__name}>{user.name}</h3>
      <p className={styles.card__role}>{user.role}</p>

      <div className={styles.card__details}>
        <Badge tone={user.status}>{user.status}</Badge>
        <Button type="button" size="sm" onClick={() => onOpenDetail(user)}>
          Подробнее
        </Button>
      </div>
    </article>
  );
}
