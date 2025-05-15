<script lang="ts" setup>
import type { Todo } from "@/types";
import axios from "axios";
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

const todos = ref<Todo[]>([]);

async function fetchTodos() {
  try {
    const response = await axios.get("https://dummyjson.com/todos?limit=3&skip=10");
    todos.value = response.data.todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchTodos();
</script>

<template>
  <div class="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Todo List</h1>
    <ul class="space-y-4">
      <TodoItem v-for="{ id, todo, completed, userId } in todos" :key="id" :id :todo :completed :userId />
    </ul>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
