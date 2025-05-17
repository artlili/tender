<script setup lang="ts">
import type { Item } from '@/types'

defineProps<{
  item: Item
}>()
</script>
<template>
  <div class="tender-card">
    <router-link :to="`/tenders/${item.id}`" class="title-link">
      <h3>{{ item.title }}</h3>
    </router-link>
    <p class="description">{{ item.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.tender-card {
  padding: 1rem;
  border: 1px solid $color-border;
  border-radius: 0.5rem;
  background: $color-white;
}

.title-link {
  text-decoration: none;
  color: $color-text;

  h3 {
    color: inherit;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  &:hover h3 {
    color: $color-primary;
    text-decoration: none;
  }
}

.description {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  line-clamp: 5;
}
</style>
