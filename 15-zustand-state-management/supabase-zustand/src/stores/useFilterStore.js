import { create } from "zustand";

export const useFilterStore = create((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));