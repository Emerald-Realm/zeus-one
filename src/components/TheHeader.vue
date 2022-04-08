<template>
  <div
    class="header px-4 py-2 md:px-8 lg:px-40 bg-white md:grid md:grid-flow-col items-center 
    text-center z-10 uppercase text-xs dark:bg-gray-700"
    id="header-component"
  >
    <div class="logo-bar flex justify-between md:justify-none items-center font-bold text-xl flex-shrink-0">
        <a href="#"><span @click="scrollToTop"> Oyegoke Praise </span></a>    
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
      <a href="https://mobile.twitter.com/OyegokePraise" class="social">twitter</a>
      <a href="https://www.facebook.com/praise.oyegoke.1" class="social">facebook</a>
      <a href="https://www.linkedin.com/in/oyegoke-praise-755872210" class="social">LinkedIn</a>
    </div>
  </div>
</template>

<script>
import logo from '../assets/oyegokepraise.png'

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