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
  padding: 0.5rem;
  background: #000;
  
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
  border: 3px solid rgba(201, 179, 110, 0.30);
  border-radius: 0;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.cookie-banner__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 23px;
  height: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  span {
    position: absolute;
    width: 70%;
    height: 1px;
    background-color: #C9B36E;
    transition: opacity 0.2s ease;
    
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
  
  &:hover span {
    opacity: 0.7;
  }
}

.cookie-banner__content {
  padding-right: 2rem;
}

.cookie-banner__title {
  color: #F2F2F2;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 0 0.75rem 0;
  
  @media screen and (min-width: 769px) {
    margin-bottom: 1rem;
  }
}

.cookie-banner__text {
  color: #C9B36E;
  font-size: 1rem;
  line-height: 130%;
  font-style: normal;
  font-weight: 400;
  margin: 0 0 1.25rem 0;
  
  @media screen and (min-width: 769px) {
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
  margin-right: -2rem;
  margin-left: -1.5rem;
  margin-bottom: -1.5rem;
}

.cookie-banner__button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 95%;
    background: #F2F2F2;
    left: 50%;
    transform: translateX(-49%);
    margin-bottom: 1rem;
    border: none;
    border-radius: 0;
    cursor: pointer;
    transition: background-color 0.2s ease;
  
  @media screen and (min-width: 769px) {
    height: 3rem;
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