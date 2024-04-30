<script setup lang="ts">
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="bg-primary">Overview</v-card-title>
          <v-card-text>
            <task-list />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/todo">Manage Tasks</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
