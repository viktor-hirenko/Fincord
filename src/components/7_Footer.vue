<template>
  <div class="footer">
    <div class="footer_wrapper">
      <a href="mailto:info@makeberry.com">
      <img src="/img/logo.svg" alt="Makeberry" 
      class="footer__logo"/>
    </a>
      <div class="social_wrapper">
        <a href="https://www.facebook.com/profile.php?id=61563233052007" target="_blank">
          <img src="/img/social_media/1.svg" alt="">
        </a>
        <a href="https://www.instagram.com/makeberry_affiliates/" target="_blank">
          <img src="/img/social_media/2.svg" alt="">
        </a>
        <a href="https://t.me/makeberry_affiliate" target="_blank">
          <img src="/img/social_media/3.svg" alt="">
        </a>
        <a href="https://www.linkedin.com/company/makeberry-affiliate/" target="_blank">
          <img src="/img/social_media/4.svg" alt="">
        </a>
        <a href="https://x.com/makeberry_aff" target="_blank">
          <img src="/img/social_media/5.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  background: #0F0F0F;
  z-index: 1000;
}

.footer_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1150px) {
    width: 90%;
    left: 5%;
    transform: none;
  }
}

.social_wrapper {
  position: relative;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 959px) {
    gap: 0.5rem;
  }
}

.social_wrapper a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
}

.social_wrapper a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  &:hover {
    filter: brightness(0.5);
  }
}



</style>
