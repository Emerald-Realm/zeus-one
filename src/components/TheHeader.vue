<template>
  <div
    class="header px-4 py-2 md:px-8 lg:px-40 bg-white md:grid md:grid-flow-col items-center 
    text-center z-10 uppercase text-xs dark:bg-gray-700"
    id="header-component"
  >
    <div class="logo-bar flex justify-between md:justify-none items-center flex-shrink-0">
      <!-- <div class="logo w-full flex flex-col items-center justify-center"> -->
        <img :src="logo" class="logo-image min-w-md max-w-2xl" alt="logo">
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
        class="mobile-link-bar gap-4 border-double py-1 md:hidden
        border-primary-bgLight border-b-2 border-t-2 mt-2"
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
    <div
      class="desktop-link-bar page-links hidden gap-8 py-1 md:flex flex-row item-center items-center justify-center"
    >
      <router-link to="/" class="block">Home</router-link>
      <a href="#resume-component" class="block">resume</a>
      <a href="#projects-component" class="block">projects</a>
      <a href="#about-component" class="block">about</a>
      <a href="#contact-component" class="block">contact</a>
      <a href="#"><span @click="scrollToTop">top</span></a>
    </div>
    <div
      class="desktop-link-bar hidden social-links md:flex flex-row justify-center items-center gap-4 flex-shrink"
    >
      <p class="social">twitter</p>
      <p class="social">facebook</p>
      <p class="social">instagram</p>
    </div>
  </div>
</template>

<script>
import logo from '../assets/zeus.svg'

export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenu: false,
      logo
    };
  },
  components: {},
  props: {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
      console.log("console top");
      console.log(this.mobileMenu);
    },
    updateHeader(e) {
      if (!e.target.classList.contains("mobile-link-bar")) {
        // if (this.mobileMenu = false) {
        if (this.mobileMenu = true) {
          // this.mobileMenu = false
          // console.log(this.mobileMenu);
          const mobileMenu = !this.mobileMenu;
          console.log(mobileMenu);
          this.mobileMenu = mobileMenu;
        }
      }
    },
  },
  created() {
    let mobileLinkBar = document.querySelector(".mobile-link-bar");

    document.addEventListener("mouseout", this.updateHeader);
    // document.addEventListener("mouseover", this.updateHeader);
    // return () => document.removeEventListener("mouseover", this.updateHeader);
    return () => document.removeEventListener("mouseout", this.updateHeader);
  },
};
</script>

<style>
</style>