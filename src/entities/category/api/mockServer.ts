import { delay } from '@/shared/lib';
import type { Category } from '../model';

const mockCategories: Category[] = [
  { id: 'electronics', label: 'Электроника' },
  { id: 'stationery', label: 'Канцелярия' },
  { id: 'home', label: 'Дом' },
  { id: 'travel', label: 'Путешествия' },
];

export async function fetchCategories(): Promise<Category[]> {
  await delay(300);
  return mockCategories;
}
