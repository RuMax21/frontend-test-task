export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  status: UserStatus;
  bio?: string;
}

export interface UserCardProps {
  user: User;
  onOpenDetail: (user: User) => void;
  onRemove: (id: string) => void;
}

export interface UserModalProps {
  user: User | null;
  onClose: () => void;
}
