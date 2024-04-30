import { reactive } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  const tasks = reactive([
    { id: 1, description: "Learn Vue 3", completed: false },
    { id: 2, description: "Learn TypeScript", completed: false },
    { id: 3, description: "Build Something Awesome", completed: false }]);

  return { tasks };
});
