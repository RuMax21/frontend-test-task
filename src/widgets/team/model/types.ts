import type { User } from '@/entities/user/model';

export interface RemovedUserEntry {
  user: User;
  index: number;
}

export interface UseTeamRemovalToastParams {
  lastRemoved: RemovedUserEntry | null;
  onUndo: () => void;
  onClear: () => void;
}
