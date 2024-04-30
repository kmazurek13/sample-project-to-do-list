<template>
  <v-list>
    <v-list-subheader>You have completed 0 of 3 tasks.</v-list-subheader>
    <task-list-item task="Learn Vue 3" />
    <task-list-item task="Learn TypeScript" />
    <task-list-item task="Build Something Awesome" />
  </v-list>
</template>

<script setup lang="ts">

import TaskListItem from "@/components/TaskListItem.vue";
</script>

<style scoped>
</style>
