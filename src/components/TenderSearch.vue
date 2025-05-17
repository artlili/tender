<template>
  <form @submit.prevent>
    <input type="text" v-model="query" placeholder="Поиск по названию..." class="search-input" />
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useItemsStore } from '@/stores/itemsStore'

const query = ref('')
const store = useItemsStore()

watch(query, (val) => {
  store.setSearchQuery(val)
})
</script>

<style scoped lang="scss">
.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid $color-border;
  border-radius: 8px;

  &:focus {
    border-color: $color-primary;
    outline: none;
  }
}
</style>
