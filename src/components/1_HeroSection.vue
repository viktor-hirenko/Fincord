<template>
  <section id="home" class="hero">
    <div class="hero_img_wrapper">
    <img src="/img/hero_img.svg" alt="" v-lazy-animate="{delay: 100}" class="hero_img">
    <img src="/img/lines.svg" alt="" v-lazy-animate="{delay: 100}" class="lines_img">
  </div>

    
    <div class="hero_wrapper">
      <div class="hero_content">
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
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10.8rem;
  filter: drop-shadow(0px 0px 70px black);
  @media screen and (max-width: 959px) {
    top: 0;
  }
}

.hero_title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #FFF;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  white-space: nowrap;
  @media screen and (max-width: 959px) {
    font-size: 1.75rem;
  }
}

.hero_title_span_br {
  display: none;
  @media screen and (max-width: 959px) {
    display: block;
  }
}

.hero_subtitle {
  position: relative;
  text-align: center;
  max-width: 32rem;
  margin: 0 auto;
  color: #FFF;
  top: 0.9rem;
  @media screen and (max-width: 959px) {
    font-size: 1.25rem;
  }
}

.hero_subtitle_span {
  color: var(--Alpa-Fonts-colors-color-text-menu-active, #FDD835);
  cursor: pointer;
}

@keyframes heroImageRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hero_button {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.5rem;
  background: linear-gradient(90deg, #BB01FF 0%, #8501FF 100%);
  top: 3.15rem;
  @media screen and (max-width: 959px) {
    filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.49));
  }
}

.hero_button:hover {
  background: linear-gradient(90deg, #ff0ddd 0%, #ff031c 100%);
}

.button_text {
  color: #000;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (max-width: 959px) {
    font-size: 1.4rem;
  }
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
