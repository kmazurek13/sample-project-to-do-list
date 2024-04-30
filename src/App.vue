<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>Todo List</v-app-bar-title>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/todo">To-do</v-btn>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
