import { defineStore } from "pinia";

export const useCartrStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
    },
  },
});
