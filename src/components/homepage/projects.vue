<template>
  <div id="projects-component" class="lg:px-40  md:px-8 px-4">
    <router-link to="/project">
    <p
      class="my-projects py-4 text-xl uppercase text-primary-dark font-bold uppercase dark:text-gray-200"
    >
      My Projects
    </p>
    </router-link>
    <div class="project-content flex flex-nowrap overflow-auto gap-4">
      <div
        class="project-card pt-72 md:pt-96 md:w-96 bg-no-repeat bg-cover flex-grow flex-shrink-0"
        v-for="project in projectsList"
        :style="{ backgroundImage: `url(${project.image})` }"
        :key="project.id"
      >
        <div class="image w-100">
          <!-- <img class="project-image" :src="project.image" :alt="project.alt" /> -->
        </div>
        <p
          class="project-name top-48 bg-primary-bgLight bg-opacity-50 font-bold text-primary-bgDark p-2 text-xl"
        >
          {{ project.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import projectsList from "../../assets/apis/projectsList";

export default {
  name: "projects",
  data() {
    return {
      projectsList,
    };
  },
};
</script>
<style scoped>
@media screen and (max-width: 799px) {
  .project-card {
    width: 80vw;
  }
}
</style>
