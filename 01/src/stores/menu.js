import { defineStore } from "pinia";

export const useMenuStore = defineStore({
  id: "menu",
  state: () => ({
    categories: [],
    menu: [
      {
        id: 0,
        item: "Fish & Chips",
        desc: "A delicious meal of xyz",
        price: "$50.99",
        allergens: ["fish", "nuts", "garlic"],
        image: "https://picsum.photos/50/50",
        category: ["main"],
      },
      {
        id: 1,
        item: "Finger Lime Merange",
        desc: "A delicious meal of xyz",
        price: "$50.99",
        allergens: ["poop", "lime"],
        image: "https://picsum.photos/50/50",
        category: ["dessert"],
      },
      {
        id: 2,
        item: "Drinks",
        desc: "A delicious meal of xyz",
        price: "$50.99",
        allergens: ["poop", "lime"],
        image: "https://picsum.photos/50/50",
        category: ["drinks"],
      },
    ],
  }),
  getters: {},
  actions: {},
});
