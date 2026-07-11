import type { RootState } from '@/app/providers/store/index';
import { productApi } from '@/entities/product/api';
import { createSelector } from '@reduxjs/toolkit';

const selectProducts = productApi.endpoints.getProducts.select();
export const selectAllProducts = createSelector(
  [selectProducts],
  result => result.data ?? [],
);

export const selectSearch = (state: RootState) => state.products.search;
export const selectCategory = (state: RootState) => state.products.category;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSearch, selectCategory],
  (items, search, category) => {
    const clearSearch = search.trim().toLowerCase();

    return items.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(clearSearch);
      const matchesCategory =
        category === 'all' || product.categoryId === category;
      return matchesSearch && matchesCategory;
    });
  },
);
