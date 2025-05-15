<template>
  <section id="home" class="hero">
    <div class="hero_img_wrapper">
      <img :src="heroImage" alt="" v-lazy-animate="{delay: 100}" class="hero_img">
      <img :src="linesImage" alt="" v-lazy-animate="{delay: 100}" class="lines_img">
    </div>

    
    <div class="hero_wrapper">
      <div class="hero_content">
        <div class="hero_counter">{{ formattedCounter }}</div>
        <div class="hero_counter_description">Total number of successful <br> transactions supervised <br> by us today</div>
      </div>
      

      <div class="hero_content_wrapper">
        <a href="#contact">
          <div class="mobile-menu__button">
            Get in touch
          </div>
        </a>
        <div class="hero_title">
          Talk to us about:
        </div>
        <div class="services_list">
          <div class="service_item">
            <div class="service_item_title">
              Payment <br> processing
            </div>
            <div class="service_item_description">
              Multitude of payment methods available globally - cards and alternative payment methods. We introduce your business to both deposits and payouts.
            </div>
          </div>
          <div class="divider"></div>
          <div class="service_item">
            <div class="service_item_title">
              Banking
            </div>
            <div class="service_item_description">
              We share connections with a global banking network, so that you could open B2B accounts, make transfers and foreign exchange seamlessly.  
            </div>
          </div>
          <div class="divider"></div>
          <div class="service_item">
            <div class="service_item_title">
              Payment <br> Technology
            </div>
            <div class="service_item_description">
              We advise regarding all the questions related to payment software development, data protection and data storage consulting.
            </div>
          </div>
          <div class="divider"></div>
          <div class="service_item">
            <div class="service_item_title">
              Compliance and <br> Risk management
            </div>
            <div class="service_item_description">
              We help create and implement robust compliance policies and procedures tailored to specific regulatory requirements and industry best practices.
            </div>
          </div>
          <a href="#contact">
          <div class="mobile-menu__button mobile-menu__button_second">
            Get in touch
          </div>
        </a>
        </div>
        <div class="buttons_wrapper">
        <router-link to="/#contact" class="cta_button">
          <div class="button_cotainer">
            Get in touch
            <svg class="arrow_icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M22 22L22 0H19.4017L19.4017 17.2815L3.14653 1.02631L1.02521 3.14763L17.2793 19.4017L6.74348e-07 19.4017L0 22L22 22Z"/>
</svg>
          </div>
        </router-link>
        <router-link to="/hiring" class="cta_button">
          <div class="button_cotainer">
            we are hiring
            <svg class="arrow_icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M22 22L22 0H19.4017L19.4017 17.2815L3.14653 1.02631L1.02521 3.14763L17.2793 19.4017L6.74348e-07 19.4017L0 22L22 22Z"/>
</svg>
          </div>
        </router-link>
      </div>
      </div>
      <div class="img_2_container">
      <div class="hero_img_wrapper wap_img_2">
      <img :src="heroImage1" alt="" v-lazy-animate="{delay: 100}" class="hero_img img_2">
      <img :src="line1Image" alt="" v-lazy-animate="{delay: 100}" class="lines_img line_1">
    </div>
    </div>
    <div class="hero_cta">
      <img :src="mapImage" alt="" class="map_img">
      <div class="hero_cta_title">
        our business vision extends
above and beyond specific industry or geogrphy
      </div>
      <div class="hero_cta_description">
        We are experts in fintech, no matter where you do it. Each clients gets a personal account manager available 24/7.
        <br> <br>
Our connections with an extensive global network of payment method providers brings flexibility multiplied by worldwide coverage.
      </div>
      <a href="#contact">
          <div class="mobile-menu__button mobile-menu__button_third">
            Get in touch
          </div>
        </a>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import heroImage from '../assets/images/hero_img.svg';
import heroImage1 from '../assets/images/hero_img1.svg';
import linesImage from '../assets/images/lines.svg';
import line1Image from '../assets/images/line1.svg';
import mapImage from '../assets/images/map.webp';

// Счетчик
const counter = ref(0);
const intervalId = ref<number | null>(null);

// Форматирование числа с пробелами через каждые 3 цифры
const formattedCounter = computed(() => {
  return counter.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

// Функция для получения количества дней с начала года
const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

// Инициализация счетчика
const initCounter = () => {
  const dayOfYear = getDayOfYear();
  
  // Определяем начальное и конечное значения
  const startValue = 1000 + dayOfYear;
  const endValue = 25000 + dayOfYear;
  
  // Получаем текущее время UTC
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const secondsPassed = utcHours * 3600 + utcMinutes * 60 + utcSeconds;
  const secondsInDay = 24 * 60 * 60;
  
  // Рассчитываем прогресс дня (от 0 до 1)
  const dayProgress = secondsPassed / secondsInDay;
  
  // Рассчитываем текущее значение счетчика на основе времени дня
  const currentValue = Math.floor(startValue + (endValue - startValue) * dayProgress);
  counter.value = currentValue;
  
  // Обновляем счетчик с рандомными интервалами
  const updateCounter = () => {
    // Увеличиваем счетчик только на 1
    counter.value += 1;
    
    // Ограничиваем верхним пределом
    if (counter.value > endValue) {
      counter.value = endValue;
    }
    
    // Устанавливаем следующий интервал (от 0.5 до 3 секунд)
    const nextInterval = Math.floor(Math.random() * 2500) + 500;
    intervalId.value = window.setTimeout(updateCounter, nextInterval);
  };
  
  // Запускаем обновление
  updateCounter();
};

onMounted(() => {
  initCounter();
});

onUnmounted(() => {
  if (intervalId.value !== null) {
    clearTimeout(intervalId.value);
  }
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  min-height: 223.4rem;
  @media screen and (max-width: 768px) {
    min-height: 187rem;
  }
}

.hero_wrapper {
  top: 5rem;
  position: relative;
  max-width: 90rem;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: 959px) {
    top: 0;
    height: 100%;
    overflow: hidden;
    flex-direction: column-reverse;
  }
}

.hero_content {
  position: absolute;
  left: 50%;
  top: 30.4rem;
  transform: translateX(85%);
  @media screen and (max-width: 768px) {
    top: 14.5em;
    transform: translateX(0%);
  }
}


.hero_counter {
  position: relative;
  left: 0;
  color: #F2F2F2;
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  width: 16rem;
  z-index: 10;
  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
  }
}

.hero_counter_description {
  position: relative;
  color: #F2F2F2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align: left;
  z-index: 1;
  margin-top: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 0.625rem;
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
  width: auto;
  left: 50%;
  transform: scale(var(--scale-value)) translateX(-50%);
  height: 1088px;
  z-index: 1;
  transform-origin: top;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
}

.hero_content_wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 47rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 25rem;
    overflow: hidden;
  }
}

