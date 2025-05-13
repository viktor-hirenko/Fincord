<template>
  <img src="/img/ref.png" alt="" class="ref">
  <div class="main_wrapper">
    <Header />
    <HeroSection />
    <AboutUs />
    <Services />
    <Agency />
    <FAQ />
    <ContactUs />
    <Footer  />
  </div>
  <div class="noise"></div>
</template>

<script setup lang="ts">
import Header from './components/0_Header.vue'
import HeroSection from './components/1_HeroSection.vue'
import AboutUs from './components/2_About_us.vue'
import Services from './components/3_Services.vue'
import Agency from './components/4_Agency.vue'
import FAQ from './components/5_FAQ.vue'
import ContactUs from './components/6_Contact_us.vue'
import Footer from './components/7_Footer.vue'
import { onMounted, ref } from 'vue'

const link = ref('https://winspirit3.com/registration');
function adjustScale(): void {
  const vh = Math.round(window.innerHeight / 100)
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Глобальный обработчик для всех якорных ссылок
function setupAnchorLinks(): void {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (!href) return;
      
      const targetId = href.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      // Получаем верхнюю позицию элемента с учетом прокрутки
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      // Увеличиваем смещение до 100px для компенсации хедера
      const offsetPosition = targetPosition - 50;
      
      // Скроллим с анимацией к скорректированной позиции
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// Функция для обработки скролла к элементу по id
function scrollToElement(id: string): void {
  const targetElement = document.getElementById(id);
  if (!targetElement) return;
  
  // Небольшая задержка для уверенности, что DOM полностью загружен
  setTimeout(() => {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - 100;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, 50);
}

// Скрытие прелоадера после монтирования компонента
onMounted(() => {
  window.addEventListener('DOMContentLoaded', adjustScale);
  
  // Настройка якорных ссылок
  setupAnchorLinks();
  
  // Обработка хеша URL при загрузке страницы
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    scrollToElement(hash);
  }
  
  // Прослушивание изменения хеша URL
  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      scrollToElement(hash);
    }
  });
  
  const preloader = document.getElementById('preloader_bg')
  const time = 0;
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
    }, time);
  }
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("link")) {
    link.value = urlParams.get("link") as string;
  }

  // Устанавливаем стили для предотвращения нежелательного скролла
  document.documentElement.style.overscrollBehavior = 'none';
  document.body.style.overscrollBehavior = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
})
</script>

<style lang="scss">
:root {
  font-size: 16px;
  
  @media screen and (max-width: 1250px) {
    font-size: 14px; 
  }
  @media screen and (max-width: 1000px) {
    font-size: 13px; 
  }
  @media screen and (max-width: 959px) {
    font-size: 15px; 
  }
}

.ref {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1440px;
  height: auto;
  z-index: -10;
  @media screen and (max-width: 900px) {
    display: none;
  }
}

.ref_mobile {
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 360px;
    height: auto;
  }
}

.main_wrapper {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  overflow: hidden;
}

h1 {
    color: var(--Alpa-Fonts-colors-color-text-alt, #FFF);
    font-size: 3rem;
    font-style: normal;
    font-weight: 900;
    line-height: 110%; 
    letter-spacing: 0.03rem;
    position: relative;
    @media screen and (max-width: 959px) {
        font-size: 2rem;
    }
}

h2 {
    font-size: 1.5rem;
    font-style: normal;
    text-align: center;
    line-height: 140%;
    position: relative;
    font-weight: 400;
    color: #FFF;
}

h5 {
    color: #B6BDCC;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: relative;
    @media screen and (max-width: 959px) {
        font-size: 1rem;
    }
}

/* Глобальные настройки для всех секций */
section {
  scroll-margin-top: 100px; /* Добавляем отступ для корректной прокрутки для всех секций */
}

.hero_title_span_white {
    position: relative;
    display: inline-block;
    border-radius: 5.5rem;
    padding: 3px;
    margin-right: 0.5rem;
    @media screen and (max-width: 959px) {
        margin-bottom: 1rem;
    }
  }
  
  .hero_title_span_white::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 5.5rem;
    background: linear-gradient(to left, #BB02FF, #8602FF);
    z-index: -1;
  }
  
  .hero_title_span_white span {
    display: block;
    border-radius: 5rem;
    background: #2E0F42;
    padding: 0.5rem 1.5rem;
  }
  
  .hero_title_span_color {
    border-radius: 5.5rem;
    border: 3px solid #ffffff;
    position: relative;
    padding: 0.25rem 1.25rem;
    margin-right: -0.25rem;
    background-image: linear-gradient(to right, #BB02FF, #8602FF);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: 1;
    @media screen and (max-width: 959px) {
      margin-right: 0;
    }
  }
  
  .hero_title_span_color::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2E0F42;
    border-radius: 5.5rem;
    z-index: -1;
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }
  
  .hero_title_span_pink {
    border-radius: 5.5rem;
    color: #000000;
    backdrop-filter: blur(25px);
    padding: 0.45rem 1.5rem;
    background: linear-gradient(to right, #BB02FF, #8602FF);
  }

  .picture_bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%)!important;
    width: 1440px;
    height: auto;
  }

  html {
    scroll-behavior: smooth;
  }

  @keyframes ImageFloat {
    50% {
      margin-top: 1rem;
      filter: brightness(0.8);
    }
  }

  .noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-image: url('/img/noise.svg');
  background-size: 100px;
  background-position: center;
  background-repeat: repeat;
  mix-blend-mode: color-burn;
  pointer-events: none;

}


</style>
