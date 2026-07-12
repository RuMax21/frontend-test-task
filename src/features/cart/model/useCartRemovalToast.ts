import { useAppSelector } from '@/app/providers/store';
import { selectLastRemoved } from './selectors';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useCart } from './useCart';

export function useCartRemovalToast() {
  const lastRemoved = useAppSelector(selectLastRemoved);
  const { undoRemoveFromCart, clearLastRemoved } = useCart();

  useEffect(() => {
    if (!lastRemoved) return;

    toast(`Товар "${lastRemoved.item.title}" был удален`, {
      duration: 5000,
      action: {
        label: 'Отменить',
        onClick: undoRemoveFromCart,
      },
      onAutoClose: clearLastRemoved,
    });
  }, [lastRemoved, undoRemoveFromCart, clearLastRemoved]);
}
