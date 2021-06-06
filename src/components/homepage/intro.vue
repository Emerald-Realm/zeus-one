<template>
  <!-- <div class="intro text-center m-x-10 mx-10 flex-col space-y-10"> -->
  <!-- <div class="intro text-center pt-20 px-2 md:px-40 grid md:grid-cols-3 gap-8 align-middle justify-center space-y-10"> -->
  <div
    class="intro text-center pt-20 px-2 md:px-8 lg:px-40 flex flex-col md:flex-row align-middle justify-center space-y-10 dark:bg-gray-800 dark:text-white"
  >
    <div
      class="intro-zeus self-center flex-col space-y-1 md:space-y-1 justify-center text-center md:text-left"
    >
      <p class="hello">Hello I am</p>
      <p class="zeus text-primary-dark font-bold text-4xl dark:text-primary">
        ZEUS<br />STORMHEART.
      </p>
      <p class="job">UX/UI DESIGNER</p>
    </div>
    <div class="intro-img w-60 m-auto flex-shrink-0">
      <img :src="gmt" class="w-full" alt="zeus" />
    </div>
    <p
      class="intro-quote italic text-primary self-center md:self-end text-sm flex-shrink dark:text-white"
    >
      Light and Fast is the Winner
    </p>
  </div>
</template>

<script>
import gmt from "../../assets/media/images/GMT- master.png";

export default {
  name: "intro",
  data() {
    return {
      gmt,
    };
  },
};
</script>

<style>
</style>