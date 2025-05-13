<template>
  <section id="about" class="about_us">
    <div class="about_us_wrapper">
      <div class="about_us_titles_wrapper">
        <div class="about_us_title">PAYMENT SOLUTIONS TUNED WITH YOU IN MIND</div>
        <div class="about_us_subtitle">People-first approach is <br> the foundation of our work.</div>
        <router-link to="/#contact" class="desktop_button">Get in touch</router-link>
      </div>
      <div class="text_about_us_wrapper">
        <div class="text_about_us_title">
          WE ARE SAFE
        </div>
        <div class="text_about_us_content">
          Fraud-free online payment solutions and services, with complete safety and privacy ensured.
        </div>
        <div class="text_about_us_title">
          WE ARE <br class="desktop_br"> CLIENT-FOCUSED
        </div>
        <div class="text_about_us_content">
          Easy integration, constant support, and other needs handled as requested. We make it smooth for you.
        </div>
        <div class="text_about_us_title">
          WE ARE <br class="desktop_br"> PUPROSE-MADE
        </div>
        <div class="text_about_us_content">
          You seek unique solutions,we find them. Perfect-fit partnership ecosystem, selected based on your needs.
        </div>
        <div class="text_about_us_title">
          WE ARE <br class="desktop_br"> TRANSPARENT
        </div>
        <div class="text_about_us_content">
          You are aware of everything that's going on, with instant access to a customized merchant portal.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.about_us {
  position: relative;
  width: 100%;
  top: 0;
  min-height: 61.19rem;;
  left: 0;
  height: auto;
  background: #C9B36E;
  scroll-margin-top: 85px;
}

.about_us_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.about_us_titles_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-left: 1rem;
  width: 100%;
}

.about_us_title {
  position: relative;
  color: #000;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  max-width: 40rem;
  line-height: 130%;
}

.about_us_subtitle {
  position: relative;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3.25rem;
  margin-left: 5rem;
  max-width: 18rem;
  line-height: 130%;
}

.desktop_button {
  position: relative;
  color: #C9B36E;
  text-align: center;
  font-size: 1.4625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #000;
  max-width: 14.3rem;
  padding: 0.75rem 0;
  margin-top: 4rem;
  margin-left: 5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
}

.desktop_button:hover {
  background: #FFF;
  color: #000;
}

.text_about_us_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-left: 1rem;
  width: 50%;
}

.text_about_us_title {
  position: relative;
  color: #000;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 1.5rem;
  max-width: 18rem;
}

.text_about_us_title:nth-child(n+2) {
  margin-top: 2.3rem;
}

.text_about_us_content {
  position: relative;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.35rem;
  max-width: 20rem;
  line-height: 130%;
}

.desktop_br {
  display: none;
}

@media (min-width: 960px) {
  .desktop_br {
    display: block;
  }
}

</style>
