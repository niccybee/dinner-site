<script>
import { useInfoStore } from "@/stores/info";
const { about } = useInfoStore();
</script>
<template>
  <main class="p-4">
    <h1>This is an about page</h1>
    <p>{{ about }}</p>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
