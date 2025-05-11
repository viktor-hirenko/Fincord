<template>
  <section id="experience" class="agency">
    <div class="agency_wrapper">
      <h1 class="agency_title" v-lazy-animate>We’re more than just an agency</h1>
      <div class="agency_content">
        <div class="agency_content_item" v-lazy-animate="{delay: 100}">
          <img src="/img/agency/1.svg" class="agency_icon" alt="Agency item">
          <div class="agency_content_item_title">
            Digital
          </div>
          <div class="agency_content_item_description">
            We harness cutting-edge tech to boost your online presence.
          </div>
        </div>
        <div class="agency_content_item" v-lazy-animate="{delay: 200}">
          <img src="/img/agency/2.svg" class="agency_icon" alt="Agency item">
          <div class="agency_content_item_title">
            Creative
          </div>
          <div class="agency_content_item_description">
            Stunning visuals and compelling content that tell your brand’s story.
          </div>
        </div>
        <div class="agency_content_item" v-lazy-animate="{delay: 300}">
          <img src="/img/agency/3.svg" class="agency_icon" alt="Agency item">
          <div class="agency_content_item_title">
            Strategy
          </div>
          <div class="agency_content_item_description" v-lazy-animate="{delay: 400}">
            Insight-driven campaigns designed for measurable success.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.agency {
  position: relative;
  width: 100%;
  min-height: 32.5rem;
  left: 0;
  height: auto;
  background: linear-gradient(270deg, #8501FF -2.45%, #BB01FF 100%);
}

.agency_title {
  color: #FFF;
  text-align: left;
  padding-top: 6rem;
  @media screen and (max-width: 959px) {
    padding-top: 4rem;
  }
}

.agency_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  @media screen and (max-width: 1150px) {
    max-width: 90%;
  }
}

.agency_content {
  display: flex;
  position: relative;
  padding-top: 4.2rem;
  justify-content: space-between;
  @media screen and (max-width: 959px) {
    flex-direction: column;
  }
}

.agency_content_item {
  position: relative;
  width: 28%;
  @media screen and (max-width: 959px) {
    width: 100%;
  }
}

.agency_icon {
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
}

.agency_content_item_title {
  color: #FFF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5rem; 
  margin-top: 1.25rem;
}

.agency_content_item_description {
  color: #FFF;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 0.25rem;
  @media screen and (max-width: 959px) {
    margin-bottom: 3rem;
  }
}

</style>
