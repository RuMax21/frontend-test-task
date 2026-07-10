export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  closeOnEscape: boolean;
  closeOnOverlay: boolean;
}
