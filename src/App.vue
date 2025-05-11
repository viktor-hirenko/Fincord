<template>
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
  background: linear-gradient(90deg, #1E093F 0%, #42078E 100%), linear-gradient(180deg, #0E151B 0%, #1C1140 70%);
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  overflow: hidden;
}




</style>
