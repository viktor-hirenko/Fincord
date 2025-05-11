<template>
  <section id="contact" class="cta">
    <div class="cta_wrapper">
      <h1 class="cta_title">Get started with <br>
        Makeberry</h1>
        <div class="cta_subtitle">
          Let’s create something powerful together! <br>
          Have questions? Contact us at <a href="mailto:info@makeberry.com">info@makeberry.com</a>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.cta {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  min-height: 26rem;
  background: linear-gradient(270deg, #8501FF -2.45%, #BB01FF 100%);
  @media screen and (max-width: 959px) {
    min-height: 18rem;
  }
}

.cta_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  @media screen and (max-width: 1150px) {
    max-width: 90%;
  }
}

.cta_title {
  color: #FFF;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  padding-top: 5rem;
  @media screen and (max-width: 959px) {
    font-size: 2rem;
    padding-top: 2rem;
  }
}

.cta_subtitle {
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 200% */
  padding-top: 1rem;
  a {
    color: #FFF;
    text-decoration: underline;
    font-weight: 700;
    &:hover {
      color: #ff0775;
    }
  }
  @media screen and (max-width: 959px) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
}


</style>
