<template>
  <section id="about" class="about_us">
    <img src="/img/about_us.webp?1" class="about_us_img" alt="about us bg">
    <div class="about_us_wrapper">
      <h1 class="about_us_title" v-lazy-animate="{delay: 100}">About us</h1>
      <h5 class="about_us_subtitle" v-lazy-animate="{delay: 300}">
        Makeberry is a full-service marketing agency dedicated to helping brands grow, scale, and stand out. For us, marketing isn't just about promotion—it's about crafting meaningful experiences that connect with your audience.
        <br>
        <br>
        We blend strategy, design, and technology to build brands that people trust and remember. No cookie-cutter solutions, no empty promises—just powerful marketing that delivers real results.
      </h5>
      

    </div>

  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.about_us {
  position: relative;
  width: 100%;
  top: 0;
  min-height: 42.5rem;
  left: 0;
  height: auto;
  background: #8801FF;
  scroll-margin-top: 85px;
}

.about_us_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  @media screen and (max-width: 1150px) {
    max-width: 90%;
  }
}





.about_us_title {
  color: #FFF;
  font-style: normal;
  font-weight: 900;
  line-height: 4rem;
  padding-top: 8rem;
  position: relative;
  @media screen and (max-width: 959px) {
    padding-top: 4rem;
  }
}

.about_us_subtitle {
  color: #FFF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: left;
  position: relative;
  margin-top: 1.7rem;
  max-width: 38rem;
  @media screen and (max-width: 959px) {
    padding-bottom: 20rem;
    font-size: 1.25rem;
  }
}

.about_us_img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(0%) scale(1.25);
  width: 40.45rem;
  height: 40.45rem;
  flex-shrink: 0;
  aspect-ratio: 647.17/647.17;
  animation: ImageFloat 3s ease-in-out infinite;
  @media screen and (max-width: 959px) {
    top: 57%;
    left: 50%;
    transform: translateX(-50%) scale(1);
  }
}


</style>
