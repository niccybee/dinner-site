import { defineStore } from "pinia";

export const useInfoStore = defineStore({
  id: "info",
  state: () => ({
    about:
      "The Old Paray Inn is a modern twist on old English coastal pub traditions",
  }),
  getters: {},
  actions: {},
});
