import { useEffect, useState } from 'react';
import { useGetUsersQuery } from '@/entities/user/api';
import type { User } from '@/entities/user/model';
import { readFromStorage, writeToStorage } from '@/shared/lib';
import { TEAM_STORAGE_KEY } from './constants';
import type { CreateUserFormValues } from '@/features/user-form/model';
import type { RemovedUserEntry } from './types';

export function useTeamUsers() {
  const { data: fetchedUsers, isLoading: isFetching } = useGetUsersQuery();

  const [users, setUsers] = useState<User[] | null>(() =>
    readFromStorage<User[] | null>(TEAM_STORAGE_KEY, null),
  );
  const [lastRemoved, setLastRemoved] = useState<RemovedUserEntry | null>(null);

  useEffect(() => {
    if (users === null && fetchedUsers) {
      setUsers(fetchedUsers);
    }
  }, [users, fetchedUsers]);

  useEffect(() => {
    if (users !== null) {
      writeToStorage(TEAM_STORAGE_KEY, users);
    }
  }, [users]);

  const addUser = (input: CreateUserFormValues) => {
    const newUser: User = { id: crypto.randomUUID(), ...input };
    setUsers([newUser, ...(users ?? [])]);
  };

  const removeUser = (id: string) => {
    const list = users ?? [];
    const index = list.findIndex(user => user.id === id);
    if (index === -1) return;

    setLastRemoved({ user: list[index], index });
    setUsers(list.filter(user => user.id !== id));
  };

  const undoRemoveUser = () => {
    if (!lastRemoved) return;

    const next = [...(users ?? [])];
    next.splice(lastRemoved.index, 0, lastRemoved.user);
    setUsers(next);
    setLastRemoved(null);
  };

  const clearLastRemoved = () => setLastRemoved(null);

  return {
    users: users ?? [],
    isLoading: isFetching && users === null,
    lastRemoved,
    addUser,
    removeUser,
    undoRemoveUser,
    clearLastRemoved,
  };
}
