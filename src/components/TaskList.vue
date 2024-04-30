<template>
  <v-card>
    <v-card-title class="bg-primary">Overview</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-subheader>You have completed {{ tasksCompleted }} of {{ tasksTotal }} tasks.</v-list-subheader>
        <task-list-item v-for="task in tasks" :key="task.description" :description="task.description"
                        v-model:completed="task.completed" />
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/todo">Manage Tasks</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script setup lang="ts">
import TaskListItem from "@/components/TaskListItem.vue";
import type Task from "@/models/Task";
import { computed, reactive } from "vue";

const tasks: Task[] = reactive([
  { id: 1, description: "Learn Vue 3", completed: false },
  { id: 2, description: "Learn TypeScript", completed: false },
  { id: 3, description: "Build Something Awesome", completed: false }]);

const tasksCompleted = computed(() => tasks.filter((task) => task.completed).length);
const tasksTotal = computed(() => tasks.length);
</script>

<style scoped>
</style>
