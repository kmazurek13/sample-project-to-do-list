<template>
  <v-list-item>
    <template #prepend>
      <v-list-item-action>
        <v-checkbox-btn />
      </v-list-item-action>
    </template>
    <v-list-item-title>{{ task }}</v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{ task: string }>();
</script>

<style scoped>
</style>