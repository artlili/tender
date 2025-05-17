<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :type="type" :class="['base-button', variant]" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  display: inline-block;
  color: $color-white;

  &:hover {
    opacity: 0.8;
  }

  &.primary {
    background: $color-primary;
  }

  &.secondary {
    background: $color-secondary;
  }

  &.danger {
    background: $color-danger;
  }
}
</style>
