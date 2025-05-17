<template>
  <div class="loader-wrapper">
    <div class="spinner" />
  </div>
</template>

<style scoped lang="scss">
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid #e5e7eb; // light gray
  border-top-color: #007bff; // main blue
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
