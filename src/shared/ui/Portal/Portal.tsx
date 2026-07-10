import { createPortal } from 'react-dom';
import type { PortalProps } from './types';

export function Portal({ children, container = document.body }: PortalProps) {
  return createPortal(children, container);
}
