import type { Category } from '@/entities/category/model';

export interface ProductFilterState {
  search: string;
  category: string | 'all';
}

export interface ProductFiltersProps {
  search: string;
  category: string;
  categories: Category[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}
