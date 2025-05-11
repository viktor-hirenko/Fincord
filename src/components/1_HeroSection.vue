<template>
  <section id="home" class="hero">
    <img src="/img/hero_img.webp?1" alt="" v-lazy-animate="{delay: 100}" class="hero_img">
    <div class="hero_wrapper">
      <div class="hero_content">
      <h1 class="hero_title" v-lazy-animate="{delay: 300}">
        <span class="hero_title_span_white"><span>Be Seen</span></span>
        <span class="hero_title_span_color">Be Heard</span> <br class="hero_title_span_br"> 
        <span class="hero_title_span_pink">Be Unforgettable</span>
      </h1>
      <h2 class="hero_subtitle" v-lazy-animate="{delay: 600}">
        From SEO to branding, <br class="hero_title_span_br">  we build marketing <br>
         that sticks. Let's get started!
        </h2>
        <a href="mailto:info@makeberry.com">
        <div class="hero_button" v-lazy-animate="{delay: 800}">
        <div class="button_text">Contact Us</div>
      </div>
      </a>
      </div>
      
    </div>
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
  background: linear-gradient(180deg, #8501FF 0%, #000 100%);
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
  top: -10rem;
  left: 50%;
  transform: translateX(-50%) scale(1.15);
  width: 1080px;
  height: 1080px;
  aspect-ratio: 1 / 1;
  animation: ImageFloat 3s ease-in-out infinite;
  @media screen and (max-width: 959px) {
    height: 100%;
    width: auto;
    top: 0;
  }
}



</style>
