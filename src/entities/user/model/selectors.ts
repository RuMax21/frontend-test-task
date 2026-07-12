import { createSelector } from '@reduxjs/toolkit';
import { userApi } from '../api';

export const selectUsers = userApi.endpoints.getUsers.select();
export const selectAllUsers = createSelector(
  [selectUsers],
  result => result.data ?? [],
);
