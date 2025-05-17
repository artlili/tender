<template>
  <div class="tender-details" v-if="tender">
    <h1>{{ tender.title }}</h1>
    <p>{{ tender.description }}</p>
  </div>
  <div v-else>Загрузка...</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'

const route = useRoute()
const store = useItemsStore()

const tender = computed(() => {
  return store.allItems.find((item) => item.id === Number(route.params.id))
})
</script>

<style scoped lang="scss">
.tender-details {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
