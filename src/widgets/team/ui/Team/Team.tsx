import { UserForm } from '@/features/user-form/ui';
import { UsersList } from '../UsersList';
import styles from './Team.module.scss';
import { useState } from 'react';
import type { User } from '@/entities/user/model';
import { UserModal } from '@/entities/user/ui/UserModal';
import { useTeamRemovalToast } from '../../model/useTeamRemovalToast';
import { useTeamUsers } from '../../model/useTeamUsers';

export function Team() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const {
    users,
    isLoading,
    lastRemoved,
    addUser,
    removeUser,
    undoRemoveUser,
    clearLastRemoved,
  } = useTeamUsers();

  useTeamRemovalToast({
    lastRemoved,
    onUndo: undoRemoveUser,
    onClear: clearLastRemoved,
  });

  return (
    <section className={styles.team}>
      <div className={styles.team__layout}>
        <UserForm onCreate={addUser} />
        <UsersList
          users={users}
          isLoading={isLoading}
          onOpenDetails={setSelectedUser}
          onRemove={removeUser}
        />
      </div>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </section>
  );
}
