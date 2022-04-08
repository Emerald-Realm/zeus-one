<template>
  <div id="projects-component" class="lg:px-40 md:px-8 px-4">
    <router-link to="/project">
      <p
        class="
          my-projects
          py-4
          text-xl
          uppercase
          text-primary-dark
          font-bold
          uppercase
          dark:text-gray-200
        "
      >
        My Projects
      </p>
    </router-link>
    <div
      class=" items-baseline project-content flex flex-nowrap overflow-auto align-bottom gap-4 md:overflow-x-scroll"
    >
      <div
        class="
          project-card
          md:w-96
          bg-no-repeat bg-cover
          flex-grow flex-shrink-0
        "
        v-for="project in projectsList"
        :key="project.id"
      >
        <!-- :style="{ backgroundImage: `url(${project.image})` }" -->
        <div class="image w-100">
          <img class="project-image h-full w-full object-cover" :src="project.image" :alt="project.alt" />
        </div>
        <p
          class="
            project-name
            top-48
            bg-primary-bgLight bg-opacity-50
            font-bold
            text-primary-bgDark
            p-2
            text-xl
          "
        >
          {{ project.name }}
        </p>
        <div
          class="
            project-btngrp
            flex
            bg-primary-bgDark
            py-4
            gap-4
            dark:flex
            bg-primary-bgLight
          "
        >
          <button class="project-btn-site text-white pl-4 dark:text-black">
            <a :href="project.link" class=" cool"> View Project</a>
          </button>
          <button class="project-btn-repo text-white dark:text-black">
            <a :href="project.repo" class="cool">View Github Repo</a>
          </button>
        </div>
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
