<template>
  <div class="paginator">
    <button :disabled="page <= 1" @click="$emit('change', page - 1)">‹</button>

    <button
      v-for="n in totalPages"
      :key="n"
      @click="$emit('change', n)"
      :class="{ active: page === n }"
    >
      {{ n }}
    </button>

    <button :disabled="page >= totalPages" @click="$emit('change', page + 1)">›</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: number
  totalPages: number
}>()

defineEmits<{
  (e: 'change', newPage: number): void
}>()
</script>

<style scoped lang="scss">
.paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  button {
    width: 36px;
    height: 36px;
    border: 1px solid $color-border;
    border-radius: 50%;
    background: $color-white;
    color: $color-muted;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      border-color: $color-primary;
      color: $color-primary;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &.active {
      background: $color-primary;
      color: $color-white;
      font-weight: bold;
      border-color: $color-primary;

      &:hover {
        background: $color-primary;
        color: $color-white;
        border-color: $color-primary;
      }
    }
  }
}
</style>
