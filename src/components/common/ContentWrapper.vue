<script setup lang="ts">
import BaseLoader from '@/components/ui/BaseLoader.vue'

defineProps<{
  isLoading: boolean
  hasData: boolean
  emptyMessage?: string
}>()
</script>

<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div v-else-if="hasData">
      <slot />
    </div>

    <div v-else>
      <p class="empty-message">{{ emptyMessage || 'Данные не найдены' }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty-message {
  color: $color-muted;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 0.5rem;
}
</style>
