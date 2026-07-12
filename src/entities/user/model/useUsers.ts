import { useAppSelector } from '@/app/providers/store';
import { selectAllUsers } from './selectors';

export function useUsers() {
  const users = useAppSelector(selectAllUsers);

  return {
    users,
  };
}
