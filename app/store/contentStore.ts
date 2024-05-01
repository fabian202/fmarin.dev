import { create } from "zustand";

interface ContentState {
  content: string[]
  setContent: (content: string[]) => void
}

export const useContentStore = create<ContentState>((set) => ({
  content: [],
  setContent: (content: string[]) => set({ content }),
}))
