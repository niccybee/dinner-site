<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavList from "./components/nav/NavList.vue";
import MenuMenu from "./components/menu/MenuMenu.vue";
</script>

<template>
  <div class="min-h-[90vh] justify-stretch">
    <div class="">
      <header class="flex">
        <div class="w-full">
          <NavList></NavList>
        </div>
      </header>

      <RouterView />
      <div class="w-full h-16"></div>
      <footer>
        <MenuMenu></MenuMenu>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  padding: 1em 0.5rem 0.5rem 0;
}
/* debug */
/* * {
  box-sizing: border-box;
  outline: solid green;
  background: rgba(0, 128, 0, 0.15);
} */
/* end debug */
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center stretch;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
