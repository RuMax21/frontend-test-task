import { delay } from '@/shared/lib';
import type { User } from '../model/types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Анна Смирнова',
    role: 'Product Designer',
    email: 'anna@example.com',
    status: 'active',
    bio: 'Отвечает за интерфейсы продукта. Помогает команде с дизайн-системой.',
  },
  {
    id: 'u2',
    name: 'Илья Кузнецов',
    role: 'Frontend Developer',
    email: 'ilya@example.com',
    status: 'active',
    bio: 'Собирает интерфейсы на React и следит за качеством кода на фронтенде.',
  },
  {
    id: 'u3',
    name: 'Мария Волкова',
    role: 'QA Engineer',
    email: 'maria@example.com',
    status: 'inactive',
    bio: 'Пишет тест-кейсы и следит за регрессиями перед релизами.',
  },
  {
    id: 'u4',
    name: 'Олег Петров',
    role: 'Project Manager',
    email: 'oleg@example.com',
    status: 'active',
    bio: 'Планирует спринты и держит связь с заказчиком.',
  },
  {
    id: 'u5',
    name: 'София Егорова',
    role: 'Backend Developer',
    email: 'sofia@example.com',
    status: 'inactive',
    bio: 'Разрабатывает API и отвечает за инфраструктуру бэкенда.',
  },
  {
    id: 'u6',
    name: 'Максим Орлов',
    role: 'Business Analyst',
    email: 'maxim@example.com',
    status: 'active',
    bio: 'Собирает требования и формулирует задачи для команды.',
  },
];

export async function fetchUsers(): Promise<User[]> {
  await delay(300);
  return mockUsers;
}
