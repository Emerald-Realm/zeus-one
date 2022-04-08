<template>
  <div class="resume flex-col justify-center space-y-4 px-4 
  md:px-8 lg:px-40 py-5 md:py-10 bg-purple-100 dark:bg-gray-600" id='resume-component'>
    <p class="resume-intro font-bold text-xl uppercase text-primary-dark py-1 dark:text-gray-200">
      I work with
    </p>
    <div
      class="resume-card-container grid md:grid-cols-3 gap-8"
    >
      <div
        class="resume-card shadow-sm md:shadow-md bg-white dark:bg-gray-500 p-4 rounded dark:text-gray-300"
        v-for="resume in resumeList"
        :key="resume.id"
      >
        <div class="resume-img-container"></div>
        <div class="resume-info">
          <p class="resume-title text-primary-dark text-lg font-medium dark:text-primary-light">
            {{ resume.title }}
          </p>
          <p class="resume-projects ">
            <!-- {{ resume.projects }} projects completed -->
          </p>
          <p class="resume-years">
            {{ resume.years }} years of exprience
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resumeList from "../../assets/apis/resumeList";

export default {
  name: "resume",
  data() {
    return {
      resumeList,
    };
  },
};
</script>

<style>
</style>