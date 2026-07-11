export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface RemovedCartEntry {
  item: CartItem;
  index: number;
}

export interface CartState {
  items: CartItem[];
  lastRemoved: RemovedCartEntry | null;
}

export interface CartPanelProps {
  items: CartItem[];
  total: number;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export interface CartItemProps {
  item: CartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}
