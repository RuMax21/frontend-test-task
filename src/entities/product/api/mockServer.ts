import { delay } from '@/shared/lib';
import type { Product } from '../model/types';

const mockProducts: Product[] = [
  { id: 1, title: 'Keyboard', price: 1200, categoryId: 'electronics' },
  { id: 2, title: 'Mouse', price: 800, categoryId: 'electronics' },
  { id: 3, title: 'Monitor 27"', price: 15900, categoryId: 'electronics' },
  { id: 4, title: 'USB-C Hub', price: 2400, categoryId: 'electronics' },
  { id: 5, title: 'Notebook', price: 300, categoryId: 'stationery' },
  { id: 6, title: 'Pen', price: 100, categoryId: 'stationery' },
  { id: 7, title: 'Sticky Notes', price: 150, categoryId: 'stationery' },
  { id: 8, title: 'Highlighter Set', price: 420, categoryId: 'stationery' },
  { id: 9, title: 'Desk Lamp', price: 1600, categoryId: 'home' },
  { id: 10, title: 'Ceramic Mug', price: 550, categoryId: 'home' },
  { id: 11, title: 'Backpack', price: 2900, categoryId: 'travel' },
  { id: 12, title: 'Travel Pillow', price: 890, categoryId: 'travel' },
];

export async function fetchProducts(): Promise<Product[]> {
  await delay(300);
  return mockProducts;
}
