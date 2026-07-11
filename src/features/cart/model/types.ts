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
