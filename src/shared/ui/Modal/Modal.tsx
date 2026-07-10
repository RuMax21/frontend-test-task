import { Portal } from '../Portal';
import { useEscape, useLockBodyScroll } from './hooks';
import type { ModalProps } from './types';
import styles from './Modal.module.scss';

export function Modal({
  children,
  open,
  onClose,
  closeOnEscape,
  closeOnOverlay,
}: ModalProps) {
  useLockBodyScroll({ enable: open });
  useEscape({ enable: open && closeOnEscape, onClose });

  if (!open) return null;

  return (
    <Portal>
      <div
        className={`${styles.overlay}`}
        onMouseDown={() => closeOnOverlay && onClose()}
      >
        <div
          className={`${styles.modal}`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onMouseDown={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
