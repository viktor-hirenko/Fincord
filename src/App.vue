<template>
  <div class="app-container">
    <Header />
    <router-view />
    <CookieBanner />
  </div>
  
</template>

<script setup lang="ts">
import Header from './components/0_Header.vue'
import CookieBanner from './components/CookieBanner.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function adjustScale(): void {
  const vh = Math.round(window.innerHeight / 100)
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  
  // Динамическое изменение font-size и --scale-value
  const screenWidth = window.innerWidth
  const baseWidth = 1440
  const ratio = screenWidth / baseWidth
  
  if (screenWidth <= 768) {
    // Для мобильных устройств фиксированные значения
    document.documentElement.style.fontSize = '16px'
    const scaleValue = Math.max(0.1, Math.min(1, ratio/0.82)) 
    document.documentElement.style.setProperty('--scale-value', scaleValue.toFixed(3))
  } else {
    // Пропорциональное масштабирование для десктопов
    const fontSize = Math.max(8, Math.min(16, 16 * ratio)) // Ограничиваем минимум 10px, максимум 16px
    const scaleValue = Math.max(0.3, Math.min(1, ratio)) // Ограничиваем минимум 0.3, максимум 1
    
    document.documentElement.style.fontSize = `${fontSize}px`
    document.documentElement.style.setProperty('--scale-value', scaleValue.toFixed(2))
  }
}

// Функция для скролла к элементу по id
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

// Обработка редиректа с параметра route
function handleRouteParam(): void {
  const urlParams = new URLSearchParams(window.location.search)
  const routeParam = urlParams.get('route')
  
  if (routeParam) {
    // Убираем параметр из URL без перезагрузки страницы
    const newUrl = window.location.pathname
    window.history.replaceState({}, document.title, newUrl)
    
    // Редиректим на нужный маршрут
    router.push({ path: `/${routeParam}` })
  }
}

// Скрытие прелоадера после монтирования компонента
onMounted(() => {
  // Вызываем функцию при загрузке страницы
  adjustScale()
  
  // Добавляем обработчик события изменения размера окна
  window.addEventListener('resize', adjustScale)
  window.addEventListener('DOMContentLoaded', adjustScale)
  
  // Обработка хеша URL при загрузке страницы
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    scrollToElement(hash);
  }
  
  // Обработка параметра route 
  handleRouteParam();
  
  const preloader = document.getElementById('preloader_bg')
  const time = 0;
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
    }, time);
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
  --scale-value: 1;
  /* Удаляем статические медиа-запросы, теперь динамическое управление через JavaScript */
}

.app-container {
  position: relative;
  width: 100%;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-image: url('/img/noise.webp');
    background-size: 300px;
    background-position: center;
    background-repeat: repeat;
    pointer-events: none;
    opacity: 0.12;
  }

  .mobile_br {
    display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
}

.desktop_br {
    display: block;
      @media screen and (max-width: 768px) {
        display: none;
      }
}

</style>
