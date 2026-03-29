import type React from "react";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  data: unknown;
  title?: string;
  children?: React.ReactNode;
}

interface ModalActions {
  open: (params?: {
    title?: string;
    children?: React.ReactNode;
    data?: unknown;
  }) => void;
  close: () => void;
  setData: (data: unknown) => void;
}

export const useModalStore = create<ModalState & ModalActions>((set) => ({
  isOpen: false,
  data: null,
  title: "",
  children: null,

  open: (params) =>
    set({
      isOpen: true,
      title: params?.title,
      children: params?.children,
      data: params?.data ?? null,
    }),

  close: () =>
    set({
      isOpen: false,
      data: null,
      title: "",
      children: null,
    }),

  setData: (data) => set({ data }),
}));
