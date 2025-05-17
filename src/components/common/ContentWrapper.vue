<script setup lang="ts">
import BaseLoader from '@/components/ui/BaseLoader.vue'

defineProps<{
  isLoading: boolean
  hasData: boolean
}>()
</script>
<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div v-else-if="hasData">
      <slot />
    </div>

    <div v-else>
      <p>Тендер не найден</p>
    </div>
  </div>
</template>
