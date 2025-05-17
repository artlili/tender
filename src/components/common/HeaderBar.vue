<template>
  <header class="layout-header">
    <router-link to="/" class="logo-link">
      <h1>Тендеры</h1>
    </router-link>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
  padding: 1rem;
  text-align: center;
  background: $gradient-primary;

  .logo-link {
    display: inline-block;
    text-decoration: none;

    h1 {
      color: white;
      transition:
        transform 0.3s ease,
        color 0.3s ease;
    }

    &:hover h1 {
      transform: scale(1.02);
      text-decoration: none;
    }
  }
}
</style>
