import { reactive } from "vue";
import { defineStore } from "pinia";
import type Task from "@/models/Task";

export const useTodoStore = defineStore("todo", () => {
  const tasks: Task[] = reactive([
    { id: 1, description: "Learn Vue 3", completed: false },
    { id: 2, description: "Learn TypeScript", completed: false },
    { id: 3, description: "Build Something Awesome", completed: false }]);

  function addTask(task: Task) {
    tasks.push(task);
  }

  function removeTask(task: Task) {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
  }

  return { tasks, addTask, removeTask };
});
