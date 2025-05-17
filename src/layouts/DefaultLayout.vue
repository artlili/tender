<script setup lang="ts">
import { useRoute } from 'vue-router'
import HeaderBar from '@/components/common/HeaderBar.vue'
import FooterBar from '@/components/common/FooterBar.vue'

const route = useRoute()
</script>

<template>
  <div class="layout">
    <HeaderBar />

    <main class="layout-main">
      <Transition name="fade-view" mode="out-in">
        <router-view :key="route.fullPath" />
      </Transition>
    </main>

    <FooterBar />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-main {
    flex-grow: 1;
    padding: 2rem;
  }
}
</style>
