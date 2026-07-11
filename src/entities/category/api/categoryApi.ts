import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query';
import { fetchCategories } from './mockServer';
import type { Category } from '../model';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      queryFn: async () => ({ data: await fetchCategories() }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
