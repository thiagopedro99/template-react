// src/stores/dataStore.ts (Exemplo genérico)
import { create } from 'zustand';

// Exemplo: Store para gerenciar lista de items
interface Item {
  id: string;
  title: string;
  completed: boolean;
}

interface DataState {
  items: Item[];
  loading: boolean;
  error: string | null;
  
  // Actions
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  updateItem: (id: string, data: Partial<Item>) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearItems: () => void;
}

export const useDataStore = create<DataState>((set) => ({
  items: [],
  loading: false,
  error: null,

  setItems: (items) => set({ items }),

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  updateItem: (id, data) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  clearItems: () => set({ items: [] }),
}));
