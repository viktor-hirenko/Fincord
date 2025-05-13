<template>
  <div class="footer">
    <div class="footer_wrapper">
      <div class="footer_text">Privacy Policy</div>
      <div class="footer_text">Cookie Policy</div>
      
    
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
  height: 6.25rem;
  justify-content: space-between;
  align-items: center;
  background: #C9B36E;
  z-index: 1000;
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
}

.footer_text:hover {
  color: #000;
}


</style>
