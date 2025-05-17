<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/components/SearchInput.vue'

const searchQuery = ref('')
</script>

<template>
  <div class="container">
    <SearchInput v-model="searchQuery" placeholder="Поиск..." />
  </div>
</template>
