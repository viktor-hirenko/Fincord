<template>
  <section id="why_us" class="faq">
    <img src="/img/s_bg.webp?1" v-lazy-animate="{delay: 0}" class="picture_bg" alt="">
    <div class="faq_wrapper">
      <h1 class="faq_title">Why Work With Us?</h1>
      <h5 class="faq_subtitle">
        We provide full-cycle services, including in-house media buying, affiliate marketing solutions, tech development, and data analytics, ensuring our partners achieve the highest ROI.
      </h5>
      
      <!-- Блок с картинкой и преимуществами -->
      <div class="benefits-container" v-lazy-animate>
        <div class="benefits-image">
          <img src="/img/faq_img.webp" alt="Benefits image" />
        </div>
        <!-- Блок преимуществ -->
        <div class="benefits-list">
          <div class="benefit-item" v-lazy-animate="{delay: 100}">
            <div class="benefit-bullet">
              <img src="/img/check.svg" alt="Check mark" />
            </div>
            <div class="benefit-content">
              <span class="benefit-title">We think beyond clicks: </span>
              <span class="benefit-description">traffic is great, but conversions are better. Every strategy we create is built to drive real, measurable results.</span>
            </div>
          </div>
          
          <div class="benefit-item" v-lazy-animate="{delay: 200}">
            <div class="benefit-bullet">
              <img src="/img/check.svg" alt="Check mark" />
            </div>
            <div class="benefit-content">
              <span class="benefit-title">Creative meets data: </span>
              <span class="benefit-description">our campaigns aren't just beautiful; they're backed by insights, analytics, and continuous optimisation.</span>
            </div>
          </div>
          
          <div class="benefit-item" v-lazy-animate="{delay: 300}">
            <div class="benefit-bullet">
              <img src="/img/check.svg" alt="Check mark" />
            </div>
            <div class="benefit-content">
              <span class="benefit-title">Full-service, zero hassle:</span>
              <span class="benefit-description">from branding and web design to SEO and paid ads, we handle everything—so you can focus on running your business.</span>
            </div>
          </div>
          
          <div class="benefit-item" v-lazy-animate="{delay: 400}">
            <div class="benefit-bullet">
              <img src="/img/check.svg" alt="Check mark" />
            </div>
            <div class="benefit-content">
              <span class="benefit-title">Proven results, no guesswork. </span>
              <span class="benefit-description">We've helped brands grow, scale, and dominate their industries. Yours could be next.</span>
            </div>
          </div>
          
          <!-- Кнопка Contact Us -->
          <a href="mailto:info@makeberry.com">
          <div class="header__button benefits-button" v-lazy-animate="{delay: 500}">
            <div class="button_text">Contact Us</div>
          </div>
          </a>

        </div>
      </div>
      
      <!-- Секция FAQ с отдельным id -->
      <section id="faq" class="faq-section">
        <h2 class="faq_subtitle_2">Frequently asked questions</h2>
        <div class="faq__items" v-lazy-animate>
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="faq__item"
            :class="{ 'active': activeIndex === index }"
            v-lazy-animate="{delay: 100 + (index * 100)}"
          >
            <div 
              class="faq__question" 
              @click="toggleItem(index)"
            >
              <span>{{ item.question }}</span>
              <div class="faq__toggle-icon" :class="{ 'active': activeIndex === index }">
                {{ activeIndex === index ? '-' : '+' }}
              </div>
            </div>
            <div class="faq__answer" :style="getAnswerStyle(index)">
              <div class="faq__answer-content" :ref="(el) => { if (el) answerRefs[index] = el as HTMLElement }">
                <div class="faq__text-answer">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { sendAnalyticsEvent } from '../utils/analytics';

const activeIndex = ref<number | null>(null);
const answerRefs: HTMLElement[] = [];

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems = ref<FaqItem[]>([
  {
    question: 'How do you measure the success of a marketing campaign?',
    answer: 'We use advanced analytics, KPIs, and real-time performance tracking to ensure every campaign delivers tangible, data-backed results.'
  },
  {
    question: 'Can you improve our website\'s conversion rate?',
    answer: 'Absolutely! Our UX specialists and CRO experts optimise design, content, and user journeys to turn visitors into loyal customers.'
  },
  {
    question: 'Do you only work with big brands?',
    answer: 'Not at all! We support businesses of all sizes, from startups to established companies, with tailor-made strategies that fit their goals and budgets.'
  },
]);

// Инициализация массива ссылок и настройка плавной прокрутки для якорных ссылок
onMounted(() => {
  // Добавляем обработчик для всех якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      // Отправляем аналитику для клика по якорной ссылке
      const anchorClickData = {
        'location': 'brand_lp',
        'eventLabel': targetId
      };
      
      sendAnalyticsEvent('anchor_link_click', anchorClickData);
      
      // Получаем верхнюю позицию элемента с учетом прокрутки
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      // Увеличиваем смещение до 100px для компенсации хедера и прочих элементов
      const offsetPosition = targetPosition - 100;
      
      // Скроллим с анимацией к скорректированной позиции
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});

