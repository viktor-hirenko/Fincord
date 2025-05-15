<template>
  <div class="coming-soon-container">
    <h1>coming soon</h1>
    <p class="stay">stay</p>
    <p class="tuned">tuned</p>
    <div class="coming_soon_img_wrapper">
      <img :src="linesImage" alt="coming soon" class="lines">
    </div>
  </div>
</template>

<script setup lang="ts">
// Компонент Coming Soon
import linesImage from '../assets/images/lines.svg';
</script>

<style lang="scss" scoped>
.coming-soon-container {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh); /* Вычитаем высоту хедера и футера */
  background-color: #000;
  @supports (min-height: 100dvh) {
    min-height: calc(100dvh);
  }
  
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #F2F2F2;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 768px) {
      white-space: nowrap;
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #F2F2F2;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
}

.stay {
  position: absolute;
  bottom: 2rem;
  left: 6rem;
  @media (max-width: 768px) {
    left: 2rem;
  }
}

.tuned {
  position: absolute;
  bottom: 2rem;
  right: 6rem;
  @media (max-width: 768px) {
    right: 2rem;
  }
}



.coming_soon_img_wrapper {
  position: absolute;
  height: 1000px;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--scale-value));
}

.lines {
  position: absolute;
  top: 0;
  left: -928px;
  width: 1200px;
  height: 100%;
  transform: perspective(800px) rotateY(-54deg);
}



</style> 