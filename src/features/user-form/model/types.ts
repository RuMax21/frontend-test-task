import type { CreateUserFormValues } from './schema';

export interface UserFormProps {
  onCreate: (values: CreateUserFormValues) => void;
}
