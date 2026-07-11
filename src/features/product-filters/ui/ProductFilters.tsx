import { FormField, FormSelect } from '@/shared/ui';
import type { ProductFiltersProps } from '../model/types';
import type { ChangeEvent } from 'react';
import styles from './ProductFilters.module.scss';

export function ProductFilters({
  category,
  search,
  categories,
  onCategoryChange,
  onSearchChange,
}: ProductFiltersProps) {
  const categoryOptions = [
    { value: 'all', label: 'Все категории' },
    ...categories.map(({ id, label }) => ({ value: id, label })),
  ];

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <FormField
        className={styles.filters__search}
        label=""
        placeholder="Поиск товара"
        value={search}
        onChange={handleSearch}
      />
      <FormSelect
        className={styles.filters__category}
        label=""
        options={categoryOptions}
        value={category}
        onChange={handleCategory}
      />
    </div>
  );
}
