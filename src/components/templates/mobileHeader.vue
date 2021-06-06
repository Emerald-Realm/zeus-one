<template>
  <div class="mobile-header md:hidden">
    <div class="logo-bar flex justify-between items-center">
      <!-- <div class="logo w-full flex flex-col items-center justify-center"> -->
      <img :src="logo" class="logo-image" alt="logo" />
      <!-- logo -->
      <!-- </div> -->
      <button
        class="mobile-menu p-1 md:hidden"
        @click="mobileMenu = !mobileMenu"
      >
        Menu
      </button>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div
        class="mobile-link-bar gap-4 border-double py-1 border-primary-bgLight border-b-2 border-t-2 mt-2"
        v-show="mobileMenu"
      >
        <router-link to="/" class="block">Home</router-link>
        <a href="#resume-component" class="block">resume</a>
        <a href="#projects-component" class="block">projects</a>
        <a href="#about-component" class="block">about</a>
        <a href="#contact-component" class="block">contact</a>
        <a href="#"><span @click="scrollToTop">top</span></a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mobileHeader",
};
</script>

<style>
</style>