<template>
  <footer class="layout-footer">
    <p>© {{ new Date().getFullYear() }} TenderApp</p>
  </footer>
</template>

<style scoped lang="scss">
.layout-footer {
  padding: 1rem;
  background: $color-light;
  text-align: center;
  font-size: 0.8rem;
  color: $color-muted;
}
</style>
