<template>
  <div class="about flex-col space-y-4 px-4 md:px-8 lg:px-40 py-5" id='about-component'>
    <div class="align flex justify-center align-middle">
      <div class="about-content grid gap-8 md:item-center md:grid-cols-2 md:gap-40 md:flex">
        <div class="about-img-outer order-2 w-60">
          <img
            :src="marley"
            class="about-img-inner rounded-xl"
            alt="maley with guitar"
          />
        </div>
        <div
          class="about-other w-64 flex-col space-y-2 align-middle justify-center"
        >
        <p
          class="about-title font-bold text-xl uppercase text-primary-dark dark:text-gray-200"
        >
          My Story
        </p>
          <p class="about-context dark:text-gray-300">
            I have a passion for elegant design aestetics and testing boundaries
            of user interactions and creating innovative product experience for
            users
          </p>
          <!-- <track-record /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marley from "../../assets/media/images/redd.jpg";
import trackRecord from "./trackRecord.vue";

export default {
  components: { trackRecord },
  name: "about",
  data() {
    return {
      marley,
    };
  },
};
</script>

<style>

</style>
