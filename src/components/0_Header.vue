<template>
  <div class="header">
    <div class="header_wrapper">
      <router-link to="/">
        <img src="/img/logo.svg" alt="Fincord" class="header__logo"/>
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
        <a href="#contact">
          <div class="header__button">
            <div class="button_text">Get in touch</div>
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
        <img src="/img/logo.svg" alt="Fincord" class="mobile-menu__logo"/>
        <div class="mobile-menu__close" @click="closeMenu">
          <span></span>
          <span></span>
        </div>
        <div class="mobile-menu__items">
          <div class="mobile-menu__item" @click="closeMenu">
            <router-link to="/" class="mobile-menu-link">product</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu">
            <router-link to="/#about" class="mobile-menu-link">about</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu">
            <router-link to="/hiring" class="mobile-menu-link">hiring</router-link>
          </div>
          <div class="mobile-menu__item" @click="closeMenu">
            <router-link to="/blog" class="mobile-menu-link">blog</router-link>
          </div>
        </div>
        <a href="#contact" @click="closeMenu">
          <div class="header__button mobile-menu__button">
            <div class="button_text">Get in touch</div>
          </div>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Блокируем скролл при открытом меню
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
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
  @media screen and (max-width: 768px) {
    height: 52px;
  }
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
  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    width: 5.25rem;
    height: 0.92rem;
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
  @media screen and (max-width: 768px) {
    display: none;
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
}

.menu_wrapper {
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;
  margin-left: 3rem;
  margin-right: auto;
  @media screen and (max-width: 768px) {
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
  color: #fff;
  text-decoration: none;
}

.menu-link:hover  {
  color: #C9B36E 
}


/* Гамбургер меню */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 12px;
  cursor: pointer;
  margin-right: 0.5rem;
  position: relative;
  z-index: 1100;
  
  @media screen and (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  span:nth-child(2) {
    width: 40%;
    margin-left: 60%;
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
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    
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
  font-size: 1.125rem;
  font-weight: 400;
}

.mobile-menu-link {
  color: #fff;
  text-decoration: none;
}

.mobile-menu-link:hover {
  color: #C9B36E;
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

.mobile-menu__logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 5.25rem;
  height: 0.92163rem;
}

.mobile-menu__button {
  position: absolute;
  display: flex;
  bottom: 8.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
}


</style>
