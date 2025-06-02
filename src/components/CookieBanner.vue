<template>
  <Transition name="cookie-banner-fade">
    <div v-if="showBanner" class="cookie-banner">
      <div class="cookie-banner__container">
        <div class="cookie-banner__close" @click="acceptCookies">
          <span></span>
          <span></span>
        </div>
        
        <div class="cookie-banner__content">
          <h3 class="cookie-banner__title">COOKIES ON OUR SITE</h3>
          <p class="cookie-banner__text">
            We use cookies to improve user experience, protect our website, analyze your
            activity, and display ads. You can read more about cookies in our 
            <router-link to="/cookie-policy" class="cookie-banner__link">Cookie Policy</router-link>.
          </p>
          
          <div class="cookie-banner__actions">
            <button @click="acceptCookies" class="cookie-banner__button">
              <span class="button_text">OK</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

const checkCookieConsent = (): void => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showBanner.value = true
  }
}

const acceptCookies = (): void => {
  localStorage.setItem('cookie-consent', 'accepted')
  showBanner.value = false
}

onMounted(() => {
  // Небольшая задержка для плавного появления после загрузки страницы
  setTimeout(() => {
    checkCookieConsent()
  }, 1000)
})
</script>

<style lang="scss" scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  padding: 1rem;
  
  @media screen and (min-width: 769px) {
    bottom: 2rem;
    left: 2rem;
    right: auto;
    width: 400px;
    padding: 0;
  }
}

.cookie-banner__container {
  position: relative;
  background: #000;
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  @media screen and (max-width: 768px) {
    border-radius: 1rem 1rem 0 0;
    border-bottom: none;
  }
}

.cookie-banner__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  span {
    position: absolute;
    width: 70%;
    height: 1px;
    background-color: #fff;
    transition: opacity 0.2s ease;
    
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
  
  &:hover span {
    background-color: #C9B36E;
  }
}

.cookie-banner__content {
  padding-right: 2rem;
}

.cookie-banner__title {
  color: #FFF;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  
  @media screen and (min-width: 769px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}

.cookie-banner__text {
  color: #B6BDCC;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 1.25rem 0;
  
  @media screen and (min-width: 769px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
}

.cookie-banner__link {
  color: #C9B36E;
  text-decoration: underline;
  transition: color 0.2s ease;
  
  &:hover {
    color: #fff;
  }
}

.cookie-banner__actions {
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
}

.cookie-banner__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 2rem;
  background: #F2F2F2;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  @media screen and (min-width: 769px) {
    height: 3rem;
    padding: 0 1.7rem;
  }
  
  &:hover {
    background: #C9B36E;
  }
  
  .button_text {
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    
    @media screen and (min-width: 769px) {
      font-size: 1.25rem;
    }
  }
}

/* Анимации */
.cookie-banner-fade-enter-active,
.cookie-banner-fade-leave-active {
  transition: all 0.4s ease;
}

.cookie-banner-fade-enter-from {
  opacity: 0;
  transform: translateY(100%);
  
  @media screen and (min-width: 769px) {
    transform: translateY(20px) scale(0.95);
  }
}

.cookie-banner-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
  
  @media screen and (min-width: 769px) {
    transform: translateY(20px) scale(0.95);
  }
}
</style> 