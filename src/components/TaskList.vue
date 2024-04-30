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
import { computed } from "vue";
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const { tasks } = storeToRefs(useTodoStore());

const tasksCompleted = computed(() => tasks.value.filter((task) => task.completed).length);
const tasksTotal = computed(() => tasks.value.length);
</script>

<style scoped>
</style>
