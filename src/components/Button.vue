<template>
  <button :class="buttonClasses" :disabled="disabled" @click="emit('button:click')">
    <slot />
    <slot name="icon" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";


interface ButtonProps {
  /**
   * The variant of the component
   */
  variant?: "primary" | "secondary" | "danger";
  /** Disable or Enables the button */
  disabled?: boolean;
}

interface ButtonEvents {
  /** Fires a click event */
  (e: "button:click"): void;
}

const emit = defineEmits<ButtonEvents>();

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  disabled: false,
});

const buttonClasses = computed(() => `${baseClasses} ${props.disabled && 'opacity-60 cursor-not-allowed'} ${variantClasses[props.variant]}`);

const baseClasses = "px-4 py-2 rounded font-semibold focus:outline-none transition-colors";

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};
</script>
