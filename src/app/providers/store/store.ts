import { categoryApi } from '@/entities/category/api';
import { productApi } from '@/entities/product/api';
import { productsReducer } from '@/features/product-filters/model';
import { cartReducer, type CartItem } from '@/features/cart/model';
import { CART_STORAGE_KEY } from '@/features/cart/model/constants';
import { cartListener } from '@/features/cart/model/listener';
import { readFromStorage } from '@/shared/lib';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  preloadedState: {
    cart: {
      items: readFromStorage<CartItem[]>(CART_STORAGE_KEY, []),
      lastRemoved: null,
    },
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(cartListener.middleware)
      .concat(productApi.middleware, categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
