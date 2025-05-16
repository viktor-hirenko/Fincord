<template>
  <section id="about" class="about_us">
    <div class="about_us_wrapper">
      <div class="about_us_titles_wrapper">
        <div class="about_us_title">Smart control for growing payments</div>
        <div class="about_us_subtitle">Fincord gives you complete control over your payment operations — without added complexity, delays, or risk.</div>
        <router-link to="/#contact" class="desktop_button">Get in touch</router-link>
      </div>
      <div class="text_about_us_wrapper">
        <div class="text_about_us_title">
          BUILT-IN SECURITY
        </div>
        <div class="text_about_us_content">
          Every transaction is protected by real-time fraud detection and full compliance — keeping your business and customers secure by default.
        </div>
        <div class="text_about_us_title">
          END-TO-END SUPPORT
        </div>
        <div class="text_about_us_content">
          From initial onboarding to ongoing optimisation, our team ensures smooth, reliable payment operations at every stage.
        </div>
        <div class="text_about_us_title">
          SEAMLESS INTEGRATION
        </div>
        <div class="text_about_us_content">
          Launch quickly with modern APIs and pre-built components that fit into your existing systems.
        </div>
        <div class="text_about_us_title">
          FULL VISIBILITY
        </div>
        <div class="text_about_us_content">
          Track every payment in real time and make faster, data-driven decisions with complete clarity.
        </div>
        <router-link to="/#contact" class="mobile_button">Get in touch</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.about_us {
  position: relative;
  width: 100%;
  top: 0;
  min-height: 61.19rem;;
  left: 0;
  height: auto;
  background: #C9B36E;
  scroll-margin-top: 85px;
  @media screen and (max-width: 768px) {
    min-height: 58rem;
  }
}

.about_us_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 77rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.about_us_titles_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-left: 1rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
}

.about_us_subtitle {
  position: relative;
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3.25rem;
  margin-left: 5rem;
  max-width: 27rem;
  line-height: 130%;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-right: 2rem;
    text-align: left;
    max-width: unset;
    width: fit-content;
    margin-left: auto;
    right: 0;
    left: unset;
  }
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
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-left: 5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.desktop_button:hover {
  background: #FFF;
  color: #000;
}

.mobile_button {
  display: none;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    width: calc(100% - 2rem);
    display: block;
    position: relative;
    color: #C9B36E;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #000;
    padding: 0.75rem 0;
    margin-top: 4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    text-decoration: none;
  }
}

.mobile_button:hover {
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
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.text_about_us_title:nth-child(n+2) {
  margin-top: 2.3rem;
}

.text_about_us_content {
  position: relative;
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.35rem;
  max-width: 20rem;
  line-height: 130%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-width: unset;
    margin-right: 2rem;
    font-size: 0.75rem;
  }
}



</style>
