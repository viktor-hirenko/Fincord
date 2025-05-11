<template>
  <section id="services" class="services">
    <img src="/img/s_bg.webp" v-lazy-animate="{delay: 0}" class="picture_bg" alt="">
    <div class="services_wrapper">
      <h1 class="services_title" v-lazy-animate>Our Services</h1>
      <div class="content_wrapper" v-lazy-animate="{delay: 200}">
        <div class="content_img_wrapper">
          <img src="/img/services/1.webp?1" class="content_img" alt="Strategic Branding & PR">
        </div>
        <div class="content_text">
          <img src="/img/services/tag1.svg" v-lazy-animate="{delay: 200}" class="content_tag_img" alt="Branding tag">
          <img src="/img/services/tag1m.svg" v-lazy-animate="{delay: 200}" class="content_tag_img_mobile" alt="Branding tag">
          <h5 class="content_text_description">Your brand is more than just a logo — it's a story. We craft compelling narratives, build media relationships, and position your business as an industry leader to strengthen brand trust and recognition.</h5>
        </div>
      </div>
      <div class="mobile_divider"></div>
      <div class="content_wrapper reverse_column_mobile" v-lazy-animate="{delay: 200}">
        
        <div class="content_text content_text_position_desktop">
          <img src="/img/services/tag2.svg" v-lazy-animate="{delay: 200}" class="content_tag_img" alt="Branding tag">
          <img src="/img/services/tag2m.svg" v-lazy-animate="{delay: 200}" class="content_tag_img_mobile" alt="Branding tag">
          <h5 class="content_text_description">
            First impressions matter. Our designers and UX specialists create sleek, high-performing websites that not only look stunning but also provide an intuitive, seamless experience that drives conversions.
          </h5>
        </div>
        <div class="content_img_wrapper">
          <img src="/img/services/2.webp?1" class="content_img" alt="Strategic Branding & PR">
        </div>
      </div>
      <div class="mobile_divider"></div>
      <div class="content_wrapper" v-lazy-animate="{delay: 200}">
        <div class="content_img_wrapper">
          <img src="/img/services/3.webp?1" class="content_img" alt="Strategic Branding & PR">
        </div>
        <div class="content_text">
          <img src="/img/services/tag3.svg" v-lazy-animate="{delay: 200}" class="content_tag_img" alt="Branding tag">
          <img src="/img/services/tag3m.svg" v-lazy-animate="{delay: 200}" class="content_tag_img_mobile" alt="Branding tag">
          <h5 class="content_text_description">
            Visibility is key to success. We blend technical SEO with high-quality content strategies to boost rankings, engage your audience, and turn organic traffic into long-term customers.
          </h5>
        </div>
      </div>
      <div class="mobile_divider"></div>
      <div class="content_wrapper reverse_column_mobile" v-lazy-animate="{delay: 200}">
        
        <div class="content_text content_text_position_desktop">
          <img src="/img/services/tag4.svg" v-lazy-animate="{delay: 200}" class="content_tag_img" alt="Branding tag">
          <img src="/img/services/tag4m.svg" v-lazy-animate="{delay: 200}" class="content_tag_img_mobile" alt="Branding tag">
          <h5 class="content_text_description">
            Every click should count. Our data-driven approach to PPC, social media ads, and retargeting ensures you reach the right audience with precision, maximising your ROI and accelerating growth.
          </h5>
        </div>
        <div class="content_img_wrapper">
          <img src="/img/services/4.webp?1" class="content_img" alt="Strategic Branding & PR">
        </div>
      </div>
      <div class="mobile_divider"></div>
      <div class="content_wrapper margin_top_desktop" v-lazy-animate="{delay: 200}">
        <div class="content_img_wrapper">
          <img src="/img/services/5.webp?1" style="height: 38.3rem;" class="content_img" alt="Strategic Branding & PR">
        </div>
        <div class="content_text">
          <img src="/img/services/tag5.svg" v-lazy-animate="{delay: 200}" class="content_tag_img" alt="Branding tag">
          <img src="/img/services/tag5m.svg" v-lazy-animate="{delay: 200}" class="content_tag_img_mobile" alt="Branding tag">
          <h5 class="content_text_description">
            Scaling a business requires more than just marketing — it needs a plan. We develop customised, insight-driven strategies that 
            align with your goals, ensuring sustainable 
            and measurable success.
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.services {
  position: relative;
  width: 100%;
  min-height: 202rem;
  left: 0;
  height: auto;
  background: linear-gradient(0deg, #2C0055 0%, #000 38.84%);
}

.margin_top_desktop {
  margin-top: -4rem;
  @media screen and (max-width: 959px) {
    margin-top: 0;
  }
}

.services_title {
  color: #FFF;
  text-align: center;
  padding-top: 5rem;
  @media screen and (max-width: 959px) {
    font-size: 2.5rem;
    text-align: left;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
}

.services_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  @media screen and (max-width: 1150px) {
    width: 90%;
  }
}

.content_wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    flex-direction: row;
    @media screen and (max-width: 959px) {
      align-items: flex-start;
      flex-direction: column-reverse;
    }
}

.content_img_wrapper {
  position: relative;
  width: 50%;
  height: auto;
  overflow: visible;
  @media screen and (max-width: 959px) {
    width: 100%;
    position: relative;
  }
}

.content_img {
  position: relative;
  width: 42.25rem;
  height: 39.8125rem;
  left: -2.5625rem;
  top: -1.625rem;
  animation: imageAnimation 3s ease-in-out infinite;
  @media screen and (max-width: 959px) {
    width: 18rem;
    height: auto!important;
    left: 50%;
    transform: translate(-50%);
    top: 0;
  }
}

@keyframes imageAnimation {
  50% {
    top: -0.625rem;
  }
}

.content_tags {
  font-size: 2.25rem;
  white-space: nowrap;
}

.white_border {
  border: 0.1875rem solid #FFF;
  background-color: #000000;
}

.content_tag_img {
  position: relative;
    width: auto;
    height: 3.37rem;
    margin-top: 7.75rem;
    @media screen and (max-width: 959px) {
      display: none;
    }
}

.content_tag_img_mobile {
  display: none;
  position: relative;
  width: auto;
  height: 6rem;
  margin-top: 1rem;
  @media screen and (max-width: 959px) {
    display: block;
  }
}

.content_text {
  position: relative;
  width: 50%;
  height: auto;
  left: 1rem;
  @media screen and (max-width: 959px) {
    width: 100%;
    position: relative;
    left: 0;
  }
}

.content_text_position_desktop {
  left: 0; 
  top: 2rem;
  @media screen and (max-width: 959px) {
    position: relative;
    left: 0;
    top: 0;
  }
}

.content_text_title {
  position: relative;
  color: #FFF;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: 4rem;
  text-align: left;
  margin-top: 2.5rem;
}

.content_text_description {
  color: #FFF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 1.5rem;
  max-width: 37rem;
  text-align: left;
  @media screen and (max-width: 959px) {
    padding-bottom: 2rem;
    font-size: 1.25rem;
  }
}

.reverse_column_mobile {
  @media screen and (max-width: 959px) {
    flex-direction: column;
  }
}

.mobile_divider {
  display: none;
  @media screen and (max-width: 959px) {
    display: block;
    height: 0.0625rem;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.20);
  }
}




</style>
