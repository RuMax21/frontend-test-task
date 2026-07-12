import { useEffect } from 'react';
import type { UseTeamRemovalToastParams } from './types';
import { toast } from 'sonner';

export function useTeamRemovalToast({
  lastRemoved,
  onUndo,
  onClear,
}: UseTeamRemovalToastParams) {
  useEffect(() => {
    if (!lastRemoved) return;

    toast(`Участник "${lastRemoved.user.name}" удален`, {
      duration: 5000,
      action: {
        label: 'Отменить',
        onClick: onUndo,
      },
      onAutoClose: onClear,
    });
  }, [lastRemoved, onUndo, onClear]);
}
