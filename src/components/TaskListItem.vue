<template>
  <v-list-item>
    <template #prepend>
      <v-list-item-action>
        <v-checkbox-btn :model-value="completed" @update:model-value="taskStatusChange" />
      </v-list-item-action>
    </template>
    <v-list-item-title>{{ description }}</v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">

defineProps<{ description: string, completed: boolean }>();
const emit = defineEmits();
const completed = defineModel<boolean>("completed", { required: true, default: false });

function taskStatusChange(event: boolean) {
  emit("update:completed", event);
}
</script>

<style scoped>
</style>