<!-- src/components/TenderList.vue -->
<template>
  <Transition name="fade" mode="out-in">
    <div class="tenders-grid" :key="page">
      <div v-for="item in items.slice(0, 30)" :key="item.id" class="tender-card">
        <router-link :to="`/tenders/${item.id}`">
          <h3>{{ item.title }}</h3>
        </router-link>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  items: { id: number; title: string; description: string }[]
  page: number
}>()
</script>

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

.tender-card {
  padding: 1rem;
  border: 1px solid $color-border;
  border-radius: 0.5rem;
  background: $color-white;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.5rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    line-clamp: 5;
  }
}
</style>
