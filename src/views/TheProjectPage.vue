<template>
  <div class="project-page px-4 md:px-20 pt-20">
    <h2
      class="my-header-projects py-4 text-xl uppercase text-primary-dark font-bold uppercase"
    >
      My Projects
    </h2>
    <div v-for="project in projectsList" :key="project.id"
    class="py-8 md:grid md:grid-cols-2 md:gap-16 md:items-center" 
    >
      <div class="main-image-container w-full">
        <img :src="project.image" class="rounded-lg border-4 border-white hover:border-primary-dark" :alt="project.alt" />
      </div>
      <div class="sub-container grid grid-cols-1 md:gap-4">
        <div class="product-context order-2 md:order-none grid-cols-1">
          <p class="date ">{{ project.date }}</p>
          <p class="name text-primary-dark font-bold text-md uppercase">{{project.name}}</p>
          <p class="made-with">Made with</p>
          <p class="app text-primary-dark font-semibold text-sm uppercase">{{ project.app }}</p>
        </div>
        <div class="sub-product-images-container grid grid-cols-3 py-4 gap-4">
          <img :src="project.image" class="rounded-md border-4 border-primary-bgLight hover:border-primary-dark" :alt="project.alt" />
          <img :src="project.image" class="rounded-md border-4 border-primary-bgLight hover:border-primary-dark" :alt="project.alt" />
          <img :src="project.image" class="rounded-md border-4 border-primary-bgLight hover:border-primary-dark" :alt="project.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectsList from "../assets/apis/projectsList";

export default {
  name: "projectPage",
  components: {},
  data() {
    return {
      projectsList,
    };
  },
};
</script>
<style>
</style>
