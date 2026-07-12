import type { CreateUserFormValues } from './schema';

export const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export const DEFAULT_USER_FORM_VALUES: CreateUserFormValues = {
  name: '',
  role: '',
  email: '',
  status: 'inactive',
};
