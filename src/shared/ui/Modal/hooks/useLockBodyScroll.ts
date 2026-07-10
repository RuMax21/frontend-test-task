import { useEffect } from 'react';

interface UseLockBodyScrollProps {
  enable: boolean;
}

export function useLockBodyScroll({ enable }: UseLockBodyScrollProps) {
  useEffect(() => {
    if (!enable) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [enable]);
}
