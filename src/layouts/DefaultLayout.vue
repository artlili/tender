<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="layout">
    <header class="layout-header">
      <h1>Тендеры</h1>
    </header>

    <main class="layout-main">
      <router-view />
    </main>

    <footer class="layout-footer">
      <p>© {{ new Date().getFullYear() }} TenderApp</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-header {
    padding: 1rem;
    text-align: center;
    background: $gradient-primary;

    h1 {
      color: white;
    }
  }

  &-main {
    flex-grow: 1;
    padding: 2rem;
  }

  &-footer {
    padding: 1rem;
    background: $color-light;
    text-align: center;
    font-size: 0.8rem;
    color: $color-muted;
  }
}
</style>
