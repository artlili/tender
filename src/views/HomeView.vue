<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SearchInput from '@/components/SearchInput.vue'

import { useItemsStore } from '@/stores/itemsStore'

const store = useItemsStore()

onMounted(() => {
  store.loadItems(2) // первая страница
})

const searchQuery = ref('')
</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" placeholder="Поиск..." />
    <div v-if="store.isLoading">Загрузка...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <ul v-else>
      <li v-for="item in store.items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
