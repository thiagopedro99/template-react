// src/stores/appStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';
type Language = 'pt-BR' | 'en-US' | 'es-ES';

interface AppState {
  // UI State
  theme: Theme;
  language: Language;
  sidebarOpen: boolean;
  
  // Modal State
  modalOpen: boolean;
  modalContent: React.ReactNode | null;
  
  // Actions
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'pt-BR',
      sidebarOpen: false,
      modalOpen: false,
      modalContent: null,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setTheme: (theme) => set({ theme }),

      setLanguage: (language) => set({ language }),

      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      openModal: (content) => set({ modalOpen: true, modalContent: content }),

      closeModal: () => set({ modalOpen: false, modalContent: null }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
);