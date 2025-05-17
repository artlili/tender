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
        <p class="description">{{ store.selectedTender?.description }}</p>

        <ul class="meta">
          <li>
            <strong>Сумма:</strong>
            {{ store.selectedTender?.awarded_value }} {{ store.selectedTender?.awarded_currency }}
          </li>
          <li><strong>Крайний срок:</strong> {{ store.selectedTender?.deadline_date }}</li>
          <li><strong>Место:</strong> {{ store.selectedTender?.place }}</li>
        </ul>
      </div>
    </ContentWrapper>
  </div>
</template>

<style scoped lang="scss">
.tender-details {
  max-width: 800px;
  margin: 2rem auto;

  .description {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .meta {
    list-style: none;
    padding: 0;
    margin-top: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;

      strong {
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
