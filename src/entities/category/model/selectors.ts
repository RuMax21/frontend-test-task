import { createSelector } from '@reduxjs/toolkit';
import { categoryApi } from '../api';

export const selectCategoriesMap = createSelector(
  categoryApi.endpoints.getCategories.select(),
  result =>
    Object.fromEntries(
      (result.data ?? []).map(category => [category.id, category]),
    ),
);