const toggleItem = async (index: number) => {
  if (activeIndex.value !== index) {
    const faqExpandData = {
      'location': 'brand_lp',
      'eventLabel': faqItems.value[index].question
    };
    
    sendAnalyticsEvent('lp_faq_expand', faqExpandData);
    console.log(`FAQ expanded: ${faqItems.value[index].question}`);
  }
  
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
    // Дождемся обновления DOM перед пересчетом высоты
    await nextTick();
  }
};

const getAnswerStyle = (index: number) => {
  const isActive = activeIndex.value === index;
  
  if (!isActive) {
    return { maxHeight: '0', overflow: 'hidden' };
  }
  
  // Если элемент активен, устанавливаем высоту на основе фактического содержимого
  const contentHeight = answerRefs[index]?.scrollHeight || 0;
  return { 
    maxHeight: `${contentHeight}px`,
    overflow: 'visible'
  };
};


</script>

<style lang="scss" scoped>
.faq {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  background: linear-gradient(0deg, #2C0055 0%, #000 38.84%);
  scroll-margin-top: 80px; /* Добавляем отступ для корректной прокрутки */
}

.faq_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 5rem;
  @media screen and (max-width: 1150px) {
    max-width: 90%;
  }
}

.faq__items {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 3.5rem;
  max-width: 38rem;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 2rem;
}

.faq__item {
  overflow: visible;
  transition: all 0.3s ease;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
  min-height: 6rem;
  position: relative;

  &.active {
    background: rgba(255, 255, 255, 0.10);
    margin-bottom: 1.5rem;
  }
}

.faq__question {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 2rem 1.5rem;
  cursor: pointer;
  color: #FFF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 959px) {
    padding: 1rem 1rem 2rem;
  }
}

.faq__toggle-icon {
  flex-shrink: 0;
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
  margin-top: 0.1rem;
}

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  position: relative;
}

.faq_title {
  position: relative;
  color:  #F7F7F7;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;
  margin-top: 5rem;
  @media screen and (max-width: 959px) {
    font-size: 2rem;
    text-align: left;
    margin-top: 4rem;
  }
}

.faq__answer-content {
  padding: 0 2rem 2rem 2rem;
  position: relative;
}

.faq__text-answer {
  color: #B6BDCC;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.faq_icon {
  position: relative;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 6rem;
  height: 6rem;
  aspect-ratio: 1/1;
}

.faq_subtitle {
  color: #FFF;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 1.5rem;
  max-width: 60rem;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 959px) {
    font-size: 1.25rem;
    text-align: left;
    margin-top: 1rem;
  }
}

.faq_icon_1 {
  position: absolute;
  top: 7.25rem;
  left: 50rem;
  height: auto;
  width: 5rem;
  aspect-ratio: 97/103;
  animation: float 5s ease-in-out infinite;
  @media screen and (max-width: 959px) {
    top: 6.25rem;
    left: 19rem;
    width: 3rem;
  }
}

.faq_icon_2 {
  position: absolute;
    top: 13.25rem;
    left: -12rem;
    height: auto;
    width: 7rem;
    aspect-ratio: 1 / 1;
  animation: float 7s ease-in-out infinite;
  @media screen and (max-width: 959px) {
    top: 13.25rem;
    left: -1rem;
    width: 4rem;
    z-index: 1;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Стили для блока преимуществ */
.benefits-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  margin-bottom: 2rem;
  gap: 2rem;
  
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 3rem;
  }
}

.benefits-image {
  width: 48%;
  flex-shrink: 0;
  animation: ImageTranslate 3s ease-in-out infinite;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
  }
  
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
}

@keyframes ImageTranslate {
  50% {
    transform: translateY(-10px);
  }
}

.benefits-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 48%;
  margin-top: 2rem;
  
  @media screen and (max-width: 991px) {
    width: 100%;
    gap: 1rem;
  }
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.benefit-bullet {
  flex-shrink: 0;
  margin-top: 0.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-bullet img {
  width: 100%;
  height: 100%;
}

.benefit-content {
  flex-wrap: wrap;
}

.benefit-title {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  display: inline;
}

.benefit-description {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  display: inline;
}

@media screen and (max-width: 768px) {
  .benefit-title, 
  .benefit-description {
    font-size: 1rem;
  }
}

.benefits-button {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  align-self: flex-start;
  @media screen and (max-width: 959px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    margin-top: 1rem;
  }
}

.header__button {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 0.55rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 8rem;
  border-radius: 5.5rem;
  background: linear-gradient(90deg, #BB01FF 0%, #8501FF 100%);
}

.header__button:hover {
  background: linear-gradient(90deg, #ff0ddd 0%, #ff031c 100%);
}

.button_text {
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.faq_subtitle_2 {
  position: relative;
  color: #FFF;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 4rem;
  @media screen and (max-width: 959px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
}

.picture_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: 0.1;
  z-index: -1;
}

/* Стили для новой секции FAQ */
.faq-section {
  position: relative;
  padding-top: 4rem;
  margin-top: 2rem;
  scroll-margin-top: 100px; /* Увеличиваем отступ для корректной прокрутки */
  scroll-behavior: smooth;
  display: block;
  content-visibility: auto;
}

#faq {
  /* Явно указываем id для гарантированного применения стилей */
  scroll-margin-top: 100px;
  padding-top: 20px; /* Дополнительный отступ сверху для визуального разделения */
  position: relative;
}
</style>
