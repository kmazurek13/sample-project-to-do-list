<template>
  <v-dialog v-model="dialogOpen">
    <template #activator="{props}">
      <template v-if="buttonType === 'icon'">
        <v-btn v-bind="props" variant="plain" :icon="buttonText" :color="buttonColor" />
      </template>
      <template v-else>
        <v-btn v-bind="props" :color="buttonColor">{{ buttonText }}</v-btn>
      </template>
    </template>

    <template #default="{isActive}">
      <v-card>
        <v-card-title class="bg-accent">
          <template v-if="model.id">
            Modify Task
          </template>
          <template v-else>
            Add Task
          </template>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="model.description" label="Description" />
          <v-checkbox v-model="model.completed" label="Completed" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="saveTask">Save</v-btn>
          <v-btn color="error" @click="isActive.value = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import Task from "@/models/Task";
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const { tasks } = storeToRefs(useTodoStore());

const dialogOpen = ref(false);

defineProps<{ buttonText: string, buttonType?: string, buttonColor?: string }>();

const model = defineModel<Task>({ default: () => ({ id: undefined, description: "", completed: false }) });

const { addTask } = useTodoStore();


function saveTask() {
  if (!model.value.id) {
    model.value.id = tasks.value.length + 1;
    addTask({ id: model.value.id, description: model.value.description, completed: model.value.completed });
  }
  model.value = { id: undefined, description: "", completed: false };
  dialogOpen.value = false;
}

</script>

<style>

</style>