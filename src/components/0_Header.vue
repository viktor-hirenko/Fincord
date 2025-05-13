<template>
  <div class="header">
    <div class="header_wrapper">
      <router-link to="/">
        <img src="/img/logo.svg" alt="Makeberry" class="header__logo"/>
      </router-link>
      <!-- Десктопное меню -->
      <div class="menu_wrapper">
        <div class="menu_item">
          <router-link to="/" class="menu-link">product</router-link>
        </div>
        <div class="menu_item">
          <router-link to="/#about" class="menu-link">about</router-link>
        </div>
        <div class="menu_item">
          <router-link to="/hiring" class="menu-link">hiring</router-link>
        </div>
        <div class="menu_item">
          <router-link to="/blog" class="menu-link">blog</router-link>
        </div>
      </div>
      
      <div class="header-controls">
        <a href="mailto:info@makeberry.com">
          <div class="header__button">
            <div class="button_text">Contact Us</div>
          </div>
        </a>
        
        <!-- Гамбургер для мобильного меню -->
        <div class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    
    <!-- Мобильное меню -->
    <Transition name="menu-fade">
      <div class="mobile-menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
    </Transition>
    
    <Transition name="menu-slide">
      <div class="mobile-menu" v-if="isMenuOpen">
        <div class="mobile-menu__close" @click="closeMenu">
          <span></span>
          <span></span>
        </div>
        <div class="mobile-menu__items">
          <div class="mobile-menu__item" @click="closeMenu($event)">
            <router-link to="/" class="mobile-menu-link">product</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu($event)">
            <router-link to="/#about" class="mobile-menu-link">about</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu($event)">
            <router-link to="/hiring" class="mobile-menu-link">hiring</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu($event)">
            <router-link to="/blog" class="mobile-menu-link">blog</router-link>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Блокируем скролл при открытом меню
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = (e?: MouseEvent) => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 6.25rem;
  justify-content: space-between;
  align-items: center;
  background: #000000d4;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
}

.header_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 83rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.header__logo {
  display: flex;
  margin-left: 4rem;
  width: 11.75rem;
  height: 2.06rem;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
}

.header__button {
  position: relative;
  display: flex;
  margin-right: 4rem;
  cursor: pointer;
  padding: 0.44rem 1.7rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #F2F2F2;
  @media screen and (max-width: 1000px) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 959px) {
    margin-right: 1rem;
  }
}

.header__button:hover {
  background: #C9B36E;
}

.button_text {
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  @media screen and (max-width: 959px) {
    font-size: 0.95rem;
  }
}

.menu_wrapper {
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;
  margin-left: 3rem;
  margin-right: auto;
  @media screen and (max-width: 1100px) {
    gap: 2rem;
  }
  @media screen and (max-width: 959px) {
    display: none;
  }
}

.menu_item {
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
}

.menu-link {
  color: #fff !important;
  text-decoration: none;
}

.menu-link:hover, 
.menu-link.router-link-exact-active {
  color: #C9B36E !important;
}

/* Гамбургер меню */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-right: 1rem;
  position: relative;
  z-index: 1100;
  
  @media screen and (max-width: 959px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  &.is-active {
    span:nth-child(1) {
      transform: translateY(8.5px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: translateY(-8.5px) rotate(-45deg);
    }
  }
}

.header-controls {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

/* Мобильное меню */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1001;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background-color: #0F0F0F;
  z-index: 1002;
  padding: 5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-menu__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    
    &:nth-child(1) {
      transform: rotate(45deg);
    }
    
    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
}

.mobile-menu__items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu__item {
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
}

.mobile-menu-link {
  color: #fff !important;
  text-decoration: none;
}

.mobile-menu-link:hover,
.mobile-menu-link.router-link-exact-active {
  color: #C9B36E !important;
}

.mobile-menu__button {
  margin-top: 2rem;
  display: flex;
  padding: 0.55rem 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.5rem;
  background: linear-gradient(90deg, #BB01FF 0%, #8501FF 100%);
  
  &:hover {
    background: #C9B36E;
  }
}

/* Анимации */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateX(100%);
}

a {
  text-decoration: none;
}
</style>
