<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="bg-primary">
            <v-row>
              <v-col>Modify Tasks</v-col>
              <v-col align="right">
                <add-modify-task-dialog button-text="New Task" :model-value="undefined" />
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="tasks">
              <template #item.completed="{item}">
                <template v-if="item.completed">
                  <v-icon color="success">mdi-check</v-icon>
                </template>
                <template v-else>
                  <v-icon color="error">mdi-close</v-icon>
                </template>
              </template>
              <template #item.actions="{item}">
                <add-modify-task-dialog button-text="mdi-pencil" button-type="icon" button-color="warning"
                                        :model-value="item" :key="item.id" />
                <v-btn variant="plain" icon="mdi-delete" color="error" @click="deleteTask(item)" />
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import type Task from "@/models/Task";
import AddModifyTaskDialog from "@/components/AddModifyTaskDialog.vue";

const { tasks } = storeToRefs(useTodoStore());

const headers = [
  { title: "Description", value: "description" },
  { title: "Completed", value: "completed", align: "center" },
  { title: "Actions", key: "actions", align: "center" }
];

function newTask() {

}

const { removeTask } = useTodoStore();

function deleteTask(task: Task) {
  removeTask(task);
}
</script>

<style>
</style>
