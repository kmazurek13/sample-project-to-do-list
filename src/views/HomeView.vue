<script setup lang="ts">
</script>

<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card max-width="800px">
          <v-card-title class="bg-primary">Overview</v-card-title>
          <v-card-text>
            <span class="text-subtitle-1">You have completed 0 of 3 tasks.</span>
            <v-list density="compact" align="left">
              <v-list-item title="Learn Vue 3" />
              <v-list-item title="Learn TypeScript" />
              <v-list-item title="Build something awesome" />
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/todo">Manage Tasks</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
