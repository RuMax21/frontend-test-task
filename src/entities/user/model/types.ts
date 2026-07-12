export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  status: UserStatus;
  bio?: string;
}
