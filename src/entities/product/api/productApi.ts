import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../model';
import { fetchProducts } from './mockServer';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      queryFn: async () => ({ data: await fetchProducts() }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
