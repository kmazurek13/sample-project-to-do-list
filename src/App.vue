<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/todo">To-do List</RouterLink>
    </nav>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
