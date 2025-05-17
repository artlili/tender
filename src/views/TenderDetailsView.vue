<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'
import BaseButton from '@/components/ui/BaseButton.vue'
import ContentWrapper from '@/components/common/ContentWrapper.vue'

const route = useRoute()
const router = useRouter()
const store = useItemsStore()

onMounted(() => {
  const id = Number(route.params.id)
  store.loadTenderById(id)
})

function goBack() {
  router.push({ path: '/', query: { page: store.currentPage.toString() } })
}
</script>

<template>
  <div class="container">
    <BaseButton variant="primary" @click="goBack">Назад</BaseButton>
    <ContentWrapper :isLoading="store.isLoading" :hasData="!!store.selectedTender">
      <div class="tender-details">
        <h1>{{ store.selectedTender?.title }}</h1>
        <p>{{ store.selectedTender?.description }}</p>
      </div>
    </ContentWrapper>
  </div>
</template>

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
