import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProductFilterState } from './types';

const initialState: ProductFilterState = {
  search: '',
  category: 'all',
};

const productsSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCategory(state, action: PayloadAction<string | 'all'>) {
      state.category = action.payload;
    },
    hydrateFilters(state, action: PayloadAction<ProductFilterState>) {
      state.search = action.payload.search;
      state.category = action.payload.category;
    },
  },
});

export const { setSearch, setCategory, hydrateFilters } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
