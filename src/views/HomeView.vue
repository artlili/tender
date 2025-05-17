<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SearchInput from '@/components/TenderSearch.vue'
import TenderList from '@/components/TenderList.vue'
import Paginator from '@/components/Paginator.vue'

import { useItemsStore } from '@/stores/itemsStore'
import { useRoute, useRouter } from 'vue-router'
import ContentWrapper from '@/components/common/ContentWrapper.vue'

const store = useItemsStore()
const route = useRoute()
const router = useRouter()
const searchQuery = ref('')

onMounted(() => {
  const initialPage = Number(route.query.page) || 1
  store.setPage(initialPage)
  store.loadAllItems()
})

const changePage = (newPage: number) => {
  store.setPage(newPage)

  router.replace({
    query: {
      ...route.query,
      page: String(newPage),
    },
  })
}
</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" placeholder="Поиск..." />
    <ContentWrapper
      :is-loading="store.isLoading"
      :has-data="store.filteredItems.length > 0"
      :emptyMessage="
        store.isFiltered ? 'Ничего не найдено по вашему запросу' : 'Список тендеров пуст'
      "
    >
      <TenderList :items="store.filteredItems" :page="store.currentPage" />
      <Paginator :page="store.currentPage" :totalPages="store.totalPages" @change="changePage" />
    </ContentWrapper>
  </div>
</template>
