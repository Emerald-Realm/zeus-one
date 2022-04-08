<template>
  <div
    class="philosophy p-20 bg-no-repeat bg-cover md:bg-contain md:bg-repeat
    flex text-center item-center justify-center"
    :style="{ backgroundImage: `url(${banner})` }"
  >
  <!-- <div
    class="philosophy p-20 sm:bg-top sm:bg-cover flex align-middle justify-center
     bg-no-repeat md:bg-cover md:bg-repeat md:bg-center"
    :style="{ backgroundImage: `url(${sabo})` }"
  > -->
  <p class="philosophy-context text-center rounded-md p-4 inline bg-primary-dark text-white bg-opacity-80 font-bold italic">Consitency and Focus is the way</p>
  </div>
</template>

<script>
import banner from "../../assets/media/images/praise banner.png";

export default {
  name: "philosophy",
  data() {
    return {
      banner,
    };
  },
};
</script>

<style>
</style>