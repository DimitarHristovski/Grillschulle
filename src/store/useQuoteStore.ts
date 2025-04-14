import { create } from "zustand";
import { MeatItem } from "../data/Data";

interface QuoteItem extends MeatItem {
  quantity: number;
}

interface QuoteStore {
  items: QuoteItem[];
  peopleCount: number;
  addItem: (item: MeatItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  setPeopleCount: (count: number) => void;
  clearQuote: () => void;
  getTotalPrice: () => number;
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  items: [],
  peopleCount: 15,
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },
  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items:
        quantity === 0
          ? state.items.filter((item) => item.id !== itemId)
          : state.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            ),
    }));
  },
  setPeopleCount: (count) => {
    set({ peopleCount: count });
  },
  clearQuote: () => {
    set({ items: [], peopleCount: 15 });
  },
  getTotalPrice: () => {
    const { items, peopleCount } = get();
    const basePrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Apply group discount
    let discount = 1;
    if (peopleCount >= 30) discount = 0.85;
    else if (peopleCount >= 20) discount = 0.9;
    else if (peopleCount >= 10) discount = 0.95;

    return basePrice * discount;
  },
}));
