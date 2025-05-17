<template>
  <div class="search-input">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      class="search-input__field"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
.search-input {
  &__field {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border 0.2s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
}
</style>
