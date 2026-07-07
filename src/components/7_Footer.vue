<template>
  <div class="footer">
    <div class="footer_wrapper">
      <router-link
        to="/privacy-policy"
        class="footer_text"
        @click="trackCta('footer', 'Privacy Policy', '/privacy-policy')"
      >Privacy Policy</router-link>
      <router-link
        to="/cookie-policy"
        class="footer_text"
        @click="trackCta('footer', 'Cookie Policy', '/cookie-policy')"
      >Cookie Policy</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnalytics } from '../composables/useAnalytics';

const { trackCtaClick } = useAnalytics();

const trackCta = (location: string, label: string, url: string): void => {
  trackCtaClick({ cta_location: location, cta_label: label, link_url: url });
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 6.25rem;
  justify-content: space-between;
  align-items: center;
  background: #C9B36E;
  @media screen and (max-width: 768px) {
    height: 3.25rem;
  }
}

.footer_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 75rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1150px) {
    width: 90%;
    left: 5%;
    transform: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    left: 5%;
    transform: none;
    display: flex;
    justify-content: space-between;
    max-width: unset;
  }
}

.footer_text {
  position: relative;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 3rem;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    white-space: nowrap;
  }
}

.footer_text:hover {
  color: #000;
  text-decoration: underline;
}

</style>
