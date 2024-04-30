<template>
  <v-card>
    <v-card-title class="bg-primary">Overview</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-subheader>You have completed 0 of 3 tasks.</v-list-subheader>
        <task-list-item task="Learn Vue 3" />
        <task-list-item task="Learn TypeScript" />
        <task-list-item task="Build Something Awesome" />
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/todo">Manage Tasks</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script setup lang="ts">

import TaskListItem from "@/components/TaskListItem.vue";
</script>

<style scoped>
</style>
