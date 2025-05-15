<script lang="ts" setup>
import type { Todo } from "@/types";

withDefaults(defineProps<Todo>(), {
  id: 11,
  todo: "Sample Todo Item",
  completed: false,
  userId: 104,
});
</script>

<template>
  <li class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg shadow-sm">
    <span :class="['text-lg', completed ? 'line-through text-gray-400' : 'text-gray-700']">
      {{ todo }}
    </span>
    <span
      class="ml-4 px-2 py-1 rounded text-xs font-semibold"
      :class="completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'"
    >
      {{ completed ? "Done" : "Pending" }}
    </span>
  </li>
</template>
