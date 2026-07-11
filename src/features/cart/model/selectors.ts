import type { RootState } from '@/app/providers/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCartItem = (state: RootState) => state.cart.items;
export const selectLastRemoved = (state: RootState) => state.cart.lastRemoved;

export const selectCartTotal = createSelector([selectCartItem], items =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0),
);
export const selectCartCount = createSelector([selectCartItem], items =>
  items.reduce((sum, item) => sum + item.quantity, 0),
);
