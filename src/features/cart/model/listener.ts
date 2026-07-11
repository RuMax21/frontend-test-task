import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  addToCart,
  changeQuantity,
  removeFromCart,
  undoRemoveFromCart,
} from './slice';
import { CART_STORAGE_KEY } from './constants';
import type { CartState } from './types';
import { writeToStorage } from '@/shared/lib';

export const cartListener = createListenerMiddleware<{ cart: CartState }>();

cartListener.startListening({
  matcher: isAnyOf(
    addToCart,
    changeQuantity,
    removeFromCart,
    undoRemoveFromCart,
  ),
  effect: (_action, listenerApi) => {
    const { items } = listenerApi.getState().cart;
    writeToStorage(CART_STORAGE_KEY, items);
  },
});
