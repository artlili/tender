<!-- src/components/TenderList.vue -->
<template>
  <Transition name="fade" mode="out-in">
    <div class="tenders-grid">
      <div v-for="item in items.slice(0, 30)" :key="item.id" class="tender-card">
        {{ item.title }}
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  items: { id: number; title: string; description: string }[]
}>()
</script>

<style scoped lang="scss">
.tenders-grid {
  display: grid;
  gap: 1rem;

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
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
