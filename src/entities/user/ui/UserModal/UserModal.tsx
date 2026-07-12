import { Badge, Button, Modal } from '@/shared/ui';
import type { UserModalProps } from '../../model';
import { getInitials } from '../../lib';
import styles from './UserModal.module.scss';

export function UserModal({ user, onClose }: UserModalProps) {
  return (
    <Modal open={Boolean(user)} onClose={onClose} closeOnEscape closeOnOverlay>
      {user && (
        <div className={styles.modal}>
          <header className={styles.modal__header}>
            <div className={styles.modal__avatar}>{getInitials(user.name)}</div>

            <div>
              <h2 className={styles.modal__title}>{user.name}</h2>

              <p className={styles.modal__role}>{user.role}</p>
            </div>
          </header>

          <Badge tone={user.status}>{user.status}</Badge>

          <div className={styles.modal__section}>
            <span className={styles.modal__label}>Email</span>
            <span className={styles.modal__value}>{user.email}</span>
          </div>

          {user.bio && (
            <div className={styles.modal__section}>
              <span className={styles.modal__label}>О пользователе</span>

              <p className={styles.modal__value}>{user.bio}</p>
            </div>
          )}

          <div className={styles.modal__actions}>
            <Button type="button" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
