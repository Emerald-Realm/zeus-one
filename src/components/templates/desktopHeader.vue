<template>
  <div class="desktopHeader flex justify-between">
    <div class="logo-bar flex justify-between items-center md:w-16 flex-shrink-0">
      <img alt="logo" :src="logo" class="logo" />
      <button
        class="mobile-menu p-1 md:hidden"
        @click="mobileMenu = !mobileMenu"
      >
        Menu
      </button>
    </div>
    <div
      class="desktop-link-bar page-links hidden gap-8 py-1 flex flex-row items-center justify-center"
      :style="`${mobileMenu ? 'width:' : ''}`"
    >
      <router-link to="/" class="block">Home</router-link>
      <a href="#resume-component" class="block">resume</a>
      <a href="#projects-component" class="block">projects</a>
      <a href="#about-component" class="block">about</a>
      <a href="#contact-component" class="block">contact</a>
      <a href="#"><span @click="scrollToTop">top</span></a>
    </div>
    <div
      class="desktop-link-bar hidden social-links md:flex flex-row justify-center items-center gap-4"
    >
      <p class="social">twitter</p>
      <p class="social">facebook</p>
      <p class="social">instagram</p>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/zeus.svg";

export default {
  name: "desktopHeader",
  data() {
    return {
      logo,mobileMenu
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
      console.log("console top");
      console.log(this.mobileMenu);
    },
  },
};
</script>

<style>
</style>