import { create } from "zustand";

/* ================= TYPES ================= */
interface DrawerState<T = unknown> {
  isOpen: boolean;
  data: T | null;
  title?: string;
  children?: React.ReactNode;
}

interface DrawerActions<T = unknown> {
  open: (title?: string, children?: React.ReactNode, data?: T) => void;
  close: () => void;
  setData: (data: T) => void;
}

/* ================= STORE ================= */
export const useDrawerStore = create<DrawerState & DrawerActions>((set) => ({
  /* STATE */
  isOpen: false,
  data: null,

  /* METHODS */
  open: (title, children, data) =>
    set({
      isOpen: true,
      data: data ?? null,
      title,
      children,
    }),

  close: () =>
    set({
      isOpen: false,
      data: null,
    }),

  setData: (data) =>
    set({
      data,
    }),
}));
