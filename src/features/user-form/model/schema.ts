import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  role: z.string().min(1, 'Укажите должность'),
  email: z.email('Email указан неверно'),
  status: z.enum(['active', 'inactive']),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;
