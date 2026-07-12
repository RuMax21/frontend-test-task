import type { User } from '@/entities/user/model';

export interface UsersListProps {
  users: User[];
  isLoading?: boolean;
  onOpenDetails: (user: User) => void;
  onRemove: (id: string) => void;
}
