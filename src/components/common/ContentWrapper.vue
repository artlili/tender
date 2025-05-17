<script setup lang="ts">
defineProps<{
  isLoading: boolean
  hasData: boolean
}>()
</script>
<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>

    <div v-else-if="hasData">
      <slot />
    </div>

    <div v-else>
      <p>Тендер не найден</p>
    </div>
  </div>
</template>
