import { zodResolver } from '@hookform/resolvers/zod';
import {
  createUserSchema,
  DEFAULT_USER_FORM_VALUES,
  statusOptions,
  type CreateUserFormValues,
} from '../model';
import { useForm } from 'react-hook-form';
import { Button, FormField, FormSelect } from '@/shared/ui';
import styles from './UserForm.module.scss';
import type { UserFormProps } from '../model';

export function UserForm({ onCreate }: UserFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    mode: 'onBlur',
    defaultValues: DEFAULT_USER_FORM_VALUES,
  });

  const onSubmit = (values: CreateUserFormValues) => {
    onCreate(values);
    reset(DEFAULT_USER_FORM_VALUES);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.form__title}>Новый участник</h2>

      <FormField
        label="Имя"
        placeholder="Иванов Иван"
        error={errors.name}
        {...register('name')}
      />

      <FormField
        label="Email"
        placeholder="example@gmail.com"
        error={errors.email}
        {...register('email')}
      />

      <FormField
        label="Должность"
        placeholder="Frontend Developer"
        error={errors.role}
        {...register('role')}
      />

      <FormSelect
        options={statusOptions}
        label="Статус"
        error={errors.status}
        {...register('status')}
      />

      <Button type="submit" className={styles.form__submit}>
        Добавить
      </Button>
    </form>
  );
}
