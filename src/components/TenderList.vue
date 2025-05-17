<script setup lang="ts">
import TenderCard from '@/components/TenderCard.vue'
import type { Item } from '@/types'

defineProps<{
  items: Item[]
  page: number
}>()
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="tenders-grid" :key="page">
      <TenderCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.tenders-grid {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
