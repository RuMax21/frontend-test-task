import { useEffect } from 'react';

interface UseEscapeProps {
  enable: boolean;
  onClose: () => void;
}

export function useEscape({ enable, onClose }: UseEscapeProps) {
  useEffect(() => {
    if (!enable) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [enable, onClose]);
}
