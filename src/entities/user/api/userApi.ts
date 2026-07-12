import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../model';
import { fetchUsers } from './mockServer';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      queryFn: async () => ({ data: await fetchUsers() }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
