import { UserCard } from '@/entities/user/ui/UserCard/UserCard';
import styles from './UsersList.module.scss';
import type { UsersListProps } from './types';

export function UsersList({
  onOpenDetails,
  onRemove,
  users,
  isLoading,
}: UsersListProps) {
  if (isLoading) {
    return <p className={styles.empty}>Загружаем команду…</p>;
  }

  if (users.length === 0)
    return (
      <p className={styles.empty}>
        В команде пока никого нет. Добавьте первого участника.
      </p>
    );

  return (
    <div className={styles.grid}>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onOpenDetail={onOpenDetails}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
