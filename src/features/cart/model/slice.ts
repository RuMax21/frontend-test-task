import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from './types';
import type { Product } from '@/entities/product/model';

const initialState: CartState = {
  items: [],
  lastRemoved: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    changeQuantity(
      state,
      action: PayloadAction<Pick<CartItem, 'id' | 'quantity'>>,
    ) {
      const item = state.items.find(entry => entry.id === action.payload.id);
      if (item) item.quantity = Math.max(1, action.payload.quantity);
    },
    removeFromCart(state, action: PayloadAction<Pick<CartItem, 'id'>>) {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index === -1) return;
      const [removed] = state.items.splice(index, 1);
      state.lastRemoved = { item: removed, index };
    },
    undoRemoveFromCart(state) {
      if (!state.lastRemoved) return;
      const { item, index } = state.lastRemoved;
      state.items.splice(index, 0, item);
      state.lastRemoved = null;
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart, undoRemoveFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
