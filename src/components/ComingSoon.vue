<template>
  <div class="coming-soon-container">
    <h1>Coming Soon</h1>
    <p>We're working on this page. Please check back later.</p>
  </div>
</template>

<script setup lang="ts">
// Компонент Coming Soon
</script>

<style lang="scss" scoped>
.coming-soon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6.25rem - 6.25rem); /* Вычитаем высоту хедера и футера */
  padding: 2rem;
  background-color: #000;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #C9B36E;
    text-align: center;
  }
  
  p {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    max-width: 600px;
  }
}
</style> 