.hero_title {
  position: relative;
  text-align: left;
  display: flex;
  color: #F2F2F2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7.5rem;
  width: 12rem;
  white-space: nowrap;
  margin-top: .75rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 2rem;
    margin-top: 7rem;
  }
}

.services_list {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 13.25rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
}

.service_item {
  position: relative;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.service_item_title {
  position: relative;
  color: #C9B36E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  width: 16rem;
}

.service_item:nth-child(n+2) .service_item_title {
  margin-top: 1.5rem;
}




.service_item_description {
  position: relative;
  color: #C9B36E;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 9.75rem;
  max-width: 16rem;
  margin-top: .75rem;
  line-height: 130%;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
}

.service_item:nth-child(n+2) .service_item_description {
  margin-top: 2.1rem;
}

.divider {
  position: relative;
    left: -15%;
    width: 152%;
    height: 3px;
    opacity: 0.3;
    background: #C9B36E;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
      left: 0;
      width: 100%;
    }
}

.buttons_wrapper {
  position: relative;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  margin-left: 14.2rem;
  margin-top: 10.5rem;
  max-width: 60.5rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 4rem;
    flex-direction: column;
  }
}

.cta_button {
  position: relative;
  width: 100%;
  text-decoration: none;
}

.button_cotainer {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  max-width: 26rem;
  height: 8.7rem;
  border: 3px solid rgba(201, 179, 110, 0.30);
  color: #C9B36E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-top: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background: #C9B36E;
    color: #000;
    
    .arrow_icon {
      fill: #000;
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 7.25rem);
    margin-left: 3rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}

.arrow_icon {
  position: absolute;
  bottom: 1.15rem;
  right: 1.15rem;
  fill: #C9B36E;
  transition: all 0.3s ease;
}

.wap_img_2 {
  position: absolute;
  margin-top: 4rem;
  height: 800px;
  width: auto;
  transform-origin: top center;
  transform: scale(var(--scale-value)) translateX(-50%);
  
  
}

.line_1 {
  position: absolute;
  transform: perspective(600px) rotateX(52deg);
  -webkit-transform: perspective(600px) rotateX(52deg);
  left: -716px;
  width: 1000px;
  height: auto;
  top: 141px;
  margin-left: 216px;
}

.img_2 {  
  position: absolute;
  margin-top: 25px;
  width: 1057px;
  height: 251px;

}

.img_2_container {
  position: relative;
  width: 100%;
  height: 53rem;
  @media screen and (max-width: 768px) {
    height: 23rem;
  }
}

.hero_cta {
  position: relative;
  margin-top: -2.25rem;
  
}

.hero_cta_title {
  position: relative;
  color: #C9B36E;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  line-height: 130%;
  max-width: 51rem;
  margin-left: 7.25rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.6rem;
  }
}

.hero_cta_description {
  position: relative;
  color: #C9B36E;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 12.5rem;
  margin-top: 3rem;
  line-height: 130%;
  max-width: 19rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.75rem;
  }
}

.hero_cta_button {
  position: relative;
  color: #000;
  background: #FFF;
  text-align: center;
  font-size: 1.46rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  padding: 0.75rem 1.8rem;
  max-width: 10.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 12.5rem;
  margin-top: 4.25rem;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background: #C9B36E;
    color: #000;
  }
  @media screen and (max-width: 768px) {
   margin-left: 1rem;
   margin-top: 1rem;
   width: calc(100% - 5.5rem);
   max-width: unset;
   font-size: 0.875rem;
   height: 0.75rem;
  }
}

.map_img {
  position: absolute;
  top: 7rem;
  left: 26rem;
  width: 69rem;
  height: auto;
}

.mobile-menu__button {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    color: #000;
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0.44rem 1.7rem;
    background: #FFF;
    width: calc(100% - 5rem);
    margin-left: 1rem;
    margin-top: 1rem;
  }
  &:hover {
    background: #C9B36E;
    color: #000;
  }
}
.mobile-menu__button_second {
  margin-left: 0;
  width: calc(100% - 4.2rem);
  margin-top: 4rem;
}

.mobile-menu__button_third {
  margin-left: 1rem;
  width: calc(100% - 5.2rem);
  margin-top: 4rem;
}





</style>
