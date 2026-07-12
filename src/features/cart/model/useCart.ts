import { useAppDispatch, useAppSelector } from '@/app/providers/store';
import { selectCartItems, selectCartTotal } from './selectors';
import {
  addToCart,
  changeQuantity,
  removeFromCart,
  undoRemoveFromCart,
  cleatLastRemoved,
} from './slice';
import type { Product } from '@/entities/product/model';

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  return {
    items,
    total,
    addToCart: (product: Product) => dispatch(addToCart(product)),
    changeQuantity: (id: number, quantity: number) =>
      dispatch(changeQuantity({ id, quantity })),
    removeFromCart: (id: number) => dispatch(removeFromCart({ id })),
    undoRemoveFromCart: () => dispatch(undoRemoveFromCart()),
    clearLastRemoved: () => dispatch(cleatLastRemoved()),
  };
}
