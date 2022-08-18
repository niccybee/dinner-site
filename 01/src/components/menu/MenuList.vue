<script setup>
import MenuItem from "./MenuItem.vue";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useMenuStore } from "@/stores/menu";
const { menu, categories } = useMenuStore();
const getCategories = computed(() => {
  const cs = [];
  for (let m = 0; m < menu.length; m++) {
    console.log(menu[m]);
    cs.push(m);
    return cs;
  }
});
</script>
<template>
  <div class="flex justify-between m-2">
    <h2>Menu</h2>
    {{ getCategories }}
    <select
      class="select text-white text-center bg-gray-900 outline-1 rounded-md appearance-none cursor-pointer"
      placeholder="Category"
    >
      <option disabled>Category</option>
      <option v-for="c in getCategories">{{ c }}</option>
    </select>
  </div>
  <div class="w-full">
    <MenuItem v-for="item in menu" class="max-w-full">
      <a href="#" class="">
        <div class="w-full flex align-center justify-stretch">
          <div class="w-[50px] h-[50px] mr-4 ring-1 rounded-full bg-gray-600">
            <img :src="item.image" class="rounded-full w-full h-full" alt="" />
          </div>
          <div>
            <p>{{ item.item }}</p>
            <p class="text-grey-100">description</p>
          </div>
        </div>
      </a>
    </MenuItem>
  </div>
</template>
<style scoped>
.select {
  display: grid;
}
select:after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: whitesmoke;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
</style>
