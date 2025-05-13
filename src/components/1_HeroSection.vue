<template>
  <section id="home" class="hero">
    <div class="hero_img_wrapper">
    <img src="/img/hero_img.svg" alt="" v-lazy-animate="{delay: 100}" class="hero_img">
    <img src="/img/lines.svg" alt="" v-lazy-animate="{delay: 100}" class="lines_img">
  </div>

  <div class="noice"></div>
    <div class="hero_wrapper">
      <div class="hero_content">
        <div class="hero_counter">{{ formattedCounter }}</div>
        <div class="hero_counter_description">Total number of successful <br> transactions supervised <br> by us today</div>
      </div>
      <div class="hero_content_wrapper">
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
          <div class="divider"></div>
        </div>
        




      </div>
      
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

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
  height: 223.4rem;
}

.hero_wrapper {
  top: 5rem;
  position: relative;
  max-width: 90rem;
  width: 100%;
  display: flex;
  justify-content: center;
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
  width: 1216px;
  left: 50%;
  transform: translateX(-50%);
  height: 1088px;
  z-index: 1;
  transform-origin: top;
  @media screen and (max-width: 1250px) {
    transform: scale(0.9) translateX(-55%);
  }
  @media screen and (max-width: 1100px) {
    transform: scale(0.8) translateX(-60%);
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.7) translateX(-65%);
  }
  @media screen and (max-width: 959px) {
    transform: scale(0.6) translateX(-70%);
  }
}

.hero_content_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 47rem;
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
}

.services_list {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 13.25rem;
}

.service_item {
  position: relative;
  display: flex;
  flex-direction: row;
}

.service_item_title {
  position: relative;
  color: #C9B36E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

.service_item_description {
  position: relative;
  color: #C9B36E;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 15.25rem;
  max-width: 16rem;
  margin-top: .75rem;
  line-height: 130%;
}

.divider {
  position: relative;
    left: -15%;
    width: 152%;
    height: 3px;
    opacity: 0.3;
    background: #C9B36E;
    margin-top: 2rem;
}

</style>
