<template>
  <div v-if="store.isLoading">Загрузка...</div>
  <div v-else-if="store.selectedTender">
    <h1>{{ store.selectedTender.title }}</h1>
    <p>{{ store.selectedTender.description }}</p>
  </div>
  <div v-else>
    <p>Тендер не найден</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'

const route = useRoute()
const store = useItemsStore()

onMounted(() => {
  const id = Number(route.params.id)
  store.loadTenderById(id)
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
