<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SearchInput from '@/components/SearchInput.vue'
import TenderList from '@/components/TenderList.vue'
import Paginator from '@/components/Paginator.vue'

import { useItemsStore } from '@/stores/itemsStore'

const store = useItemsStore()
const searchQuery = ref('')

onMounted(() => {
  store.loadAllItems() // первая страница
})

const changePage = (page: number) => {
  store.setPage(page)
}
</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" placeholder="Поиск..." />
    <div v-if="store.isLoading">Загрузка...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <div v-else>
      <TenderList :items="store.paginatedItems" :page="store.currentPage" />
      <Paginator :page="store.currentPage" :totalPages="store.totalPages" @change="changePage" />
    </div>
  </div>
</template>
