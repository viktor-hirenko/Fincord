<template>
  <section id="home" class="hero">
    <div class="hero_img_wrapper">
    <img src="/img/hero_img.svg" alt="" v-lazy-animate="{delay: 100}" class="hero_img">
    <img src="/img/lines.svg" alt="" v-lazy-animate="{delay: 100}" class="lines_img">
  </div>

    
    <div class="hero_wrapper">
      <div class="hero_content">
        <div class="hero_counter">20 711</div>
        <div class="hero_counter_description">Total number of successful <br> transactions supervised <br> by us today</div>
      </div>
      
    </div>
    <div class="noice"></div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 62.1rem;
  height: 100vh;
    @supports (height: 100dvh) {
      height: 100dvh;
    }
  @media screen and (max-width: 959px) {
    min-height: unset;
    
  }
}

.hero_wrapper {
  top: 5rem;
  position: relative;
  max-width: 76rem;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 959px) {
    top: 0;
    height: 100%;
    overflow: hidden;
    flex-direction: column-reverse;
  }
}

.hero_content {
  position: absolute;
  left: 50%;
  top: 30.4rem;
  transform: translateX(85%);
}


.hero_counter {
  position: relative;
  left: 0;
  color: #F2F2F2;
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  z-index: 1;
  width: 16rem;
}

.hero_counter_description {
  position: relative;
  color: #F2F2F2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align: left;
  z-index: 1;
  margin-top: 0.6rem;
}



.hero_img {
  position: absolute;
  top: 112px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: auto;
  z-index: 0;
}

.lines_img {
  position: absolute;
  top: -96px;
  left: 50%;
  transform: perspective(800px) rotateY(54deg) rotateZ(346deg) translateX(-16%);
  -webkit-transform: perspective(800px) rotateY(54deg) rotateZ(346deg) translateX(-16%);
  width: 928px;
  height: 100%;
  z-index: 1;
}

.hero_img_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: top;
  @media screen and (max-width: 1250px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 1100px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.7);
  }
  @media screen and (max-width: 959px) {
    transform: scale(0.6);
  }
}

.noice {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-image: url('/img/noise.svg');
  background-size: 6.25rem;
  background-position: center;
  background-repeat: repeat;
  mix-blend-mode: color-burn;
  pointer-events: none;
}



</style>
